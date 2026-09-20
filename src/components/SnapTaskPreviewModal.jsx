import React, { useEffect } from 'react';
import { X, Monitor, Apple, Globe, Download, ArrowRight } from 'lucide-react';

export default function SnapTaskPreviewModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownload = (fileName, url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog modal-download-layout" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.25rem' }}>⚡</span>
            <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>SnapTask Free</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Left logo box, Right 3 download lines */}
        <div className="modal-content">
          <div className="snaptask-popup-grid">
            {/* Left: Logo in a Box */}
            <div className="snaptask-logo-box">
              <img
                src="/snaptask-logo.png"
                alt="SnapTask Free Logo"
                className="snaptask-box-img"
              />
            </div>

            {/* Right: 3 Download Lines */}
            <div className="snaptask-download-lines">
              {/* Line 1: Windows */}
              <button
                className="download-line-btn"
                onClick={() => handleDownload('SnapTask.exe', '/downloads/SnapTask.exe')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon">
                    <Monitor size={18} />
                  </div>
                  <span className="download-line-text">Download for Windows</span>
                </div>
                <div className="download-line-action">
                  <Download size={16} />
                </div>
              </button>

              {/* Line 2: macOS */}
              <button
                className="download-line-btn"
                onClick={() => handleDownload('SnapTask-macOS.zip', '/downloads/SnapTask-macOS.zip')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon">
                    <Apple size={18} />
                  </div>
                  <span className="download-line-text">Download for macOS</span>
                </div>
                <div className="download-line-action">
                  <Download size={16} />
                </div>
              </button>

              {/* Line 3: PWA */}
              <button
                className="download-line-btn"
                onClick={() => handleDownload('SnapTask-PWA.zip', '/downloads/SnapTask-PWA.zip')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon">
                    <Globe size={18} />
                  </div>
                  <span className="download-line-text">Open / Install PWA</span>
                </div>
                <div className="download-line-action">
                  <Download size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
