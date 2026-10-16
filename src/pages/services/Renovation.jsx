// src/pages/services/Renovation.jsx → ENTERPRISE RENOVATION & REMODELING

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Paintbrush, Home, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function Renovation() {
  const highlights = [
    { title: "Structural Retrofit & Jacketing", desc: "Seismic strengthening, carbon-fiber wrapping, and foundation underpinning for aging commercial and industrial assets." },
    { title: "Corporate Facade Overhauls", desc: "Contemporary curtain walls, spider glazing, ACP sheet cladding, and energy-conserving architectural louvers." },
    { title: "Commercial Interior Fit-Outs", desc: "Transforming raw tenant spaces into high-density modern workplaces with acoustic zones and active collaboration pods." },
    { title: "Heritage & Brownfield Revivals", desc: "Preserving iconic architectural aesthetics while completely upgrading internal MEP, electrical, and plumbing lifelines." },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Capability</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Renovation & <span className="text-amber-500">Structural Retrofit</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Reinvigorating existing building structures, upgrading architectural facades, and modernizing mechanical lifelines with minimal disruption to ongoing operations.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400/40 hover:shadow-md transition-all"
            >
              <div className="inline-flex p-3 rounded-xl bg-amber-50 text-amber-600 mb-4">
                <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Schedule a Structural Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">
            Our structural health assessment engineers evaluate foundation stability, load tolerances, and renovation feasibility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all font-bold"
          >
            <span>Request Structural Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ServiceSwitcher />
      </div>
    </section>
  );
}
