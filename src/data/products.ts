export interface Product {
  id: string;
  slug: string;
  title: string;
  type: string;
  price: number;
  description: string;
  image: string;
  includes: string[];
  audience: string;
  status: 'available' | 'coming-soon';
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
    image: "/images/controller-badge.svg",
    includes: ["20 Beginner Tips", "Printable Challenge Sheet", "Safe Gaming Rules Summary"],
    audience: "Kids Age 8-12",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "safe-gaming-checklist",
    slug: "safe-gaming-checklist",
    title: "Safe Gaming Checklist for Kids",
    type: "Printable PDF",
    price: 3,
    description: "A colorful checklist that helps kids remember online safety, break time, password safety, and parent permission rules.",
    image: "/images/safe-gaming-shield.svg",
    includes: ["1-Page Colorful Checklist", "Black and White Printer-Friendly Version"],
    audience: "Kids Age 8-15 and Parents",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "minecraft-build-ideas-pack",
    slug: "minecraft-build-ideas-pack",
    title: "Minecraft Beginner Build Ideas Pack",
    type: "PDF Activity Pack",
    price: 7,
    description: "A creative building ideas pack with simple house, farm, garden, and base ideas for beginner players.",
    image: "/images/minecraft-style-blocks.svg",
    includes: ["15 Build Tutorials", "Material Checklists", "Creative Inspiration Pages"],
    audience: "Minecraft Players Age 8+",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "roblox-obby-practice-tracker",
    slug: "roblox-obby-practice-tracker",
    title: "Roblox Obby Practice Tracker",
    type: "Printable Tracker",
    price: 4,
    description: "A fun progress tracker for kids who want to improve patience, jumping, timing, and practice habits.",
    image: "/images/roblox-style-obstacle.svg",
    includes: ["Daily Practice Log", "Goal Setting Sheet", "Reward Badges Sheet"],
    audience: "Roblox Players Age 8+",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "gaming-break-planner",
    slug: "gaming-break-planner",
    title: "Gaming Break Planner",
    type: "Printable Planner",
    price: 3,
    description: "A simple planner to balance gaming, study, sleep, outdoor time, and family time.",
    image: "/images/beginner-map.svg",
    includes: ["Weekly Schedule", "Screen Time Limits Agreement", "Alternative Activities List"],
    audience: "Parents and Kids",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  },
  {
    id: "pro-tips-bundle",
    slug: "pro-tips-bundle",
    title: "Master Hammad Pro Tips Bundle",
    type: "Bundle",
    price: 15,
    description: "A bundle with beginner gaming tips, safe gaming checklist, racing tips, practice tracker, and break planner.",
    image: "/images/trophy-tips.svg",
    includes: ["Gaming Tips Starter Pack", "Safe Gaming Checklist", "Gaming Break Planner", "Roblox Practice Tracker", "Exclusive Bonus Poster"],
    audience: "All Ages",
    status: "coming-soon",
    safetyNote: "Purchases should be made by a parent or guardian."
  }
];
