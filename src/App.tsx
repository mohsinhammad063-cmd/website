import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

import Home from './pages/Home';
import GameTips from './pages/GameTips';
import TricksGuides from './pages/TricksGuides';
import BestGames from './pages/BestGames';
import BeginnerGuides from './pages/BeginnerGuides';
import SafeGaming from './pages/SafeGaming';
import MinecraftTips from './pages/MinecraftTips';
import RobloxTips from './pages/RobloxTips';
import FortniteTips from './pages/FortniteTips';
import RacingGameTips from './pages/RacingGameTips';
import BestGamesForKids from './pages/BestGamesForKids';
import ArticleDetail from './pages/ArticleDetail';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import ResourceDetail from './pages/ResourceDetail';
import FreeResources from './pages/FreeResources';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-primary/30 selection:text-brand-primary">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<><SEO /><Home /></>} />
            <Route path="/game-tips" element={<><SEO title="Game Tips | Tips & Tricks by Master Hammad" description="Read our latest beginner-friendly game tips and guides." url="https://hammad-s-guide.web.app/game-tips" /><GameTips /></>} />
            <Route path="/tricks-and-guides" element={<><SEO title="Tricks & Guides | Tips & Tricks by Master Hammad" description="Step-by-step guides to master advanced techniques and overcome the toughest challenges." url="https://hammad-s-guide.web.app/tricks-and-guides" /><TricksGuides /></>} />
            <Route path="/best-games" element={<><SEO title="Best Games | Tips & Tricks by Master Hammad" description="Our top game recommendations organized by category for kids and teens." url="https://hammad-s-guide.web.app/best-games" /><BestGames /></>} />
            <Route path="/beginner-guides" element={<><SEO title="Beginner Guides | Tips & Tricks by Master Hammad" description="Follow this friendly learning path to build good habits and improve quickly." url="https://hammad-s-guide.web.app/beginner-guides" /><BeginnerGuides /></>} />
            <Route path="/safe-gaming" element={<><SEO title="Safe Gaming Tips | Tips & Tricks by Master Hammad" description="Important rules for chatting, making friends, and protecting your personal information online." url="https://hammad-s-guide.web.app/safe-gaming" /><SafeGaming /></>} />
            <Route path="/minecraft-tips" element={<><SEO title="Minecraft Tips | Tips & Tricks by Master Hammad" description="Master the blocky world with these simple survival and building tricks." url="https://hammad-s-guide.web.app/minecraft-tips" /><MinecraftTips /></>} />
            <Route path="/roblox-tips" element={<><SEO title="Roblox Tips | Tips & Tricks by Master Hammad" description="Stay safe and have more fun across thousands of user-created games." url="https://hammad-s-guide.web.app/roblox-tips" /><RobloxTips /></>} />
            <Route path="/fortnite-tips" element={<><SEO title="Fortnite Tips | Tips & Tricks by Master Hammad" description="Get better at aiming, surviving, and playing with your team." url="https://hammad-s-guide.web.app/fortnite-tips" /><FortniteTips /></>} />
            <Route path="/racing-game-tips" element={<><SEO title="Racing Game Tips | Tips & Tricks by Master Hammad" description="Learn how to drift, take corners, and cross the finish line first." url="https://hammad-s-guide.web.app/racing-game-tips" /><RacingGameTips /></>} />
            <Route path="/best-games-for-kids" element={<><SEO title="Best Games for Kids | Tips & Tricks by Master Hammad" description="A curated list of fun, safe, and engaging games that are perfect for young players." url="https://hammad-s-guide.web.app/best-games-for-kids" /><BestGamesForKids /></>} />

            <Route path="/tips/:slug" element={<><SEO title="Article | Tips & Tricks by Master Hammad" description="Read our full gaming tips and guides." url="https://hammad-s-guide.web.app/" /><ArticleDetail /></>} />
            <Route path="/guides/:slug" element={<><SEO title="Guide | Tips & Tricks by Master Hammad" description="Read our full gaming guides." url="https://hammad-s-guide.web.app/" /><ArticleDetail /></>} />

            <Route path="/shop" element={<><SEO title="Official Shop | Tips & Tricks by Master Hammad" description="Checklists and resources for safe gaming." url="https://hammad-s-guide.web.app/shop" /><Shop /></>} />
            <Route path="/products/:slug" element={<><SEO title="Product | Tips & Tricks by Master Hammad" description="Official gaming tips products." url="https://hammad-s-guide.web.app/products" /><ProductDetail /></>} />
            <Route path="/free-resources" element={<><SEO title="Free Resources | Tips & Tricks by Master Hammad" description="Downloadable resources for parents and kids." url="https://hammad-s-guide.web.app/free-resources" /><FreeResources /></>} />
            <Route path="/free-resources/:slug" element={<><SEO title="Free Resource | Tips & Tricks by Master Hammad" description="Downloadable resources for parents and kids." url="https://hammad-s-guide.web.app/free-resources" /><ResourceDetail /></>} />
            <Route path="/coming-soon" element={<><SEO title="Coming Soon | Tips & Tricks by Master Hammad" description="New features coming soon." url="https://hammad-s-guide.web.app/coming-soon" /><ComingSoon /></>} />

            <Route path="/about" element={<><SEO title="About Master Hammad | Tips & Tricks" description="Learn more about Master Hammad and the mission of this gaming website for kids." url="https://hammad-s-guide.web.app/about" /><About /></>} />
            <Route path="/contact" element={<><SEO title="Contact | Tips & Tricks by Master Hammad" description="Get in touch with us for questions, suggestions, or collaboration." url="https://hammad-s-guide.web.app/contact" /><Contact /></>} />
            <Route path="/privacy-policy" element={<><SEO title="Privacy Policy | Tips & Tricks by Master Hammad" description="Read our child-safe privacy policy and learn how we protect young gamers." url="https://hammad-s-guide.web.app/privacy-policy" /><PrivacyPolicy /></>} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;