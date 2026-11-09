import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AppGuidePage from './pages/AppGuidePage';
import LaunchPage from './pages/LaunchPage';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LocatePage from './pages/LocatePage';

const AppContent = () => {
  const location = useLocation();
  const isLaunchPage = location.pathname === '/launch';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLaunchPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/launch" element={<LaunchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/app-guide" element={<AppGuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/locate" element={<LocatePage />} />

        </Routes>
      </main>
      {!isLaunchPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;