import React, { useState, useEffect, useRef } from 'react';
import {
  Monitor, Smartphone, Code2, BarChart2, Palette, Megaphone,
  Clock, Star, Users, Award, CheckCircle, ChevronDown,
  ArrowRight, Zap, Shield, TrendingUp, BookOpen, Play,
  Filter, X, ChevronLeft, ChevronRight, Briefcase, Cpu
} from 'lucide-react';
import './CoursesPage.css';

/* ─── DATA ─────────────────────────────────────────────── */
const ALL_COURSES = [
  { id:1, icon:Monitor,    title:'Web Development Bootcamp',       desc:'HTML, CSS, JS, React & Node.js — full-stack mastery.',         duration:'4 Mo', level:'Beginner',     price:'₹12,999', students:'4.2k', rating:4.9, cat:'Web',     tags:['Bestseller'],  featured:true, image: '/webdev.jpg'  },
  { id:2, icon:Smartphone, title:'App Dev with React Native',      desc:'Cross-platform mobile apps for iOS & Android.',                duration:'4 Mo', level:'Intermediate', price:'₹14,999', students:'2.8k', rating:4.8, cat:'Mobile',  tags:['Trending'],    featured:true, image: '/appdevelopment.jpg'  },
  { id:3, icon:Cpu,        title:'Python + AI & Machine Learning', desc:'Python fundamentals to building real AI models.',               duration:'5 Mo', level:'Advanced',     price:'₹18,999', students:'3.1k', rating:4.9, cat:'AI/ML',   tags:['Hot 🔥'],       featured:true, image: '/TechForex.png'  },
  { id:4, icon:Code2,      title:'Python Programming',             desc:'From basics to automation, scripting & APIs.',                  duration:'3 Mo', level:'Beginner',     price:'Free',    students:'6.0k', rating:4.7, cat:'Web',     tags:['Free'],        featured:false, image: '/seo.jpg' },
  { id:5, icon:BarChart2,  title:'Data Science',                   desc:'Pandas, NumPy, visualization & real-world projects.',          duration:'5 Mo', level:'Advanced',     price:'₹16,999', students:'1.9k', rating:4.8, cat:'AI/ML',   tags:['Trending'],    featured:false, image: '/rankusa.png' },
  { id:6, icon:Palette,    title:'UI/UX Design',                   desc:'Figma, user research, prototyping & design systems.',          duration:'3 Mo', level:'Beginner',     price:'₹10,999', students:'2.4k', rating:4.9, cat:'Design',  tags:['Bestseller'],  featured:false, image: '/graphic.jpg' },
  { id:7, icon:Megaphone,  title:'Digital Marketing',              desc:'SEO, social media, Google Ads & growth analytics.',            duration:'3 Mo', level:'Beginner',     price:'₹8,999',  students:'3.7k', rating:4.6, cat:'Marketing',tags:['Trending'],   featured:false, image: '/admark.png' },
  { id:8, icon:Briefcase,  title:'Business Analytics',             desc:'Excel, Power BI, SQL & data-driven decision making.',          duration:'3 Mo', level:'Intermediate', price:'₹13,999', students:'1.5k', rating:4.7, cat:'AI/ML',   tags:['New'],         featured:false, image: '/CreatingUnique.png' },
];

const WHY_US = [
  { icon:Zap,         title:'Industry Experts',    desc:'Learn from professionals with 10+ years of real-world experience.' },
  { icon:BookOpen,    title:'Real Projects',        desc:'Build portfolio-worthy projects that hiring managers love.' },
  { icon:Shield,      title:'Certification',        desc:'Earn globally recognized certificates on course completion.' },
  { icon:TrendingUp,  title:'Job Assistance',       desc:'Resume reviews, mock interviews & placement support.' },
];

const STEPS = [
  { num:'01', title:'Enroll & Access',   desc:'Pick a course, enroll instantly and unlock all lessons & resources.' },
  { num:'02', title:'Learn',             desc:'Watch expert videos, study structured modules at your own pace.' },
  { num:'03', title:'Build Projects',    desc:'Apply your skills on real-world capstone projects.' },
  { num:'04', title:'Get Certified & Hired', desc:'Pass assessments, earn your certificate, land the job.' },
];

