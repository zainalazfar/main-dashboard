import React, { useEffect } from 'react';
import { X, Globe, ExternalLink, Github, Box, Cpu } from 'lucide-react';

export default function CadCatalogPreviewModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog modal-download-layout" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>CAD Catalog</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Left logo box, Right launch lines */}
        <div className="modal-content">
          <div className="snaptask-popup-grid">
            {/* Left: Logo in a Box */}
            <div className="snaptask-logo-box" style={{ background: '#08120e', borderColor: '#1b3226' }}>
              <img
                src="/cad-catalog-logo.svg"
                alt="CAD Catalog Logo"
                className="snaptask-box-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                style={{ width: '92px', height: '92px' }}
              />
            </div>

            {/* Right: Action Lines */}
            <div className="snaptask-download-lines">
              {/* Line 1: Open Web App */}
              <button
                className="download-line-btn"
                onClick={() => window.open('/cad-catalog', '_blank')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon" style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.12)' }}>
                    <Globe size={18} />
                  </div>
                  <span className="download-line-text">Open Web Catalog</span>
                </div>
                <div className="download-line-action">
                  <ExternalLink size={16} />
                </div>
              </button>

              {/* Line 2: View GitHub Repository */}
              <button
                className="download-line-btn"
                onClick={() => window.open('https://github.com/zainalazfar/cad-catalog', '_blank')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon" style={{ color: '#a78bfa', background: 'rgba(167, 139, 250, 0.12)' }}>
                    <Github size={18} />
                  </div>
                  <span className="download-line-text">View Source on GitHub</span>
                </div>
                <div className="download-line-action">
                  <ExternalLink size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
