"use client";

/* ────────────────────────────────────────────────────────────
   Exploded tankless water heater — scroll-scrubbed teardown.
   Stylized React Three Fiber primitives (same playbook as the
   leak scene). Lives on /services/water-heaters; sells the
   high-margin tankless upgrade. As you scroll the sticky
   section, the cabinet opens and the parts separate; the gas
   burner ignites and the copper heat-exchanger coil glows.
   ──────────────────────────────────────────────────────────── */

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { PHONE_TEL, PHONE_DISPLAY } from "@/components/site";

const COPPER = "#c2703d";
const WATER = "#6cc6f2";
const HOT = "#f0954d";
const STEEL_DK = "#3a3d44";
const STEEL_LT = "#c4c8ce";

const BEATS = [
  {
    t: "Endless hot water — on demand",
    d: "Cold water enters, races past the burner, and leaves hot. There's no tank to drain, so it never runs out mid-shower.",
  },
  {
    t: "A fraction of the footprint",
    d: "Wall-mounted and compact — it frees the closet or garage wall a bulky tank used to swallow.",
  },
  {
    t: "The burner fires only when you ask",
    d: "Open a tap and the gas burner ignites; close it and it shuts off. No standby loss reheating a tank all day, every day.",
  },
  {
    t: "Copper heat exchanger",
    d: "Water sprints through a copper coil over the flame and comes out hot in seconds — sized to run multiple fixtures at once.",
  },
];

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function Model({
  progressRef,
  reduced,
}: {
  progressRef: React.MutableRefObject<number>;
  reduced: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const frontPanel = useRef<THREE.Mesh>(null);
  const coil = useRef<THREE.Mesh>(null);
  const coilMat = useRef<THREE.MeshStandardMaterial>(null);
  const burner = useRef<THREE.Mesh>(null);
  const burnerMat = useRef<THREE.MeshStandardMaterial>(null);
  const flame = useRef<THREE.PointLight>(null);
  const inlet = useRef<THREE.Mesh>(null);
  const outlet = useRef<THREE.Mesh>(null);
  const gas = useRef<THREE.Mesh>(null);
  const p = useRef(0);

  const coilCurve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const turns = 5;
    const N = 180;
    const R = 0.66;
    const H = 1.55;
    for (let i = 0; i <= N; i++) {
      const a = (i / N) * turns * Math.PI * 2;
      const y = -H / 2 + (i / N) * H;
      pts.push(new THREE.Vector3(Math.cos(a) * R, y, Math.sin(a) * R));
    }
    return new THREE.CatmullRomCurve3(pts);
  }, []);

  // base + explode offset per part
  const set = (
    ref: React.RefObject<THREE.Mesh | null>,
    base: [number, number, number],
    off: [number, number, number],
    amt: number
  ) => {
    if (!ref.current) return;
    ref.current.position.set(
      base[0] + off[0] * amt,
      base[1] + off[1] * amt,
      base[2] + off[2] * amt
    );
  };

  useFrame((state, delta) => {
    // smooth toward scroll progress
    const target = progressRef.current;
    p.current += (target - p.current) * Math.min(1, delta * 6);
    const amt = p.current;

    set(frontPanel, [0, 0, 0.62], [0, 0.1, 2.4], amt);
    set(coil, [0, 0.35, 0], [0, 1.5, 0.5], amt);
    set(burner, [0, -0.95, 0], [0, -1.4, 0.5], amt);
    set(inlet, [-0.55, -1.7, 0.15], [-0.7, -1.2, 0.6], amt);
    set(outlet, [0.0, -1.8, 0.15], [0.0, -1.7, 0.6], amt);
    set(gas, [0.55, -1.7, 0.15], [0.8, -1.2, 0.6], amt);

    // burner ignition ramps in over the 3rd beat
    const fire = smoothstep(0.45, 0.72, amt);
    if (flame.current) {
      const flick = reduced ? 1 : 0.8 + Math.sin(state.clock.elapsedTime * 12) * 0.2;
      flame.current.intensity = fire * 6 * flick;
    }
    if (burnerMat.current) burnerMat.current.emissiveIntensity = fire * 2.2;
    if (coilMat.current) coilMat.current.emissiveIntensity = fire * 0.9;
    // no auto-rotation — the view is the user's to drag (OrbitControls)
  });

  return (
    <group ref={group}>
      {/* cabinet back */}
      <mesh position={[0, 0, -0.45]}>
        <boxGeometry args={[2.1, 3.2, 0.3]} />
        <meshStandardMaterial color={STEEL_DK} metalness={0.6} roughness={0.5} />
      </mesh>

      {/* internal chassis frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.85, 3.0, 0.7]} />
        <meshStandardMaterial color="#23252b" metalness={0.4} roughness={0.7} />
      </mesh>

      {/* copper heat-exchanger coil */}
      <mesh ref={coil}>
        <tubeGeometry args={[coilCurve, 200, 0.075, 12, false]} />
        <meshStandardMaterial
          ref={coilMat}
          color={COPPER}
          metalness={0.9}
          roughness={0.25}
          emissive={HOT}
          emissiveIntensity={0}
          toneMapped={false}
        />
      </mesh>

      {/* gas burner */}
      <mesh ref={burner}>
        <boxGeometry args={[1.5, 0.22, 0.8]} />
        <meshStandardMaterial
          ref={burnerMat}
          color="#2a2c31"
          metalness={0.5}
          roughness={0.6}
          emissive={WATER}
          emissiveIntensity={0}
          toneMapped={false}
        />
      </mesh>
      <pointLight
        ref={flame}
        position={[0, -0.95, 0.5]}
        color={WATER}
        intensity={0}
        distance={4}
      />

      {/* inlet (cold), outlet (hot), gas connections */}
      <mesh ref={inlet}>
        <cylinderGeometry args={[0.11, 0.11, 0.8, 18]} />
        <meshStandardMaterial color={WATER} metalness={0.5} roughness={0.35} emissive={WATER} emissiveIntensity={0.25} toneMapped={false} />
      </mesh>
      <mesh ref={outlet}>
        <cylinderGeometry args={[0.11, 0.11, 0.8, 18]} />
        <meshStandardMaterial color={HOT} metalness={0.5} roughness={0.35} emissive={HOT} emissiveIntensity={0.3} toneMapped={false} />
      </mesh>
      <mesh ref={gas}>
        <cylinderGeometry args={[0.09, 0.09, 0.8, 18]} />
        <meshStandardMaterial color="#caa23a" metalness={0.7} roughness={0.4} />
      </mesh>

      {/* front cabinet panel */}
      <mesh ref={frontPanel}>
        <boxGeometry args={[2.1, 3.2, 0.16]} />
        <meshStandardMaterial color={STEEL_LT} metalness={0.65} roughness={0.32} />
      </mesh>
    </group>
  );
}

