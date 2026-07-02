export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  image: string;
  status: 'available' | 'coming-soon';
  safetyNote: string;
}

export const resources: Resource[] = [
  {
    id: "safe-gaming-rules-poster",
    slug: "safe-gaming-rules-poster",
    title: "Safe Gaming Rules Poster",
    type: "PDF Poster",
    description: "A printable poster with simple rules for staying safe online. Perfect to hang near the gaming console or PC.",
    image: "/images/safe-gaming-shield.svg",
    status: "coming-soon",
    safetyNote: "Kids should ask a parent before downloading and printing."
  },
  {
    id: "beginner-gaming-practice-sheet",
    slug: "beginner-gaming-practice-sheet",
    title: "Beginner Gaming Practice Sheet",
    type: "PDF Worksheet",
    description: "A fun worksheet to track practice time for aiming, building, and puzzle solving.",
    image: "/images/aim-training.svg",
    status: "coming-soon",
    safetyNote: "Kids should ask a parent before downloading and printing."
  },
  {
    id: "parent-gaming-agreement",
    slug: "parent-gaming-agreement",
    title: "Parent Gaming Agreement",
    type: "PDF Contract",
    description: "A friendly contract for parents and kids to agree on screen time limits and safety rules.",
    image: "/images/family-games.svg",
    status: "coming-soon",
    safetyNote: "Designed for parents and kids to review together."
  },
  {
    id: "weekly-gaming-break-tracker",
    slug: "weekly-gaming-break-tracker",
    title: "Weekly Gaming Break Tracker",
    type: "PDF Tracker",
    description: "A tracker to make sure kids are taking breaks, drinking water, and resting their eyes during long gaming sessions.",
    image: "/images/beginner-map.svg",
    status: "coming-soon",
    safetyNote: "Kids should ask a parent before downloading and printing."
  },
  {
    id: "game-review-sheet",
    slug: "game-review-sheet",
    title: "Game Review Sheet for Kids",
    type: "PDF Worksheet",
    description: "A simple worksheet where kids can rate games and write down what they liked and didn't like.",
    image: "/images/controller-badge.svg",
    status: "coming-soon",
    safetyNote: "Kids should ask a parent before downloading and printing."
  }
];
