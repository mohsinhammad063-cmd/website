import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';

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
import FreeResources from './pages/FreeResources';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ArticleDetail from './pages/ArticleDetail';

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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;