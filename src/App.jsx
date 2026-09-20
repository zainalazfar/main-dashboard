import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ShowcaseCard from './components/ShowcaseCard.jsx';
import DetailModal from './components/DetailModal.jsx';
import SnapTaskPreviewModal from './components/SnapTaskPreviewModal.jsx';
import ContactModal from './components/ContactModal.jsx';
import { ITEMS, CREATOR_INFO } from './data/items.js';
import { Layers } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Modals state
  const [activeDetailItem, setActiveDetailItem] = useState(null);
  const [isSnapTaskPreviewOpen, setIsSnapTaskPreviewOpen] = useState(false);
  const [contactModalConfig, setContactModalConfig] = useState({ isOpen: false, subject: '' });

  // Permanently lock dark theme
  useEffect(() => {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme_preference', 'dark');
  }, []);

  // Compute item counts by category
  const itemCounts = useMemo(() => {
    const counts = { all: ITEMS.length };
    ITEMS.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & search items
  const filteredItems = useMemo(() => {
    let result = ITEMS.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchDesc = item.shortDesc.toLowerCase().includes(query) || (item.longDesc && item.longDesc.toLowerCase().includes(query));
        const matchTags = item.tags.some(t => t.toLowerCase().includes(query));
        const matchCategory = item.category.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchTags && !matchCategory) {
          return false;
        }
      }
      return true;
    });

    // Sorting
    if (sortBy === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleCardClick = (item) => {
    if (item.id === 'snaptask-free') {
      setIsSnapTaskPreviewOpen(true);
    } else {
      setActiveDetailItem(item);
    }
  };

  const handleOpenContact = (subject = '') => {
    setContactModalConfig({ isOpen: true, subject });
  };

  return (
    <div className="app-container" id="home">
      {/* Top Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenSnapTask={() => setIsSnapTaskPreviewOpen(true)}
      />

      <main className="main-content">
        {/* Hero Section */}
        <HeroBanner />

        {/* Creations Section with Filter and Grid */}
        <section id="creations" className="creations-section">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            itemCounts={itemCounts}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {/* Showcase Grid */}
          {filteredItems.length > 0 ? (
            <div className="items-grid">
              {filteredItems.map(item => (
                <ShowcaseCard
                  key={item.id}
                  item={item}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Layers size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <h3>No matching creations found</h3>
              <p style={{ marginTop: '0.5rem' }}>Try adjusting your search terms or selecting a different category filter.</p>
              <button
                className="secondary-btn"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                style={{ marginTop: '1.25rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-card">
            <div className="about-header">
              <span className="about-label">About the Studio</span>
              <h2 className="about-title">Bridging digital engineering with physical craft.</h2>
            </div>
            <p className="about-bio">
              Zainal Azfar Studio is an independent multidisciplinary practice focused on building high-performance software utilities, sharing technical masterclasses, and handcrafting heirloom leather goods. Every creation—whether compiled into code or saddle-stitched by hand—is built with uncompromising attention to detail, utility, and timeless aesthetics.
            </p>
            <div className="about-pillars">
              <div className="about-pillar">
                <span className="about-pillar-icon">⚡</span>
                <h4>Software & Utilities</h4>
                <p>Fast, local-first tools like SnapTask designed for distraction-free focus.</p>
              </div>
              <div className="about-pillar">
                <span className="about-pillar-icon">🎓</span>
                <h4>Technical Courses</h4>
                <p>Pragmatic, project-based video masterclasses for modern developers.</p>
              </div>
              <div className="about-pillar">
                <span className="about-pillar-icon">🧵</span>
                <h4>Leather & 3D Design</h4>
                <p>Handcrafted vegetable-tanned leather goods and functional 3D prints.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-inner">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            © 2026 Zainal Azfar Studio • All rights reserved.
          </div>

          <div className="footer-links">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="footer-link"
            >
              Home
            </a>
            <span style={{ opacity: 0.3 }}>•</span>
            <a
              href="#creations"
              onClick={(e) => { e.preventDefault(); document.getElementById('creations')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="footer-link"
            >
              Creations
            </a>
            <span style={{ opacity: 0.3 }}>•</span>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="footer-link"
            >
              About Us
            </a>
            <span style={{ opacity: 0.3 }}>•</span>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsSnapTaskPreviewOpen(true); }}
              className="footer-link"
            >
              SnapTask Free
            </a>
            <span style={{ opacity: 0.3 }}>•</span>
            <button
              onClick={() => handleOpenContact()}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
              className="footer-link"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* SnapTask Dedicated Preview Modal */}
      {isSnapTaskPreviewOpen && (
        <SnapTaskPreviewModal
          onClose={() => setIsSnapTaskPreviewOpen(false)}
        />
      )}

      {/* Item Details Modal */}
      {activeDetailItem && (
        <DetailModal
          item={activeDetailItem}
          onClose={() => setActiveDetailItem(null)}
          onAction={(item) => {
            if (item.actionType === 'snaptask-preview') {
              setActiveDetailItem(null);
              setIsSnapTaskPreviewOpen(true);
            } else if (item.actionType === 'contact-modal') {
              setActiveDetailItem(null);
              handleOpenContact(`Inquiry: ${item.title}`);
            }
          }}
        />
      )}

      {/* Contact & Inquiries Modal */}
      {contactModalConfig.isOpen && (
        <ContactModal
          isOpen={contactModalConfig.isOpen}
          defaultSubject={contactModalConfig.subject}
          onClose={() => setContactModalConfig({ isOpen: false, subject: '' })}
        />
      )}
    </div>
  );
}
