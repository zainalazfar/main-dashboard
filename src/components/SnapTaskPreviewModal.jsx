import React, { useEffect } from 'react';
import { X, Monitor, Apple, Globe, Download, ArrowRight, ExternalLink } from 'lucide-react';

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
          <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>SnapTask</h3>
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
                alt="SnapTask Logo"
                className="snaptask-box-img"
                loading="eager"
                decoding="async"
                fetchpriority="high"
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

              {/* Line 3: Open in Chrome */}
              <button
                className="download-line-btn"
                onClick={() => window.open('/snaptask', '_blank')}
              >
                <div className="download-line-left">
                  <div className="download-line-icon">
                    <Globe size={18} />
                  </div>
                  <span className="download-line-text">Open in Chrome</span>
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
