/* Service-page content data. PLACEHOLDER copy — refined with client input
   before production launch. Each entry renders via app/services/[slug]. */

export type Service = {
  slug: string;
  temp: "cool" | "warm" | "both";
  tag: string;
  title: string;
  titleAccent: string;
  intro: string;
  includesTitle: string;
  includes: string[];
  signsTitle: string;
  signs: string[];
};

export const services: Service[] = [
  {
    slug: "ac-installation",
    temp: "cool",
    tag: "AIR CONDITIONING · INSTALLATION",
    title: "AC",
    titleAccent: "installation.",
    intro:
      "A new system is only as good as its install. We size to the actual house — not the brochure — and build the complete system: equipment, ductwork, electrical, permits, startup, and balance.",
    includesTitle: "Every install includes",
    includes: [
      "Load calculation sized to your home — never guesswork",
      "Equipment options at good / better / best price points",
      "Ductwork inspection and sealing where it leaks",
      "Permits, electrical, and code compliance handled",
      "Full commissioning — startup, charge, airflow balance",
      "Walkthrough of your new thermostat and maintenance plan",
    ],
    signsTitle: "Signs it's time to replace, not repair",
    signs: [
      "Your system is 12+ years old and repairs are getting closer together",
      "It still runs on phased-out refrigerant — repairs cost more every year",
      "Power bills climb every summer while comfort drops",
      "Some rooms never cool no matter where you set it",
      "The repair quote is more than a third of replacement cost",
    ],
  },
  {
    slug: "ac-repair",
    temp: "cool",
    tag: "AIR CONDITIONING · REPAIR",
    title: "AC",
    titleAccent: "repair.",
    intro:
      "Dead AC in a Vegas summer isn't an inconvenience — it's an emergency. We diagnose honestly, fix every brand, and tell you straight when a repair makes sense and when it's throwing money at a dying system.",
    includesTitle: "What you get on every call",
    includes: [
      "24/7 emergency dispatch — a human answers, day or night",
      "Every brand and age of equipment serviced",
      "Straight diagnosis with a written quote before work starts",
      "Repair-vs-replace honesty — the math, not a sales pitch",
      "Stocked trucks — most repairs done on the first visit",
    ],
    signsTitle: "Call us when you notice",
    signs: [
      "Warm air from the vents — or weak airflow that barely registers",
      "Grinding, squealing, or banging from the unit",
      "The system short-cycles — starts, stops, starts again",
      "Water or refrigerant pooling around the unit",
      "The breaker trips every time the AC kicks on",
    ],
  },
  {
    slug: "heating-installation",
    temp: "warm",
    tag: "HEATING · INSTALLATION",
    title: "Heating",
    titleAccent: "installation.",
    intro:
      "Desert nights drop fast. We install furnaces and heat pumps sized for how Vegas actually heats — complete builds for new construction and clean swap-outs for systems past their prime.",
    includesTitle: "Every install includes",
    includes: [
      "Furnace and heat-pump options sized to the home",
      "Gas, electrical, and venting handled to code",
      "Ductwork evaluation as part of the job — not an upsell",
      "Permits and inspections managed for you",
      "Full commissioning and safety verification at startup",
    ],
    signsTitle: "Signs your heat is on its last winter",
    signs: [
      "Your furnace is 15+ years old and limping through seasons",
      "Heating bills climb while rooms stay cold",
      "Yellow burner flame instead of blue — call right away",
      "It cycles constantly without ever feeling warm",
      "Repairs are showing up every single winter",
    ],
  },
  {
    slug: "heating-repair",
    temp: "warm",
    tag: "HEATING · REPAIR",
    title: "Heating",
    titleAccent: "repair.",
    intro:
      "No heat on a 35° desert night gets old fast. We service every brand of furnace and heat pump, around the clock, with honest answers about what's worth fixing.",
    includesTitle: "What you get on every call",
    includes: [
      "24/7 emergency heating dispatch",
      "All brands — gas furnaces, heat pumps, package units",
      "Safety-first diagnosis: heat exchangers, venting, gas connections",
      "Written quotes before any work begins",
      "Repair-vs-replace math laid out plainly",
    ],
    signsTitle: "Call us when you notice",
    signs: [
      "Cold air — or no air — when the heat is on",
      "A burning or gas smell when the system starts",
      "Constant cycling without reaching temperature",
      "Sudden spikes in your winter power or gas bill",
      "The carbon-monoxide detector has ever chirped — call immediately",
    ],
  },
  {
    slug: "indoor-air-quality",
    temp: "both",
    tag: "INDOOR AIR QUALITY",
    title: "Indoor air",
    titleAccent: "quality.",
    intro:
      "Vegas air is dust, pollen, and desert grit — and your house breathes all of it. Filtration, purification, and duct sealing turn the air you can't see into air you can feel.",
    includesTitle: "What we install and service",
    includes: [
      "High-MERV media filtration sized to your system",
      "Whole-home air purifiers and UV treatment",
      "Duct sealing — stop pulling attic dust into your living room",
      "Humidity control for desert-dry homes",
      "Fresh-air ventilation strategies that don't fight your AC",
    ],
    signsTitle: "Signs your air needs help",
    signs: [
      "Dust returns the day after you clean",
      "Allergies act up indoors more than outside",
      "Rooms smell stale no matter what you do",
      "Everyone sleeps better anywhere but home",
      "You can see dust trails at the vents",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
