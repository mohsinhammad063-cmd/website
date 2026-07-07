export interface Product {
  id: string;
  slug: string;
  title: string;
  type: string;
  price: number;
  description: string;
  image?: string;
  includes: string[];
  audience: string;
  status: 'available' | 'coming_soon';
  safetyNote: string;
}

export const products: Product[] = [
  {
    id: "gaming-tips-starter-pack",
    slug: "gaming-tips-starter-pack",
    title: "Master Hammad Gaming Tips Starter Pack",
    type: "PDF Guide",
    price: 5,
    description: "A beginner-friendly PDF with simple gaming tips, safety rules, and practice challenges for young players.",
    includes: ["Beginner gaming tips", "Safety rules", "Practice challenges"],
    audience: "Kids 8-12 and Parents",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "safe-gaming-checklist",
    slug: "safe-gaming-checklist",
    title: "Safe Gaming Checklist for Kids",
    type: "Printable PDF",
    price: 3,
    description: "A colorful checklist that helps kids remember online safety, break time, password safety, and parent permission rules.",
    includes: ["Online safety rules", "Break time reminders", "Password safety tips"],
    audience: "Kids 8-15 and Parents",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "minecraft-build-ideas-pack",
    slug: "minecraft-build-ideas-pack",
    title: "Minecraft Beginner Build Ideas Pack",
    type: "PDF Activity Pack",
    price: 7,
    description: "A creative building ideas pack with simple house, farm, garden, and base ideas for beginner players.",
    includes: ["House ideas", "Farm layouts", "Base designs"],
    audience: "Kids 8-15",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "roblox-obby-practice-tracker",
    slug: "roblox-obby-practice-tracker",
    title: "Roblox Obby Practice Tracker",
    type: "Printable Tracker",
    price: 4,
    description: "A fun progress tracker for kids who want to improve patience, jumping, timing, and practice habits.",
    includes: ["Progress tracker", "Practice habits tips", "Patience exercises"],
    audience: "Kids 8-15",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "gaming-break-planner",
    slug: "gaming-break-planner",
    title: "Gaming Break Planner",
    type: "Printable Planner",
    price: 3,
    description: "A simple planner to balance gaming, study, sleep, outdoor time, and family time.",
    includes: ["Daily schedule template", "Break reminders", "Balance tips"],
    audience: "Kids 8-15 and Parents",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "pro-tips-bundle",
    slug: "pro-tips-bundle",
    title: "Master Hammad Pro Tips Bundle",
    type: "Bundle",
    price: 15,
    description: "A bundle with beginner gaming tips, safe gaming checklist, racing tips, practice tracker, and break planner.",
    includes: ["All PDF guides", "All printable trackers", "Bonus tips sheet"],
    audience: "Kids 8-15 and Parents",
    status: "coming_soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  }
];
