import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Target, Menu, X, Phone } from "lucide-react";
import logoImage from "/logo.png";
import FreeAuditModal from "./FreeAuditModal";

const Header = ({ onBookCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Lock/unlock body scroll when mobile menu toggles
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("menu-open");
  }, [isMobileMenuOpen]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize (if screen becomes desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Handle scroll events: change header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <style>
        {`
          /* Reset & base */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body.menu-open {
            overflow: hidden;
          }

          /* Header */
          .header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: #ffffff;
            transition: all 0.3s ease;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border-bottom-color: transparent;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 16px;
          }

          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.25rem;
            padding: 0.5rem 0;
            transition: padding 0.3s ease;
          }

          .header.scrolled .header-container {
            padding: 0.4rem 0;
          }

          /* Logo */
          .logo {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: transform 0.2s ease;
          }

          .logo:hover {
            transform: scale(1.02);
          }

          .logo img {
            height: 74px;
            width: auto;
            object-fit: contain;
            transition: height 0.3s ease;
          }

          .header.scrolled .logo img {
            height: 60px;
          }

          /* Desktop Navigation */
          .desktop-nav {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          .nav-links {
            display: flex;
            list-style: none;
            gap: 2.25rem;
            margin: 0;
            padding: 0;
          }

          .nav-links li a {
            text-decoration: none;
            color: #1a1a2e;
            font-weight: 500;
            font-size: 1rem;
            letter-spacing: 0.01em;
            transition: all 0.25s ease;
            padding: 0.5rem 0;
            position: relative;
            white-space: nowrap;
          }

          .nav-links li a:hover {
            color: #2563eb;
          }

          .nav-links li a.active {
            color: #2563eb;
          }

          .nav-links li a.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2.5px;
            background: linear-gradient(90deg, #2563eb, #3b82f6);
            border-radius: 2px;
          }

          /* Header Actions */
          .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-shrink: 0;
          }

          .desktop-actions {
            display: flex;
          }

          /* Buttons */
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.25rem;
            border-radius: 40px;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.01em;
            transition: all 0.25s ease;
            cursor: pointer;
            text-decoration: none;
            border: none;
            background: none;
            white-space: nowrap;
          }

          .btn-primary {
            background: linear-gradient(135deg, #2563eb, #1e40af);
            color: white;
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
            background: linear-gradient(135deg, #3b82f6, #1e3a8a);
          }

          .btn-primary:active {
            transform: translateY(0);
          }

          /* Mobile Menu Button */
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.4rem;
            border-radius: 8px;
            transition: background 0.2s;
            color: #1a1a2e;
          }

          .mobile-menu-btn:hover {
            background: rgba(0, 0, 0, 0.05);
          }

          /* Mobile Drawer Overlay */
          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }

          .mobile-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          /* Mobile Navigation Drawer */
          .mobile-nav-drawer {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(80%, 320px);
            background: white;
            z-index: 999;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            padding: 4rem 1.25rem 2rem;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
          }

          .mobile-nav-drawer.open {
            transform: translateX(0);
          }

          .mobile-nav-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            padding: 0;
          }

          .mobile-nav-links li a {
            display: block;
            padding: 0.75rem 1rem;
            text-decoration: none;
            color: #1a1a2e;
            font-size: 1.1rem;
            font-weight: 500;
            border-radius: 12px;
            transition: all 0.2s;
            text-align: center;
          }

          .mobile-nav-links li a:hover,
          .mobile-nav-links li a.active {
            background: #f0f9ff;
            color: #2563eb;
          }

          .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-top: 0.5rem;
          }

          .mobile-btn-full {
            width: 100%;
            justify-content: center;
            padding: 0.75rem;
            font-size: 1rem;
          }

          /* Responsive Breakpoints */
          @media (max-width: 1024px) {
            .nav-links {
              gap: 1.5rem;
            }
            .nav-links li a {
              font-size: 0.93rem;
            }
            .btn {
              padding: 0.55rem 1rem;
              font-size: 0.85rem;
            }
          }

          @media (max-width: 900px) {
            .desktop-nav,
            .desktop-actions {
              display: none;
            }

            .mobile-menu-btn {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .logo img {
              height: 64px;
            }

            .header-container {
              padding: 0.4rem 0;
            }
          }

          @media (max-width: 640px) {
            .container {
              padding: 0 14px;
            }
            .logo img {
              height: 58px;
            }
            .header-container {
              gap: 0.75rem;
              padding: 0.3rem 0;
            }
            .mobile-nav-drawer {
              width: 85%;
              padding: 3.5rem 1rem 1.5rem;
            }
            .mobile-nav-links li a {
              padding: 0.75rem;
              font-size: 1.05rem;
            }
            .mobile-btn-full {
              padding: 0.8rem;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 0 12px;
            }
            .logo img {
              height: 52px;
            }
            .btn-primary {
              font-size: 0.8rem;
              padding: 0.5rem 0.9rem;
            }
          }
        `}
      </style>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src={logoImage} alt="DigiQlik Logo" />
          </Link>

          <nav className="desktop-nav">
            <ul className="nav-links">
              <li>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/about">About/Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions desktop-actions">
            <button
              onClick={() => setIsAuditModalOpen(true)}
              className="btn btn-primary"
            >
              <Target size={16} /> Free Audit
            </button>
            <button
              onClick={onBookCall}
              className="btn btn-primary"
            >
              Book Call <Phone size={16} />
            </button>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Overlay for mobile drawer */}
        <div
          className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

          <div className={`mobile-nav-drawer ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="mobile-nav-links">
              {[
                { id: "/", label: "Home" },
                { id: "/services", label: "Services" },
                { id: "/portfolio", label: "Portfolio" },
                { id: "/about", label: "About/Team" },
                { id: "/contact", label: "Contact" },
              ].map((item, index) => (
                <li
                  key={item.id}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <NavLink
                    to={item.id}
                    end={item.id === "/"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <button
                onClick={() => {
                  setIsAuditModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="btn btn-primary mobile-btn-full"
              >
                <Target size={18} /> Free Audit
              </button>
              <Link
                to="/contact"
                className="btn btn-primary mobile-btn-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        <FreeAuditModal
          isOpen={isAuditModalOpen}
          onClose={() => setIsAuditModalOpen(false)}
        />
      </header>
    </>
  );
};

export default Header;