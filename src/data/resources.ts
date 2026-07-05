export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  image?: string;
  status: 'available' | 'coming_soon';
  safetyNote: string;
}

export const resources: Resource[] = [
  {
    id: "safe-gaming-rules-poster",
    slug: "safe-gaming-rules-poster",
    title: "Safe Gaming Rules Poster",
    type: "Printable Poster",
    description: "A printable poster with basic rules for safe online gaming to put near your computer or console.",
    status: "coming_soon",
    safetyNote: "Kids should always ask permission before downloading anything online."
  },
  {
    id: "beginner-gaming-practice-sheet",
    slug: "beginner-gaming-practice-sheet",
    title: "Beginner Gaming Practice Sheet",
    type: "Printable PDF",
    description: "A sheet to track your practice time and goals for different games.",
    status: "coming_soon",
    safetyNote: "Kids should always ask permission before downloading anything online."
  },
  {
    id: "parent-gaming-agreement",
    slug: "parent-gaming-agreement",
    title: "Parent Gaming Agreement",
    type: "Printable PDF",
    description: "A contract to set healthy gaming boundaries between parents and kids.",
    status: "coming_soon",
    safetyNote: "Kids should always ask permission before downloading anything online."
  },
  {
    id: "weekly-gaming-break-tracker",
    slug: "weekly-gaming-break-tracker",
    title: "Weekly Gaming Break Tracker",
    type: "Printable Tracker",
    description: "Keep track of your screen breaks, outdoor time, and reading time.",
    status: "coming_soon",
    safetyNote: "Kids should always ask permission before downloading anything online."
  },
  {
    id: "game-review-sheet",
    slug: "game-review-sheet",
    title: "Game Review Sheet for Kids",
    type: "Printable Template",
    description: "A fun template for kids to write reviews of the games they play.",
    status: "coming_soon",
    safetyNote: "Kids should always ask permission before downloading anything online."
  }
];
