// src/components/Navbar.jsx → ENTERPRISE-GRADE RESPONSIVE NAVBAR (NO AWKWARD GAP)

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, Building } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (location.pathname !== to) {
      navigate(to);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="px-4 py-3.5 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Corporate Brand Identity */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0A2647] to-[#144272] text-[#F9A826] shadow-sm border border-[#0A2647]/20 group-hover:scale-105 transition-transform">
              <Building className="w-5 h-5 sm:w-5 sm:h-5 text-[#F9A826]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0A2647]">
                  TCM
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#F9A826]">
                  CONSTRUCTION
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 mt-0.5">
                Pvt. Ltd. • India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-1 lg:flex xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#F9A826] bg-amber-500/10"
                      : "text-slate-700 hover:text-[#0A2647] hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F9A826] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Header Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918685882050"
              className="items-center hidden gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-200 rounded-lg sm:inline-flex bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-slate-900 hover:from-[#ffb339] hover:to-[#ff8a3d] shadow-sm hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5 text-slate-900" />
              <span>+91 86858 82050</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-200 lg:hidden text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-slate-200 lg:hidden mt-3 pt-3 pb-2"
            >
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <button
                      key={link.to}
                      onClick={() => handleNavClick(link.to)}
                      className={`px-3 py-2.5 text-xs sm:text-sm font-bold rounded-lg text-center transition-all ${
                        isActive
                          ? "bg-amber-500 text-slate-950 shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              {/* Direct call CTA in mobile menu */}
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                <a
                  href="tel:+918685882050"
                  className="flex items-center gap-2 text-xs font-bold text-slate-800"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call: +91 86858 82050</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => handleNavClick("/contact")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:underline"
                >
                  Get Free Estimate <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}