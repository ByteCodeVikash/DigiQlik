import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Share2,
  Palette,
  Target,
  Code,
  Video,
  CheckCircle,
} from 'lucide-react';
import Hero from '../components/Hero';
import TrustedMarquee from '../components/TrustedMarquee';

/* ─────────────────────────────────────────────
   PREVIEW: Services (replaces FAQ on Home)
───────────────────────────────────────────── */
const serviceHighlights = [
  { icon: <Search size={22} />, label: 'SEO & Performance Marketing', color: '#3b82f6' },
  { icon: <Code size={22} />, label: 'Web Development', color: '#6366f1' },
  { icon: <Palette size={22} />, label: 'Graphic & Branding Design', color: '#8b5cf6' },
  { icon: <Video size={22} />, label: 'Video Production', color: '#ec4899' },
  { icon: <Share2 size={22} />, label: 'Social Media Marketing', color: '#10b981' },
  { icon: <Target size={22} />, label: 'Paid Advertising (PPC)', color: '#f97316' },
];

const ServicesPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="hp-preview hp-services-preview">
      <div className="container">
        <div className="hp-preview-header">
          <span className="section-tag">What We Do</span>
          <h2 className="hp-preview-title">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="hp-preview-desc">
            Full-spectrum digital solutions — from performance marketing to cutting-edge
            web development — designed to scale your brand.
          </p>
        </div>

        <div className="hp-services-chips">
          {serviceHighlights.map((s, i) => (
            <div className="hp-service-chip" key={i} style={{ '--chip-color': s.color }}>
              <span className="hp-chip-icon" style={{ color: s.color }}>{s.icon}</span>
              <span className="hp-chip-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hp-preview-cta">
          <button className="hp-cta-btn" onClick={() => navigate('/services')}>
            View All Services <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PREVIEW: Process (How We Work)
───────────────────────────────────────────── */
const processSteps = ['Discovery', 'Planning', 'Execution', 'Optimization'];

const ProcessPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="hp-preview hp-process-preview">
      <div className="container">
        <div className="hp-preview-header">
          <span className="section-tag">Our Approach</span>
          <h2 className="hp-preview-title">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="hp-preview-desc">
            A proven 4-step methodology that turns your vision into measurable digital success — on time, every time.
          </p>
        </div>

        <div className="hp-process-steps">
          {processSteps.map((step, i) => (
            <div className="hp-process-step" key={i}>
              <span className="hp-step-num">0{i + 1}</span>
              <span className="hp-step-label">{step}</span>
            </div>
          ))}
        </div>

        <div className="hp-preview-cta">
          <button className="hp-cta-btn hp-cta-btn--dark" onClick={() => navigate('/services')}>
            See How It Works <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PREVIEW: About Company
───────────────────────────────────────────── */
const aboutStats = [
  { value: '150+', label: 'Projects' },
  { value: '8+', label: 'Years' },
  { value: '50+', label: 'Clients' },
  { value: '10+', label: 'Countries' },
];

const AboutPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="hp-preview hp-about-preview">
      <div className="container">
        <div className="hp-about-inner">
          <div className="hp-about-text">
            <span className="section-tag">Who We Are</span>
            <h2 className="hp-preview-title">
              We Are <span className="text-gradient">DigiQlik</span>
            </h2>
            <p className="hp-preview-desc">
              A full-service digital agency born in Noida, India — built to transform brands,
              accelerate growth, and create digital experiences that people remember.
              From strategy to execution, we're your trusted growth partner.
            </p>
            <div className="hp-about-checks">
              <span><CheckCircle size={15} /> Award-Winning Designs</span>
              <span><CheckCircle size={15} /> Data-Driven Strategy</span>
              <span><CheckCircle size={15} /> Long-Term Partnerships</span>
            </div>
            <button className="hp-cta-btn" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/about')}>
              Know More <ArrowRight size={16} />
            </button>
          </div>

          <div className="hp-about-stats">
            {aboutStats.map((s, i) => (
              <div className="hp-stat-card" key={i}>
                <div className="hp-stat-value">{s.value}</div>
                <div className="hp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PREVIEW: Blog / Insights
───────────────────────────────────────────── */
const blogPreviews = [
  { title: '10 SEO Trends to Watch in 2025', category: 'SEO' },
  { title: 'How to Maximize Your PPC ROI', category: 'PPC' },
  { title: 'Content Systems That Scale', category: 'Content' },
];

const BlogPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="hp-preview hp-blog-preview">
      <div className="container">
        <div className="hp-preview-header">
          <span className="section-tag">Insights & Updates</span>
          <h2 className="hp-preview-title">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="hp-preview-desc">
            Stay ahead with expert insights on digital marketing, SEO, PPC, and more.
          </p>
        </div>

        <div className="hp-blog-pills">
          {blogPreviews.map((b, i) => (
            <div className="hp-blog-pill" key={i}>
              <span className="hp-blog-cat">{b.category}</span>
              <span className="hp-blog-title">{b.title}</span>
            </div>
          ))}
        </div>

        <div className="hp-preview-cta">
          <button className="hp-cta-btn" onClick={() => navigate('/portfolio')}>
            Read Our Insights <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
const Home = () => {
  return (
    <div className="page-home">
      <style>{`
        /* ── Shared Preview Styles ── */
        .hp-preview {
          padding: 2.25rem 1.5rem;
        }
        .hp-preview-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 1.5rem;
        }
        .hp-preview-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0.4rem 0 0.75rem;
          color: #0f172a;
        }
        .hp-preview-desc {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }
        .hp-preview-cta {
          display: flex;
          justify-content: center;
          margin-top: 1.25rem;
        }
        .hp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.6rem;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(249,115,22,0.28);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .hp-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(249,115,22,0.38);
        }
        .hp-cta-btn--dark {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          box-shadow: 0 8px 24px rgba(99,102,241,0.28);
        }
        .hp-cta-btn--dark:hover {
          box-shadow: 0 14px 32px rgba(99,102,241,0.38);
        }

        /* ── Services Preview ── */
        .hp-services-preview {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border-top: 1px solid #f1f5f9;
        }
        .hp-services-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .hp-service-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          background: #fff;
          border: 1.5px solid rgba(0,0,0,0.07);
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .hp-service-chip:hover {
          border-color: var(--chip-color);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .hp-chip-icon {
          display: flex;
          align-items: center;
        }
        .hp-chip-label { line-height: 1; }

        /* ── Process Preview ── */
        .hp-process-preview {
          background:
            radial-gradient(circle at top, rgba(79,70,229,0.14), transparent 35%),
            linear-gradient(180deg, #0b1020 0%, #060816 100%);
          color: #fff;
        }
        .hp-process-preview .hp-preview-title { color: #f8fafc; }
        .hp-process-preview .hp-preview-desc { color: #cbd5e1; }
        .hp-process-preview .section-tag {
          background: rgba(99,102,241,0.15);
          color: #a5b4fc;
          border: 1px solid rgba(99,102,241,0.25);
        }
        .hp-process-steps {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 0 auto;
          max-width: 700px;
        }
        .hp-process-step {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(15,23,42,0.75);
          border: 1px solid rgba(148,163,184,0.16);
          border-radius: 14px;
          padding: 0.65rem 1.2rem;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, transform 0.2s;
        }
        .hp-process-step:hover {
          border-color: rgba(99,102,241,0.5);
          transform: translateY(-2px);
        }
        .hp-step-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: #818cf8;
          min-width: 22px;
        }
        .hp-step-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        /* ── About Preview ── */
        .hp-about-preview {
          background: linear-gradient(180deg, #fffaf5 0%, #ffffff 60%, #fffaf5 100%);
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }
        .hp-about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hp-about-text .hp-preview-title { text-align: left; }
        .hp-about-text .hp-preview-desc { text-align: left; }
        .hp-about-checks {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.25rem;
        }
        .hp-about-checks span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
        }
        .hp-about-checks svg { color: #22c55e; flex-shrink: 0; }
        .hp-about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .hp-stat-card {
          background: #fff;
          border: 1px solid #f1f5f9;
          border-radius: 1.25rem;
          padding: 1.5rem 1.25rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hp-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(249,115,22,0.1);
        }
        .hp-stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #f97316;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .hp-stat-label {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 500;
        }

        /* ── Blog Preview ── */
        .hp-blog-preview {
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }
        .hp-blog-pills {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .hp-blog-pill {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 0.8rem 1.1rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.04);
          transition: border-color 0.2s, transform 0.2s;
        }
        .hp-blog-pill:hover {
          border-color: #f97316;
          transform: translateX(4px);
        }
        .hp-blog-cat {
          flex-shrink: 0;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f97316;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          border-radius: 9999px;
          padding: 0.2rem 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hp-blog-title {
          font-size: 0.93rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.3;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hp-about-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .hp-about-text .hp-preview-title,
          .hp-about-text .hp-preview-desc { text-align: center; }
          .hp-about-checks { align-items: center; }
          .hp-about-stats { grid-template-columns: 1fr 1fr; }
          .hp-preview { padding: 1.75rem 1rem; }
          .hp-preview-header { margin-bottom: 1.25rem; }
          .hp-preview-cta { margin-top: 1rem; }
        }
        @media (max-width: 480px) {
          .hp-about-stats { grid-template-columns: 1fr 1fr; gap: 0.65rem; }
          .hp-process-steps { gap: 0.4rem; }
          .hp-preview { padding: 1.5rem 0.85rem; }
        }
      `}</style>

      <Hero />
      <ServicesPreview />
      <ProcessPreview />
      <AboutPreview />
      <BlogPreview />
      <TrustedMarquee />
    </div>
  );
};

export default Home;
