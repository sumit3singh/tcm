// src/components/Footer.jsx → PREMIUM LIGHT THEME CORPORATE FOOTER (LARGE 3D LOGO + RICH BOTTOM BAR)

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import Logo from "../assets/tcmlogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/tcm-constructions", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/tcmconstructions", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/tcmconstructions", label: "Facebook" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Enterprise" },
    { to: "/services", label: "Capabilities" },
    { to: "/projects", label: "Featured Projects" },
    { to: "/contact", label: "Estimation & Inquiries" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-700">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative px-4 pt-12 pb-10 mx-auto sm:px-6 sm:pt-16 sm:pb-12 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand & Large 3D Logo Column */}
          <div className="md:col-span-1 lg:col-span-5 space-y-4">

            {/* Restored Large 3D Logo Card */}
            <div className="relative inline-block">
              <div className="
                p-4 sm:p-5 rounded-3xl 
                bg-gradient-to-br from-slate-100 via-white to-slate-200
                shadow-[0_10px_25px_rgba(10,38,71,0.12)]
                border border-slate-200/90
                transition-all duration-300
                hover:shadow-[0_15px_35px_rgba(249,168,38,0.25)]
              ">
                <img
                  src={Logo}
                  alt="TCM Construction 3D Logo"
                  className="h-26 sm:h-25 md:h-25 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>


          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2647] pb-1 border-b border-slate-200/80 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-slate-600 hover:text-[#F9A826] font-medium transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2647] pb-1 border-b border-slate-200/80 inline-block">
              Get in Touch
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <MapPin className="w-5 h-5 text-[#F9A826] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Killa No. 144, Bhora Kalan, Pataudi Road, Gurugram, Haryana 122413
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+918685882050"
                  className="flex items-center gap-2.5 p-3.5 bg-white hover:bg-amber-50/70 rounded-2xl border border-slate-200 hover:border-[#F9A826]/60 transition-all text-slate-900 font-bold shadow-xs group"
                >
                  <Phone className="w-4 h-4 text-[#F9A826] group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm">+91 86858 82050</span>
                </a>

                <a
                  href="mailto:info@tcmconstructionspvtltd.com"
                  className="flex items-center gap-2.5 p-3.5 bg-white hover:bg-blue-50/70 rounded-2xl border border-slate-200 hover:border-[#0A2647]/40 transition-all text-slate-900 shadow-xs group"
                >
                  <Mail className="w-4 h-4 text-[#0A2647] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold truncate">info@tcmconstructionspvtltd.com</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold text-[#0A2647]">Connect:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#F9A826] text-slate-700 hover:text-[#F9A826] transition-all shadow-xs"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Prominent Substantial Copyright Bar (Full Width & Anchored) */}
      <div className="w-full bg-[#0A2647] text-white border-t border-[#0A2647]">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <p className="text-slate-200 text-center sm:text-left font-medium">
            © {currentYear} <span className="font-bold text-white">TCM Construction Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-300 text-center sm:text-right">
            <span>Prop. <strong className="text-[#F9A826]">Anuj</strong></span>
            <span>•</span>
            <span>Building Connections Brick by Brick</span>
          </div>
        </div>
      </div>
    </footer>
  );
}