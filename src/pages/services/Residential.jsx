// src/pages/services/Residential.jsx → ENTERPRISE RESIDENTIAL CONSTRUCTION

import React from "react";
import { motion } from "framer-motion";
import { Home, Heart, Shield, Trees, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function Residential() {
  const features = [
    { icon: Home, title: "Luxury Villas & Bungalows", desc: "Custom bespoke villas engineered with fine imported finishes, private landscaping, and smart home automation." },
    { icon: Heart, title: "High-Rise Gated Communities", desc: "Seismically resilient multi-story luxury apartment complexes with comprehensive lifestyle amenities." },
    { icon: Shield, title: "Vastu & Scientific Planning", desc: "Architectural alignment balancing ancient architectural science with modern aesthetic functionality." },
    { icon: Trees, title: "Eco-Friendly Living", desc: "Rainwater harvesting, solar power generation, and native green zones embedded into site plans." },
    { icon: Sparkles, title: "Turnkey Interior Fit-Outs", desc: "Designer modular kitchens, acoustic false ceilings, Italian marble flooring, and smart automation." },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Capability</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Residential <span className="text-blue-600">Developments</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Crafting prestigious personal residences and luxury residential communities with an uncompromising commitment to structural integrity and architectural beauty.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Build Your Family Landmark
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">
            Meet with our chief residential architect to review floor plans and premium material choices.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all font-bold"
          >
            <span>Consult Residential Architects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ServiceSwitcher />
      </div>
    </section>
  );
}