const TESTIMONIALS = [
  { name:'Priya Sharma',  role:'Frontend Dev @ Infosys',    text:'The Web Dev Bootcamp was insane. Got placed in 6 weeks after completing the course!', avatar:'PS', rating:5 },
  { name:'Rahul Verma',   role:'Data Analyst @ TCS',        text:'Best structured Data Science course I have ever taken. Hands-on projects are gold.',  avatar:'RV', rating:5 },
  { name:'Anjali Singh',  role:'UI Designer @ Startup',     text:'UI/UX course gave me the Figma skills + portfolio to land my dream design job!',      avatar:'AS', rating:5 },
  { name:'Karan Mehra',   role:'ML Engineer @ Amazon',      text:'Python + AI course is genuinely world-class. The mentors are incredibly supportive.',  avatar:'KM', rating:5 },
];

const CATS = ['All', 'Web', 'Mobile', 'AI/ML', 'Design', 'Marketing'];
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const PRICES = ['All', 'Free', 'Paid'];
const levelColor = { Beginner:'#10b981', Intermediate:'#f59e0b', Advanced:'#ef4444' };
const tagColor   = { Bestseller:'#6366f1', Trending:'#8b5cf6', 'Hot 🔥':'#ef4444', Free:'#10b981', New:'#06b6d4' };

/* ─── HOOKS ─────────────────────────────────────────────── */
function useOnScreen(ref) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return vis;
}

