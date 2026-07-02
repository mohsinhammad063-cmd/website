import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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