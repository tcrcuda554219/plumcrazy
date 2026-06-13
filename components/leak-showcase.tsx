"use client";

/* ────────────────────────────────────────────────────────────
   PHASE 2 — Under-slab leak 3D centerpiece (React Three Fiber)
   A translucent concrete slab with the home's copper supply
   network beneath it; one joint pulses as the detected leak,
   and an acoustic "ping" ring expands on the slab above it.
   Dramatizes slab-leak detection — the Las Vegas angle.
   ──────────────────────────────────────────────────────────── */

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PHONE_TEL, PHONE_DISPLAY } from "@/components/site";

const COPPER = "#c2703d";
const WATER = "#6cc6f2";

/* The supply network, plan-view on XZ; y is depth below the slab. */
const Y = -0.7;
const PIPES: [[number, number, number], [number, number, number]][] = [
  [[-4.2, Y, 0], [-1.6, Y, 0]], // main line in
  [[-1.6, Y, 0], [2.0, Y, 0]], // main run (leak lives here)
  [[-1.6, Y, 0], [-1.6, Y, -2.4]], // branch back-left
  [[-1.6, Y, 0], [-1.6, Y, 2.4]], // branch front-left
  [[2.0, Y, 0], [2.0, Y, -2.6]], // branch back-right
  [[2.0, Y, 0], [3.9, Y, 1.9]], // branch front-right (angled)
];
const JOINTS: [number, number, number][] = [
  [-1.6, Y, 0],
  [2.0, Y, 0],
];
/* Risers — short verticals up toward fixtures at branch ends. */
const RISERS: [number, number, number][] = [
  [-1.6, Y, -2.4],
  [-1.6, Y, 2.4],
  [2.0, Y, -2.6],
  [3.9, Y, 1.9],
];
const LEAK: [number, number, number] = [0.4, Y, 0];

function Pipe({
  start,
  end,
  radius = 0.13,
}: {
  start: [number, number, number];
  end: [number, number, number];
  radius?: number;
}) {
  const { mid, len, quat } = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = s.clone().add(e).multiplyScalar(0.5);
    const dir = e.clone().sub(s);
    const len = dir.length();
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { mid, len, quat };
  }, [start, end]);
  return (
    <mesh position={mid} quaternion={quat} castShadow>
      <cylinderGeometry args={[radius, radius, len, 18]} />
      <meshStandardMaterial color={COPPER} metalness={0.85} roughness={0.32} />
    </mesh>
  );
}

function Riser({ at }: { at: [number, number, number] }) {
  const top: [number, number, number] = [at[0], -0.12, at[2]];
  return <Pipe start={at} end={top} radius={0.1} />;
}

function Leak({ reduced }: { reduced: boolean }) {
  const bloom = useRef<THREE.Mesh>(null);
  const bloomMat = useRef<THREE.MeshBasicMaterial>(null);
  const ring = useRef<THREE.Mesh>(null);
  const ringMat = useRef<THREE.MeshBasicMaterial>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    if (reduced) return;
    const t = clock.getElapsedTime();
    // water bloom welling up at the leak
    const p = (t % 2) / 2;
    if (bloom.current && bloomMat.current) {
      const s = 0.25 + p * 1.7;
      bloom.current.scale.setScalar(s);
      bloomMat.current.opacity = (1 - p) * 0.42;
    }
    // acoustic detection ping on the slab surface above the leak
    const q = (t % 2.4) / 2.4;
    if (ring.current && ringMat.current) {
      const s = 0.2 + q * 2.6;
      ring.current.scale.set(s, s, s);
      ringMat.current.opacity = (1 - q) * 0.6;
    }
    if (light.current) {
      light.current.intensity = 5 + Math.sin(t * 5) * 2.5;
    }
  });

  return (
    <group>
      {/* glowing leak core */}
      <mesh position={LEAK}>
        <sphereGeometry args={[0.17, 24, 24]} />
        <meshStandardMaterial
          color={WATER}
          emissive={WATER}
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      {/* welling water bloom */}
      <mesh ref={bloom} position={LEAK}>
        <sphereGeometry args={[0.5, 20, 20]} />
        <meshBasicMaterial
          ref={bloomMat}
          color={WATER}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
      {/* pulsing point light */}
      <pointLight
        ref={light}
        position={[LEAK[0], LEAK[1] + 0.2, LEAK[2]]}
        color={WATER}
        intensity={5}
        distance={6}
      />
      {/* detection ping ring, flat on the slab surface */}
      <mesh
        ref={ring}
        position={[LEAK[0], 0.14, LEAK[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[0.5, 0.62, 48]} />
        <meshBasicMaterial
          ref={ringMat}
          color={WATER}
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Scene({ reduced }: { reduced: boolean }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 8, 4]} intensity={0.9} />
      <directionalLight position={[-6, 4, -3]} intensity={0.25} color={WATER} />

      {/* translucent concrete slab */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[11, 0.25, 7.5]} />
        <meshStandardMaterial
          color="#8a8682"
          transparent
          opacity={0.16}
          roughness={0.9}
          metalness={0}
          depthWrite={false}
        />
      </mesh>
      {/* slab edge frame for definition */}
      <lineSegments position={[0, 0, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(11, 0.25, 7.5)]} />
        <lineBasicMaterial color="#ece8e1" transparent opacity={0.16} />
      </lineSegments>

      {/* pipe network */}
      {PIPES.map((p, i) => (
        <Pipe key={i} start={p[0]} end={p[1]} />
      ))}
      {JOINTS.map((j, i) => (
        <mesh key={`j${i}`} position={j}>
          <sphereGeometry args={[0.17, 18, 18]} />
          <meshStandardMaterial color={COPPER} metalness={0.85} roughness={0.3} />
        </mesh>
      ))}
      {RISERS.map((r, i) => (
        <Riser key={`r${i}`} at={r} />
      ))}

      <Leak reduced={reduced} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.15}
      />
    </>
  );
}

function Stage() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const fn = () => setReduced(m.matches);
    m.addEventListener?.("change", fn);
    return () => m.removeEventListener?.("change", fn);
  }, []);

  return (
    <Canvas
      camera={{ position: [6.5, 5.2, 7], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene reduced={reduced} />
    </Canvas>
  );
}

export default function LeakShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="leak" id="leak-3d">
      <div className="wrap leak-grid">
        <div className="leak-copy">
          <span className="tag cool">
            <span className="deg">SLAB-LEAK DETECTION · LAS VEGAS</span>
          </span>
          <h2>
            The leak you can&apos;t see, <span className="ice">found.</span>
          </h2>
          <p className="lede">
            Vegas homes sit on concrete slabs — and a pinhole in a copper line
            underneath can run for months before you ever see a stain. We locate
            it electronically, pinpoint the exact spot, and open the smallest
            possible area. No guesswork. No jackhammering the whole floor on a
            hunch.
          </p>
          <ul className="check-list">
            <li>Acoustic + pressure location — we find it before we open anything</li>
            <li>Slab, supply-line, and hidden wall leaks</li>
            <li>Repair, reroute, or repipe the failed section — your call, our math</li>
          </ul>
          <div className="hero-ctas" style={{ marginTop: 30 }}>
            <a className="btn btn-plum" href="/services/leak-detection">
              Leak detection
            </a>
            <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="leak-stage" aria-hidden="true">
          {mounted ? (
            <Stage />
          ) : (
            <div className="leak-stage-fallback" />
          )}
          <span className="leak-cap">
            Live 3D · drag to orbit · the glow is the detected leak
          </span>
        </div>
      </div>
    </section>
  );
}
