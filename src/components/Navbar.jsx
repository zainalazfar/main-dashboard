import React from 'react';
import { Send } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenSnapTask }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCreations = (e) => {
    e.preventDefault();
    document.getElementById('creations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand Anchor - True Top Left */}
        <div className="brand-group" onClick={scrollToTop}>
          <img
            src="/za-logo.png"
            alt="Zainal Azfar Studio"
            className="brand-logo-img"
          />
        </div>

        {/* Action Controls & Navigation Links */}
        <div className="nav-actions">
          <nav className="nav-links">
            <a href="#home" className="nav-link" onClick={scrollToTop}>
              Home
            </a>
            <span className="nav-dot">•</span>
            <a href="#creations" className="nav-link" onClick={scrollToCreations}>
              Creations
            </a>
            <span className="nav-dot">•</span>
            <a href="#about" className="nav-link" onClick={scrollToAbout}>
              About Us
            </a>
          </nav>

          <button
            className="primary-btn"
            onClick={onOpenContact}
          >
            <Send size={14} />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}
