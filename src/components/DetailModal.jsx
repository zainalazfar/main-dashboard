import React, { useState, useEffect } from 'react';
import { X, Play, Download, Send, CheckCircle2, BookOpen, Layers, Clock, AlertCircle } from 'lucide-react';

export default function DetailModal({ item, onClose, onOpenContact }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    setWaitlistSuccess(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>{item.emoji}</span>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
              <div style={{ fontSize: '0.8rem', color: '#d8b472', fontWeight: 600 }}>
                {item.status} • {item.price}
              </div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
            {item.longDesc || item.shortDesc}
          </p>

          {/* Specifications Table */}
          {item.specs && item.specs.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={16} color="#d8b472" />
                <span>Technical Specifications & Materials</span>
              </h4>
              <div className="card-specs-list" style={{ padding: '0.9rem' }}>
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="card-spec-row" style={{ padding: '0.2rem 0' }}>
                    <span className="card-spec-key">{spec.key}:</span>
                    <span className="card-spec-val">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.65rem' }}>Features & Highlights</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {item.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="#10b981" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Course Curriculum Section */}
          {item.curriculum && (
            <div>
              <h4 style={{ fontSize: '0.95rem', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={16} color="#f59e0b" />
                <span>Course Modules & Curriculum</span>
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {item.curriculum.map((mod, idx) => (
                  <div key={idx} className="curriculum-module">
                    <div className="module-title">
                      <Clock size={15} />
                      <span>{mod.title}</span>
                    </div>
                    <ul className="lesson-list">
                      {mod.lessons.map((lesson, lIdx) => (
                        <li key={lIdx}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download 3D / Waitlist / Order Actions */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
            {item.category === '3d-stl' && (
              <div>
                {downloadSuccess ? (
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '0.85rem', borderRadius: 'var(--radius-md)', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} />
                    <span>Preparing your high-resolution .STL file download bundle!</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button className="primary-btn" onClick={handleDownload}>
                      <Download size={16} />
                      <span>Download STL Package ({item.price})</span>
                    </button>
                    <button className="secondary-btn" onClick={() => { onClose(); onOpenContact(); }}>
                      <span>Request Custom 3D Commission</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {item.category === 'courses' && (
              <div>
                {waitlistSuccess ? (
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '0.85rem', borderRadius: 'var(--radius-md)', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} />
                    <span>You’re on the early-access VIP list! We will notify you when video lessons drop.</span>
                  </div>
                ) : (
                  <div>
                    <h5 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Join the Early-Bird Waitlist</h5>
                    <form onSubmit={handleWaitlistSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="email"
                        placeholder="Enter your email for 25% discount launch..."
                        required
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        style={{
                          flex: 1,
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-main)',
                          padding: '0.6rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          outline: 'none',
                          fontSize: '0.88rem'
                        }}
                      />
                      <button type="submit" className="primary-btn">
                        <span>Notify Me</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {item.category === 'leathercraft' && (
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  className="primary-btn"
                  onClick={() => {
                    onClose();
                    onOpenContact(item.title);
                  }}
                >
                  <Send size={15} />
                  <span>Request Custom Order ({item.price})</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
