import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen = true, defaultSubject = '', onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: defaultSubject ? 'leathercraft' : 'general',
    subject: defaultSubject ? `Inquiry regarding ${defaultSubject}` : '',
    message: ''
  });

  // ESC key listener to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 1000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="brand-icon-wrapper" style={{ width: 36, height: 36 }}>
              <Send size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>Custom Commission / Inquiry</h3>
              <div style={{ fontSize: '0.8rem', color: '#d8b472', fontWeight: 600 }}>
                Direct Maker Contact
              </div>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Received!</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 420, margin: '0 auto 1.5rem' }}>
                Thank you for reaching out. I personally review all inquiries for custom leathercraft orders, 3D printing requests, and app collaborations.
              </p>
              <button className="primary-btn" onClick={onClose} style={{ margin: '0 auto' }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Azfar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.85rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  Inquiry Category
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    outline: 'none'
                  }}
                >
                  <option value="leathercraft">Custom Leathercraft Order (Initials debossing, custom thread)</option>
                  <option value="3d-stl">Custom 3D CAD / STL Print Commission</option>
                  <option value="apps">Software App Collaboration (SnapTask, etc.)</option>
                  <option value="courses">Digital Course Corporate / Group License</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  Subject / Product Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pueblo Leather Cardholder with Cognac thread"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>
                  Message & Custom Specifications
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your desired leather color, dimensions, 3D specs, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" className="secondary-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="primary-btn">
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
