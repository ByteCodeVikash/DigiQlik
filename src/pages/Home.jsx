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
} from 'lucide-react';
import Hero from '../components/Hero';
import TrustedMarquee from '../components/TrustedMarquee';

/* ─────────────────────────────────────────────
   PREVIEW: Services
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
            Full-spectrum digital solutions designed to scale your brand and drive measurable growth.
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
            Know More About Services <ArrowRight size={16} />
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
            A proven 4-step methodology that turns your vision into measurable digital success.
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
            Know More About Our Process <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PREVIEW: Founder Section
───────────────────────────────────────────── */
const FounderPreview = () => {
  const navigate = useNavigate();

  const handleKnowMoreTeam = () => {
    navigate('/about');
    setTimeout(() => {
      const section = document.getElementById('team-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <section className="hp-preview hp-founder-preview">
      <div className="container">
        <div className="hp-founder-card">
          <div className="hp-founder-img-col">
            <div className="hp-founder-img-frame">
              <img src="/shekharkatiyar.jpeg" alt="Shekhar Katial" className="hp-founder-hero-img" />
            </div>
          </div>
          <div className="hp-founder-content-col">
            <span className="hp-founder-label">Founder & CEO</span>
            <h3 className="hp-founder-subtitle">The Visionary</h3>
            <h2 className="hp-founder-name">Shekhar <span className="text-gradient">Katial</span></h2>
            <p className="hp-founder-desc">
              "Building digital excellence isn't just about code and pixels; it's about creating meaningful connections and driving real business impact for our partners across the globe. At DigiQlik, we turn your digital vision into reality."
            </p>
            <div className="hp-founder-cta">
              <button className="hp-cta-btn" onClick={handleKnowMoreTeam}>
                Know More About Our Team <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PREVIEW: Portfolio (Mini)
───────────────────────────────────────────── */
const homeProjects = [
  { 
    title: '3D Portfolio', 
    tag: 'Portfolio', 
    image: '/src/attention seeker animation 3d portfolio.jpeg',
    link: '/portfolio'
  },
  { 
    title: 'DG Market CRM', 
    tag: 'CRM', 
    image: '/src/dg market crm.jpeg',
    link: '/portfolio'
  },
  { 
    title: 'GasXpert', 
    tag: 'Gas Service', 
    image: '/src/gasxpert.jpeg',
    link: '/portfolio'
  },
];

const PortfolioPreview = () => {
  const navigate = useNavigate();
  return (
    <section className="hp-preview hp-portfolio-preview">
      <div className="container">
        <div className="hp-preview-header">
          <span className="section-tag">Our Work</span>
          <h2 className="hp-preview-title">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="hp-preview-desc">
            Explore how we've helped businesses achieve digital dominance.
          </p>
        </div>

        <div className="hp-portfolio-grid">
          {homeProjects.map((p, i) => (
            <div className="hp-project-mini" key={i} onClick={() => navigate(p.link)}>
              <div className="hp-project-img-box">
                <img src={p.image} alt={p.title} />
                <div className="hp-project-overlay">
                  <span className="hp-project-tag">{p.tag}</span>
                </div>
              </div>
              <h4 className="hp-project-title">{p.title}</h4>
            </div>
          ))}
        </div>

        <div className="hp-preview-cta">
          <button className="hp-cta-btn" onClick={() => navigate('/portfolio')}>
            View All Projects <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   MAIN HOME PAGE
───────────────────────────────────────────── */
const Home = ({ onBookCall }) => {
  return (
    <div className="page-home">
      <style>{`
        /* ── Shared Preview Styles ── */
        .hp-preview {
          padding: 6rem 1.5rem;
        }
        .hp-preview-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }
        .hp-preview-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0.5rem 0 1.25rem;
          color: #0f172a;
        }
        .hp-preview-desc {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.75;
          margin: 0;
        }
        .hp-preview-cta {
          display: flex;
          justify-content: center;
          margin-top: 3.5rem;
        }
        .hp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.9rem 2.2rem;
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #fff;
          font-weight: 700;
          font-size: 1.05rem;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(249,115,22,0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hp-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(249,115,22,0.4);
        }
        .hp-cta-btn--dark {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          box-shadow: 0 12px 30px rgba(99,102,241,0.3);
        }
        .hp-cta-btn--dark:hover {
          box-shadow: 0 18px 40px rgba(99,102,241,0.4);
        }

        /* ── Services Preview ── */
        .hp-services-preview {
          background: #ffffff;
        }
        .hp-services-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          justify-content: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .hp-service-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1.6rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          transition: all 0.3s ease;
        }
        .hp-service-chip:hover {
          border-color: var(--chip-color);
          background: #fff;
          color: var(--chip-color);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }

        /* ── Process Preview ── */
        .hp-process-preview {
          background: #0f172a;
          color: #fff;
        }
        .hp-process-preview .hp-preview-title { color: #fff; }
        .hp-process-preview .hp-preview-desc { color: #94a3b8; }
        .hp-process-steps {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin: 0 auto;
          max-width: 900px;
        }
        .hp-process-step {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1.25rem;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
        }
        .hp-process-step:hover {
          background: rgba(255,255,255,0.08);
          border-color: #4f46e5;
          transform: translateY(-5px);
        }
        .hp-step-num {
          font-size: 0.9rem;
          font-weight: 800;
          color: #4f46e5;
          background: #fff;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
        .hp-step-label {
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* ── Founder Preview ── */
        .hp-founder-preview {
          background: #f8fafc;
        }
        .hp-founder-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 5rem;
          align-items: center;
          background: #fff;
          padding: 4rem;
          border-radius: 3rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          max-width: 1100px;
          margin: 0 auto;
        }
        .hp-founder-img-frame {
          position: relative;
        }
        .hp-founder-hero-img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 2.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .hp-founder-content-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .hp-founder-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .hp-founder-subtitle {
          font-size: 1.6rem;
          font-weight: 700;
          color: #64748b;
          margin: 0;
        }
        .hp-founder-name {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1;
        }
        .hp-founder-desc {
          font-style: italic;
          font-size: 1.2rem;
          color: #475569;
          line-height: 1.8;
          margin: 1rem 0;
          padding-left: 1.5rem;
          border-left: 4px solid #f97316;
        }

        /* ── Portfolio Preview ── */
        .hp-portfolio-preview {
          background: #ffffff;
        }
        .hp-portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }
        .hp-project-mini {
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .hp-project-mini:hover {
          transform: translateY(-10px);
        }
        .hp-project-img-box {
          position: relative;
          aspect-ratio: 16/10;
          border-radius: 1.5rem;
          overflow: hidden;
          margin-bottom: 1.25rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .hp-project-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hp-project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          display: flex;
          align-items: flex-end;
          padding: 1.25rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hp-project-mini:hover .hp-project-overlay {
          opacity: 1;
        }
        .hp-project-tag {
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          background: #f97316;
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
        }
        .hp-project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hp-founder-card {
            grid-template-columns: 320px 1fr;
            gap: 3.5rem;
            padding: 3rem;
          }
          .hp-portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hp-preview { padding: 4rem 1.25rem; }
          .hp-preview-header { margin-bottom: 2.5rem; }
          .hp-founder-card {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2.5rem 1.5rem;
          }
          .hp-founder-img-col { max-width: 280px; margin: 0 auto; }
          .hp-founder-desc { padding-left: 0; border-left: none; border-top: 4px solid #f97316; padding-top: 1.5rem; }
          .hp-portfolio-grid { grid-template-columns: 1fr; }
          .hp-process-steps { flex-direction: column; align-items: stretch; }
          .hp-preview-cta { margin-top: 2.5rem; }
        }
      `}</style>

      <Hero onBookCall={onBookCall} />
      <ServicesPreview />
      <ProcessPreview />
      <FounderPreview />
      <PortfolioPreview />
      <TrustedMarquee />
    </div>
  );
};

export default Home;