function Stage({
  progressRef,
  reduced,
}: {
  progressRef: React.MutableRefObject<number>;
  reduced: boolean;
}) {
  return (
    <Canvas camera={{ position: [3.6, 1.4, 5.2], fov: 38 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={0.9} />
      <directionalLight position={[-5, 2, -2]} intensity={0.3} color={WATER} />
      <Model progressRef={progressRef} reduced={reduced} />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.9}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </Canvas>
  );
}

export default function TanklessExploded() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [beat, setBeat] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setMounted(true);
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);

    const onScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)) : 0;
      progressRef.current = p;
      const bi = Math.min(BEATS.length - 1, Math.floor(p * BEATS.length));
      setBeat((prev) => (prev === bi ? prev : bi));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="tankless">
      <div className="tankless-scroll" ref={scrollRef}>
        <div className="tankless-sticky">
          <div className="wrap tankless-grid">
            <div className="tankless-copy">
              <span className="tag cool">
                <span className="deg">INSIDE A TANKLESS · TEARDOWN</span>
              </span>
              <h2>
                Hot water without <span className="ice">the tank.</span>
              </h2>
              <div className="tankless-beats">
                {BEATS.map((b, i) => (
                  <div className={`tk-beat${i === beat ? " on" : ""}`} key={b.t}>
                    <span className="tk-n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{b.t}</h3>
                      <p>{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tk-progress" aria-hidden="true">
                {BEATS.map((_, i) => (
                  <span key={i} className={i <= beat ? "on" : ""} />
                ))}
              </div>
              <div className="hero-ctas" style={{ marginTop: 26 }}>
                <a className="btn btn-plum" href="/contact">
                  Ask about a tankless upgrade
                </a>
                <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="tankless-stage">
              {mounted ? (
                <Stage progressRef={progressRef} reduced={reduced} />
              ) : (
                <div className="tankless-fallback" />
              )}
              <span className="tk-cap">Drag to orbit · scroll to take it apart</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
