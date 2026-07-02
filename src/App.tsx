import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import GameTips from './pages/GameTips';
import TricksGuides from './pages/TricksGuides';
import BestGames from './pages/BestGames';
import BeginnerGuides from './pages/BeginnerGuides';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ArticleDetail from './pages/ArticleDetail';
import MinecraftTips from './pages/MinecraftTips';
import RobloxTips from './pages/RobloxTips';
import FortniteTips from './pages/FortniteTips';
import RacingGameTips from './pages/RacingGameTips';
import BestGamesForKids from './pages/BestGamesForKids';
import SafeGaming from './pages/SafeGaming';
import Shop from './pages/Shop';
import Products from './pages/Products';
import FreeResources from './pages/FreeResources';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-primary/30 selection:text-brand-primary">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-tips" element={<GameTips />} />
            <Route path="/tricks-guides" element={<TricksGuides />} />
            <Route path="/best-games" element={<BestGames />} />
            <Route path="/beginner-guides" element={<BeginnerGuides />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tips/:slug" element={<ArticleDetail />} />
            <Route path="/guides/:slug" element={<ArticleDetail />} />
            <Route path="/minecraft-tips" element={<MinecraftTips />} />
            <Route path="/roblox-tips" element={<RobloxTips />} />
            <Route path="/fortnite-tips" element={<FortniteTips />} />
            <Route path="/racing-game-tips" element={<RacingGameTips />} />
            <Route path="/best-games-for-kids" element={<BestGamesForKids />} />
            <Route path="/safe-gaming" element={<SafeGaming />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<Products />} />
            <Route path="/free-resources" element={<FreeResources />} />
            <Route path="/free-resources/:slug" element={<FreeResources />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;