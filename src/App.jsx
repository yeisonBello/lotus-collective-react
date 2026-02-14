import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import EdgarExperience from './pages/EdgarExperience';
import Discography from './pages/Discography';
import News from './pages/News';
import Gallery from './pages/Gallery';
import FloatingAudioControl from './pages/FloatingAudioControl';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Global Texture Overlay */}
        <div className="fixed inset-0 w-full h-full z-50 texture-overlay pointer-events-none mix-blend-overlay"></div>

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-edgar-experience" element={<EdgarExperience />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating Audio Control */}
        <FloatingAudioControl />
      </div>
    </Router>
  );
}

export default App;
