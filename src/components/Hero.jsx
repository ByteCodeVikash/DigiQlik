import React, { useState, useEffect } from 'react';
import {
  Play,
  ArrowRight,
  Sparkles,
  X,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { submitToSheets } from '../utils/googleSheets';

const animatedWords = ['Visions', 'Ideas', 'Brands', 'Businesses'];

const PHONE_NUMBER = '+91 9217644096';
const PHONE_NUMBER_LINK = '+919217644096';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi, I want to connect with you.');
const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER_LINK}?text=${WHATSAPP_MESSAGE}`;

const ConnectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    setFormData({ name: '', business: '', email: '', phone: '' });
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.business || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { success, message } = await submitToSheets({
      formType: 'Hero Connect',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.business,
    });

    if (success) {
      setStatus('success');
      setFormData({ name: '', business: '', email: '', phone: '' });
    } else {
      setStatus('error');
      setErrorMsg(message || 'Something went wrong.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="hero-modal-overlay" onClick={handleClose}>
      <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="hero-modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="hero-modal-success">
            <CheckCircle size={56} className="hero-success-icon" />
            <h2 className="hero-modal-title">We&apos;ll Be In Touch! 🎉</h2>
            <p className="hero-modal-subtitle">
              Thanks for reaching out. Our team will contact you within 24 hours to discuss your project.
            </p>
            <button className="hero-submit-btn" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="hero-modal-title">Let&apos;s Connect & Grow</h2>
            <p className="hero-modal-subtitle">
              Share your details and our team will reach out to discuss how we can transform your business.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="hero-input-group">
                <label className="hero-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="hero-input"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="hero-input-group">
                <label className="hero-label">Business / Company *</label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="hero-input"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="hero-input-group">
                <label className="hero-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@company.com"
                  className="hero-input"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              <div className="hero-input-group">
                <label className="hero-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="hero-input"
                  required
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'error' && (
                <p className="hero-error">⚠️ {errorMsg}</p>
              )}

              <button
                type="submit"
                className="hero-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="spin-icon" />
                    Sending...
                  </>
                ) : (
                  'Get in Touch'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Hero = ({ onBookCall }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <style>{`
        * { box-sizing: border-box; }

        .hero {
          position: relative;
          overflow: hidden;
          min-height: 85vh;
          padding: clamp(20px, 4vh, 60px) 16px 32px;
          background:
            radial-gradient(circle at top left, rgba(99,102,241,0.15), transparent 35%),
            radial-gradient(circle at top right, rgba(34,197,94,0.10), transparent 30%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          color: #0f172a;
        }

        .hero-bg-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 999px;
          filter: blur(10px);
          opacity: 0.7;
          animation: floatUpDown 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 280px;
          height: 280px;
          left: -80px;
          top: 120px;
          background: rgba(99, 102, 241, 0.16);
        }

        .shape-2 {
          width: 220px;
          height: 220px;
          right: -70px;
          top: 80px;
          background: rgba(16, 185, 129, 0.12);
          animation-delay: 2s;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          width: 100%;
          max-width: 900px;
          text-align: center;
          padding: 12px 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(0,0,0,0.03);
          color: #0f172a;
          border-radius: 999px;
          cursor: pointer;
          margin-bottom: 10px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .hero-badge:hover {
          transform: translateY(-2px);
          background: rgba(0,0,0,0.06);
        }

        .badge-text {
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 5.4rem);
          line-height: 1.02;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .text-gradient {
          background: linear-gradient(90deg, #7c3aed 0%, #38bdf8 45%, #22c55e 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 760px;
          margin: 14px auto 0;
          font-size: clamp(1rem, 2vw, 1.18rem);
          line-height: 1.7;
          color: #4b5563;
        }

        .hero-actions {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          border-radius: 999px;
          padding: 14px 22px;
          font-weight: 700;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          min-width: 180px;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #fff;
          box-shadow: 0 18px 40px rgba(99, 102, 241, 0.26);
        }

        .btn-primary:hover {
          box-shadow: 0 22px 48px rgba(99, 102, 241, 0.34);
        }

        .btn-outline {
          border: 1px solid rgba(0,0,0,0.15);
          background: transparent;
          color: #0f172a;
          backdrop-filter: blur(8px);
        }

        .btn-outline:hover {
          background: rgba(0,0,0,0.04);
        }

        .float-animation {
          animation: floatBtn 3s ease-in-out infinite;
        }

        .hero-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.68);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(6px);
          padding: 16px;
        }

        .hero-modal {
          position: relative;
          width: 100%;
          max-width: 520px;
          background: #fff;
          color: #111827;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.28);
          animation: modalFadeIn 0.25s ease-out;
        }

        .hero-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          color: #6b7280;
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: grid;
          place-items: center;
        }

        .hero-modal-close:hover {
          background: #f3f4f6;
        }

        .hero-modal-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin: 0 0 8px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-modal-subtitle {
          margin: 0 0 20px;
          color: #4b5563;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .hero-input-group {
          margin-bottom: 16px;
        }

        .hero-label {
          display: block;
          margin-bottom: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
        }

        .hero-input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 14px;
          padding: 13px 14px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
        }

        .hero-input:disabled {
          background: #f9fafb;
          cursor: not-allowed;
        }

        .hero-error {
          margin: 6px 0 12px;
          color: #dc2626;
          font-size: 0.9rem;
        }

        .hero-submit-btn {
          width: 100%;
          border: none;
          border-radius: 14px;
          padding: 13px 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 8px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .hero-submit-btn:hover {
          transform: translateY(-1px);
        }

        .hero-submit-btn:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          transform: none;
        }

        .hero-modal-success {
          text-align: center;
          padding: 8px 0 0;
        }

        .hero-success-icon {
          color: #22c55e;
          margin: 0 auto 10px;
          display: block;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        @keyframes floatBtn {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 16px;
            padding-bottom: 24px;
            padding-left: 14px;
            padding-right: 14px;
            min-height: auto;
          }

          .hero-container {
            min-height: auto;
            padding-top: 5px;
            padding-bottom: 5px;
          }

          .hero-content {
            padding-top: 12px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-top: 18px;
          }

          .btn {
            width: 100%;
            min-width: unset;
          }

          .hero-modal {
            padding: 22px 18px;
            border-radius: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-badge {
            padding: 8px 14px;
            gap: 6px;
            margin-bottom: 8px;
          }

          .badge-text {
            font-size: 0.85rem;
          }

          .hero-description {
            margin-top: 16px;
          }

          .shape-1 {
            width: 180px;
            height: 180px;
            left: -70px;
            top: 180px;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            right: -50px;
            top: 120px;
          }
        }
      `}</style>

      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <button
            className="hero-badge float-animation"
            onClick={() => setIsConnectModalOpen(true)}
          >
            <Sparkles size={16} strokeWidth={2.5} />
            <span className="badge-text">Click. Connect. Grow.</span>
            <Sparkles size={16} strokeWidth={2.5} />
          </button>

          <h1 className="hero-title">
            Transform Your <br />
            <span
              key={wordIndex}
              className="text-gradient"
              style={{ animation: 'modalFadeIn 0.8s ease-out forwards', display: 'inline-block' }}
            >
              {animatedWords[wordIndex]}
            </span>{' '}
            <br />
            Into Digital Success
          </h1>

          <p className="hero-description">
            Full-service digital agency specializing in marketing, web development, design, and video production.
          </p>

          <div className="hero-actions">
            <button onClick={onBookCall} className="btn btn-primary">
              Get Started <ArrowRight size={20} />
            </button>
            <a href="#portfolio" className="btn btn-outline">
              <Play size={20} strokeWidth={1.8} /> View Our Work
            </a>
          </div>
        </div>
      </div>

      <ConnectModal isOpen={isConnectModalOpen} onClose={() => setIsConnectModalOpen(false)} />
    </section>
  );
};

export default Hero;