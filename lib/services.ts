/* Service-page content data. PLACEHOLDER copy — refined with client input
   before production launch. Each entry renders via app/services/[slug].

   "temp" is the design-system accent, repurposed for plumbing:
     cool = clean/supply water (blue) · warm = drain/hot/copper (amber) ·
     both = the brand (plum). */

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
    slug: "drain-cleaning",
    temp: "cool",
    tag: "DRAINS · CLEANING & HYDRO-JETTING",
    title: "Drain",
    titleAccent: "cleaning.",
    intro:
      "From a slow bathroom sink to a backed-up main line, we clear it — and we clear it right. Cabling for the quick fixes, high-pressure hydro-jetting when the pipe needs to be scoured back to bare wall. No mystery, no upsell.",
    includesTitle: "What every drain call includes",
    includes: [
      "Honest diagnosis — we find the actual blockage, not a guess",
      "Cabling/snaking for routine clogs",
      "Hydro-jetting that scours grease, scale, and roots from the pipe wall",
      "Optional camera inspection to confirm the line is clear",
      "Flat-rate price approved before we start — no hourly meter",
      "24/7 dispatch for backups that can't wait",
    ],
    signsTitle: "Call us when you notice",
    signs: [
      "More than one drain is slow or backing up at the same time",
      "Gurgling toilets or drains when water runs elsewhere",
      "Sewage smell coming up through a floor drain or shower",
      "Water backing up where it shouldn't — tub, shower, or laundry",
      "A drain you've snaked yourself that keeps clogging back up",
    ],
  },
  {
    slug: "sewer-services",
    temp: "warm",
    tag: "SEWER · CAMERA & TRENCHLESS REPAIR",
    title: "Sewer line",
    titleAccent: "repair.",
    intro:
      "We put a camera down the line first, so you see the problem instead of taking our word for it — root intrusion, a bellied pipe, a crack, a collapse. Then we fix it, including trenchless repairs that skip tearing up your yard or driveway.",
    includesTitle: "How we handle a sewer line",
    includes: [
      "Video camera inspection — you see exactly what we see",
      "Locating, so we know precisely where to dig if we have to",
      "Trenchless options (pipe lining / bursting) where they fit — minimal digging",
      "Spot repairs, section replacement, or full line replacement",
      "Root removal and hydro-jetting to restore full flow",
      "Permits and code compliance handled for you",
    ],
    signsTitle: "Signs the sewer line is the problem",
    signs: [
      "Multiple fixtures backing up at once — the main line, not a single drain",
      "Sewage backing up into the lowest drain in the house",
      "Soggy spots, lush patches, or sinkholes in the yard along the line",
      "Recurring clogs that come right back after every cleaning",
      "An older home with clay or cast-iron pipe and tree roots nearby",
    ],
  },
  {
    slug: "water-heaters",
    temp: "cool",
    tag: "WATER HEATERS · TANK & TANKLESS",
    title: "Water",
    titleAccent: "heaters.",
    intro:
      "No hot water gets old fast. We repair every brand, swap out failing tanks the same day in most cases, and install tankless systems sized to keep the whole house in hot water at once. Straight answer on repair vs. replace — the math, not a pitch.",
    includesTitle: "What we install and service",
    includes: [
      "Tank water heater repair and same-day replacement (most jobs)",
      "Tankless installation sized to your home's real demand",
      "Gas, electric, and hybrid heat-pump units",
      "Code-compliant venting, gas, and water connections",
      "Expansion tanks, pans, and shutoffs done right",
      "Flush and maintenance to protect the unit you have",
    ],
    signsTitle: "Signs it's time to replace, not repair",
    signs: [
      "Rusty or discolored hot water at the tap",
      "Popping, rumbling, or banging from the tank (sediment buildup)",
      "Water pooling around the base of the heater",
      "It's 10+ years old and the hot water runs out faster than it used to",
      "Repairs are stacking up on a unit past its warranty",
    ],
  },
  {
    slug: "leak-detection",
    temp: "warm",
    tag: "LEAKS · DETECTION & SLAB LEAKS",
    title: "Leak",
    titleAccent: "detection.",
    intro:
      "A hidden leak can run for months before you see it — and in Vegas, slab leaks under the foundation are common. We locate leaks electronically, pinpoint the spot, and repair it with the least demolition possible. No jackhammering the whole floor on a hunch.",
    includesTitle: "How we find and fix a hidden leak",
    includes: [
      "Electronic leak location — acoustic and pressure testing, not guesswork",
      "Slab-leak detection under the foundation",
      "Pinpoint access so we open the smallest area possible",
      "Repair, reroute, or repipe the failed section",
      "Coordination with your insurance documentation when it applies",
      "Verification the leak is actually gone before we close up",
    ],
    signsTitle: "Signs you have a hidden leak",
    signs: [
      "A water bill that jumped with no change in usage",
      "The sound of running water when everything is off",
      "A warm spot on the floor (a hot-water slab leak)",
      "Cracks in flooring or drywall, or a musty smell",
      "The water meter creeping up while nothing is in use",
    ],
  },
  {
    slug: "repiping",
    temp: "both",
    tag: "REPIPING · PIPE REPAIR",
    title: "Repiping",
    titleAccent: "& repair.",
    intro:
      "When old galvanized pipe rusts shut or copper starts springing pinhole leaks, patching one spot just moves the next failure down the line. We repipe homes in PEX or copper — permitted, clean, and finished — and handle spot repairs when that's all it needs.",
    includesTitle: "What a repipe with us looks like",
    includes: [
      "Whole-home repipe in PEX or copper, sized for real flow",
      "Spot and section pipe repair when a full repipe isn't needed",
      "Clean access and drywall patch coordination — we respect the house",
      "Permits, inspection, and code compliance handled",
      "Pressure testing and verification before the walls close",
      "Up-front flat-rate price — you approve it before we start",
    ],
    signsTitle: "Signs your pipes are failing",
    signs: [
      "Rusty, brown, or metallic-tasting water from the tap",
      "Pressure that's dropped off across the whole house",
      "Repeated pinhole leaks in copper lines",
      "An older home still on original galvanized steel pipe",
      "Pipes that knock, rattle, or leak at multiple joints",
    ],
  },
  {
    slug: "water-treatment",
    temp: "both",
    tag: "WATER QUALITY · SOFTENERS & FILTRATION",
    title: "Water",
    titleAccent: "treatment.",
    intro:
      "Las Vegas has some of the hardest water in the country — it scales your fixtures, shortens the life of every appliance, and leaves your skin and hair feeling it. Softeners, whole-home filtration, and reverse osmosis fix the water before it ever reaches the tap.",
    includesTitle: "What we install and service",
    includes: [
      "Whole-home water softeners sized to your hardness and usage",
      "Carbon and sediment filtration for taste, odor, and chlorine",
      "Reverse-osmosis drinking water at the kitchen and fridge",
      "Salt-free conditioners where a softener isn't the right fit",
      "Service and salt/filter maintenance on existing systems",
      "Honest water testing — we measure before we recommend",
    ],
    signsTitle: "Signs Vegas water is winning",
    signs: [
      "White, crusty scale on faucets, shower glass, and fixtures",
      "Spotty dishes and stiff, dingy laundry",
      "Soap and shampoo that never seem to lather or rinse clean",
      "Dry skin and hair after every shower",
      "Water heaters and appliances failing earlier than they should",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