/* ─── SUB COMPONENTS ────────────────────────────────────── */
function CourseCard({ c, featured }) {
  return (
    <div className={`cc-card ${featured ? 'cc-featured-card' : ''}`}>
      {featured && <span className="cc-feat-badge"><Star size={12} fill="currentColor" /> Featured</span>}
      <div className="cc-card-img-wrap">
        <img src={c.image} alt={c.title} className="cc-card-img" loading="lazy" />
        <div className="cc-card-overlay" />
        <div className="cc-icon-floating" style={{ background:`${c.color || '#6366f1'}`, color: '#fff' }}>
          <c.icon size={20} />
        </div>
      </div>
      <div className="cc-card-content">
        <div className="cc-tags">
          {c.tags.map(t => (
            <span key={t} className="cc-tag" style={{ background:`${tagColor[t] || '#6366f1'}22`, color: tagColor[t] || '#6366f1' }}>{t}</span>
          ))}
        </div>
        <h3 className="cc-title">{c.title}</h3>
        <p className="cc-desc">{c.desc}</p>
        <div className="cc-meta">
          <span className="cc-stars">{'★'.repeat(Math.floor(c.rating))} <em>{c.rating}</em></span>
          <span className="cc-enrolled"><Users size={13} /> {c.students}</span>
        </div>
        <div className="cc-progress-bar"><div className="cc-progress-fill" style={{ width:`${Math.random()*40+55}%` }} /></div>
        <div className="cc-footer">
          <div className="cc-info">
            <span><Clock size={13} /> {c.duration}</span>
            <span className="cc-level" style={{ color: levelColor[c.level], background:`${levelColor[c.level]}18` }}>{c.level}</span>
          </div>
          <div className="cc-price-row">
            <strong className="cc-price">{c.price}</strong>
            <a href="#" className="cc-btn">Enroll <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarRating({ n }) {
  return <span className="ts-stars">{Array(n).fill(0).map((_,i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}</span>;
}

/* ─── MAIN PAGE ──────────────────────────────────────────── */
export default function CoursesPage() {
  const [cat, setCat]       = useState('All');
  const [level, setLevel]   = useState('All');
  const [price, setPrice]   = useState('All');
  const [slide, setSlide]   = useState(0);

  const heroRef    = useRef(null); const heroVis    = useOnScreen(heroRef);
  const featRef    = useRef(null); const featVis    = useOnScreen(featRef);
  const gridRef    = useRef(null); const gridVis    = useOnScreen(gridRef);
  const whyRef     = useRef(null); const whyVis     = useOnScreen(whyRef);
  const stepsRef   = useRef(null); const stepsVis   = useOnScreen(stepsRef);
  const testiRef   = useRef(null); const testiVis   = useOnScreen(testiRef);
  const ctaRef     = useRef(null); const ctaVis     = useOnScreen(ctaRef);

  const filtered = ALL_COURSES.filter(c => {
    if (cat   !== 'All' && c.cat   !== cat)   return false;
    if (level !== 'All' && c.level !== level) return false;
    if (price === 'Free' && c.price !== 'Free') return false;
    if (price === 'Paid' && c.price === 'Free') return false;
    return true;
  });

  const featured = ALL_COURSES.filter(c => c.featured);
  const maxSlide = TESTIMONIALS.length - 1;
  const prev = () => setSlide(s => s === 0 ? maxSlide : s - 1);
  const next = () => setSlide(s => s === maxSlide ? 0 : s + 1);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="cp2-page">

      {/* ── HERO ── */}
      <section ref={heroRef} className={`cp2-hero ${heroVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-hero-orb cp2-orb1" />
        <div className="cp2-hero-orb cp2-orb2" />
        <div className="cp2-hero-orb cp2-orb3" />
        <div className="cp2-wrap cp2-hero-grid">
          <div className="cp2-hero-text">
            <span className="cp2-eyebrow"><Zap size={14} /> #1 Skill Learning Platform</span>
            <h1 className="cp2-h1">Master<br /><span className="cp2-grad">In-Demand</span><br />Skills</h1>
            <p className="cp2-hero-sub">Expert-led, project-based courses that take you from zero to job-ready — fast.</p>
            <div className="cp2-hero-btns">
              <a href="#courses-grid" className="cp2-btn-primary"><BookOpen size={18} /> Browse Courses</a>
              <a href="#featured" className="cp2-btn-ghost"><Play size={18} /> Get Started</a>
            </div>
            <div className="cp2-badges">
              <div className="cp2-badge-item"><CheckCircle size={16} color="#10b981" /><span>12k+ Students</span></div>
              <div className="cp2-badge-item"><CheckCircle size={16} color="#10b981" /><span>95% Placement</span></div>
              <div className="cp2-badge-item"><CheckCircle size={16} color="#10b981" /><span>Expert Mentors</span></div>
            </div>
          </div>
          <div className="cp2-hero-visual">
            <div className="cp2-visual-card cp2-vc1">
              <Star size={20} fill="#f59e0b" color="#f59e0b" />
              <div><strong>4.9/5</strong><span>Average Rating</span></div>
            </div>
            <div className="cp2-orb-graphic">
              <div className="cp2-orb-ring cp2-ring1" />
              <div className="cp2-orb-ring cp2-ring2" />
              <div className="cp2-orb-core">
                <Award size={52} strokeWidth={1.5} />
              </div>
            </div>
            <div className="cp2-visual-card cp2-vc2">
              <Users size={20} />
              <div><strong>12,400+</strong><span>Learners Enrolled</span></div>
            </div>
            <div className="cp2-visual-card cp2-vc3">
              <CheckCircle size={20} color="#10b981" />
              <div><strong>Certified</strong><span>Industry-Ready</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section id="featured" ref={featRef} className={`cp2-section ${featVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-wrap">
          <div className="cp2-sec-head">
            <span className="cp2-sec-label">⭐ Handpicked for You</span>
            <h2 className="cp2-h2">Featured <span className="cp2-grad">Courses</span></h2>
            <p className="cp2-sec-sub">Our most popular, highest-rated programs chosen by industry experts.</p>
          </div>
          <div className="cp2-feat-grid">
            {featured.map((c, i) => (
              <div key={c.id} className="cp2-feat-wrap" style={{ animationDelay:`${i*0.12}s` }}>
                <CourseCard c={c} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + ALL COURSES ── */}
      <section id="courses-grid" ref={gridRef} className={`cp2-section cp2-gray-bg ${gridVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-wrap">
          <div className="cp2-sec-head">
            <span className="cp2-sec-label">📚 Full Catalog</span>
            <h2 className="cp2-h2">All <span className="cp2-grad">Courses</span></h2>
          </div>

          {/* Sticky filter bar */}
          <div className="cp2-filters">
            <div className="cp2-filter-group">
              <Filter size={16} />
              <span>Filter:</span>
            </div>
            <div className="cp2-filter-chips">
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} className={`cp2-chip ${cat===c ? 'cp2-chip-active':''}`}>{c}</button>
              ))}
            </div>
            <div className="cp2-filter-selects">
              <select value={level} onChange={e=>setLevel(e.target.value)} className="cp2-select">
                {LEVELS.map(l => <option key={l}>{l}</option>)}
              </select>
              <select value={price} onChange={e=>setPrice(e.target.value)} className="cp2-select">
                {PRICES.map(p => <option key={p}>{p}</option>)}
              </select>
              {(cat!=='All'||level!=='All'||price!=='All') && (
                <button className="cp2-clear" onClick={()=>{setCat('All');setLevel('All');setPrice('All');}}>
                  <X size={14} /> Clear
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0
            ? <div className="cp2-empty">No courses match your filters. <button onClick={()=>{setCat('All');setLevel('All');setPrice('All');}}>Reset</button></div>
            : <div className="cp2-courses-grid">
                {filtered.map((c, i) => (
                  <div key={c.id} style={{ animationDelay:`${i*0.07}s` }} className="cp2-card-wrap">
                    <CourseCard c={c} featured={false} />
                  </div>
                ))}
              </div>
          }
        </div>
      </section>

      {/* ── WHY US ── */}
      <section ref={whyRef} className={`cp2-section ${whyVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-wrap">
          <div className="cp2-sec-head">
            <span className="cp2-sec-label">💡 Our Advantage</span>
            <h2 className="cp2-h2">Why Choose <span className="cp2-grad">Us</span></h2>
            <p className="cp2-sec-sub">We don't just teach — we transform careers.</p>
          </div>
          <div className="cp2-why-grid">
            {WHY_US.map((w, i) => (
              <div key={i} className="cp2-why-card" style={{ animationDelay:`${i*0.12}s` }}>
                <div className="cp2-why-icon"><w.icon size={24} /></div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING PROCESS / TIMELINE ── */}
      <section ref={stepsRef} className={`cp2-section cp2-dark-bg ${stepsVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-wrap">
          <div className="cp2-sec-head">
            <span className="cp2-sec-label cp2-sec-label-light">🚀 Your Journey</span>
            <h2 className="cp2-h2 cp2-white">Learning <span className="cp2-grad">Process</span></h2>
            <p className="cp2-sec-sub cp2-muted">A clear, proven path from enrollment to your dream job.</p>
          </div>
          <div className="cp2-timeline">
            <div className="cp2-timeline-line" />
            {STEPS.map((s, i) => (
              <div key={i} className={`cp2-step ${i%2===0 ? 'cp2-step-left':'cp2-step-right'}`} style={{ animationDelay:`${i*0.18}s` }}>
                <div className="cp2-step-dot">{s.num}</div>
                <div className="cp2-step-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testiRef} className={`cp2-section ${testiVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-wrap">
          <div className="cp2-sec-head">
            <span className="cp2-sec-label">💬 Success Stories</span>
            <h2 className="cp2-h2">Student <span className="cp2-grad">Reviews</span></h2>
          </div>
          <div className="cp2-carousel">
            <button className="cp2-car-btn cp2-car-prev" onClick={prev}><ChevronLeft size={22} /></button>
            <div className="cp2-car-track">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`cp2-testi-card ${i===slide?'cp2-testi-active':''}`}>
                  <StarRating n={t.rating} />
                  <p className="cp2-testi-text">"{t.text}"</p>
                  <div className="cp2-testi-author">
                    <div className="cp2-avatar">{t.avatar}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="cp2-car-btn cp2-car-next" onClick={next}><ChevronRight size={22} /></button>
          </div>
          <div className="cp2-car-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={()=>setSlide(i)} className={`cp2-dot ${i===slide?'cp2-dot-active':''}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section ref={ctaRef} className={`cp2-cta ${ctaVis ? 'cp2-vis' : ''}`}>
        <div className="cp2-cta-orb" />
        <div className="cp2-wrap cp2-cta-inner">
          <h2 className="cp2-cta-h">Start Learning <span className="cp2-grad-light">Today</span></h2>
          <p>Join 12,000+ learners building their dream careers right now.</p>
          <div className="cp2-cta-btns">
            <a href="#featured" className="cp2-btn-white">Browse Courses <ArrowRight size={18} /></a>
            <a href="/contact" className="cp2-btn-outline-white">Talk to Expert</a>
          </div>
          <span className="cp2-cta-note">🔒 7-day money-back guarantee. No risk.</span>
        </div>
      </section>

    </main>
  );
}
