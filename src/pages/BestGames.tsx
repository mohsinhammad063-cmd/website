import GameCard from '../components/GameCard';

import { Shield } from 'lucide-react';

const categories = [
  {
    title: "Best Games for Beginners",
    description: "Easy to learn, forgiving, and fun from the very first minute.",
    games: [
      { title: "Minecraft (Peaceful Mode)", category: "Exploration", description: "Learn movement and crafting without worrying about enemies." },
      { title: "Mario Kart 8 Deluxe", category: "Racing", description: "Use smart steering features to stay on track easily." },
      { title: "Animal Crossing", category: "Life Sim", description: "A relaxing game with no pressure and plenty of time to learn." }
    ]
  },
  {
    title: "Best Creative Games",
    description: "Unleash your imagination and build amazing things.",
    games: [
      { title: "Minecraft (Creative Mode)", category: "Sandbox", description: "Unlimited resources to build whatever you can imagine." },
      { title: "Roblox Studio", category: "Game Creation", description: "Design your own levels and game modes for others to play." },
      { title: "Super Mario Maker 2", category: "Platformer", description: "Create the most challenging or fun Mario courses." }
    ]
  },
  {
    title: "Best Racing Games",
    description: "Speed, drifts, and fast-paced action without the violence.",
    games: [
      { title: "Mario Kart 8 Deluxe", category: "Racing", description: "The ultimate family racing game with endless fun." },
      { title: "Rocket League", category: "Sports/Racing", description: "Play soccer with rocket-powered cars." },
      { title: "Trackmania", category: "Time Trial", description: "Race for the best time on crazy custom tracks." }
    ]
  },
  {
    title: "Best Puzzle Games",
    description: "Exercise your brain with these smart challenges.",
    games: [
      { title: "Tetris Effect", category: "Puzzle", description: "A beautiful, relaxing take on the classic puzzle game." },
      { title: "Portal 2 (Co-op)", category: "Logic", description: "Use portals to solve mind-bending physics puzzles." },
      { title: "Captain Toad: Treasure Tracker", category: "Adventure", description: "Navigate small 3D levels to find stars." }
    ]
  },
  {
    title: "Best Multiplayer Games",
    description: "Great games to play online with friends safely.",
    games: [
      { title: "Splatoon 3", category: "Action", description: "Cover the map in ink in this colorful, kid-friendly team game." },
      { title: "Fall Guys", category: "Party", description: "Navigate crazy obstacle courses against 59 other players." },
      { title: "Among Us", category: "Social Deduction", description: "Find the impostor in a safe private lobby with friends." }
    ]
  },
  {
    title: "Best Games to Play with Family",
    description: "Grab some controllers and play together on the couch.",
    games: [
      { title: "Overcooked! All You Can Eat", category: "Co-op", description: "Work together to cook meals in chaotic kitchens." },
      { title: "Mario Party Superstars", category: "Board Game", description: "Roll dice and compete in fun mini-games." },
      { title: "Luigi's Mansion 3", category: "Adventure", description: "One player controls Luigi, the other controls Gooigi in this spooky adventure." }
    ]
  }
];

const BestGames = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4">
            Best <span className="text-brand-cta">Games</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Our top recommendations organized by category. Whether you want to build, race, or play with family, we have a list for you.
          </p>
        </div>

        <div className="glass-card p-6 border-brand-secondary/30 bg-brand-secondary/5 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Shield className="w-10 h-10 text-brand-secondary shrink-0" />
          <div>
            <h3 className="font-bold text-brand-text text-lg mb-2 text-center sm:text-left">Child Safety Note</h3>
            <ul className="text-brand-muted list-disc list-inside space-y-1 text-sm md:text-base">
              <li>Always check age ratings before playing a new game.</li>
              <li>Ask parents before downloading or purchasing anything.</li>
              <li>Avoid unknown online chat rooms or voice chats with strangers.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-20">
          {categories.map((category, idx) => (
            <div key={idx}>
              <div className="mb-8 border-b border-white/10 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-2">{category.title}</h2>
                <p className="text-brand-muted">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.games.map((game, gameIdx) => (
                  <GameCard key={gameIdx} {...game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestGames;