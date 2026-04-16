import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingAudioControl from './pages/FloatingAudioControl';
import FloatingEPKControl from './pages/FloatingEPKControl';
import SubscriptionPopup from './components/ui/SubscriptionPopup';

// Home loads eagerly (landing page), everything else loads on demand
import Home from './pages/Home';

// Lazy-loaded pages — only downloaded when the user navigates to them
const EdgarExperience = React.lazy(() => import('./pages/EdgarExperience'));
const Discography = React.lazy(() => import('./pages/Discography'));
const News = React.lazy(() => import('./pages/News'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AdminGallery = import.meta.env.DEV
  ? React.lazy(() => import('./pages/AdminGallery'))
  : null;

// Minimal loading fallback that matches the site's dark theme
const PageLoader = () => (
  <div className="min-h-screen bg-black" />
);

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Global Texture Overlay */}
        <div className="fixed inset-0 w-full h-full z-50 texture-overlay pointer-events-none mix-blend-overlay"></div>

        {/* Navigation */}
        <Navbar />

        {/* Routes — wrapped in Suspense for lazy-loaded pages */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-edgar-experience" element={<EdgarExperience />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {import.meta.env.DEV && AdminGallery && (
              <Route path="/moments-admin" element={<AdminGallery />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Footer */}
        <Footer />

        {/* Floating Controls */}
        <FloatingAudioControl />
        <FloatingEPKControl />

        {/* Subscription Popup — appears after 90 s */}
        <SubscriptionPopup buttonText="Subscribe" />
      </div>
    </Router>
  );
}

export default App;
