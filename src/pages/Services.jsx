// src/pages/Services.jsx → ENTERPRISE SERVICES OVERVIEW PAGE

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Home, 
  Factory, 
  Hammer, 
  FileText, 
  HardHat,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Grade-A corporate headquarters, commercial business hubs, and retail spaces engineered for operational efficiency and sustainability.",
    accent: "from-amber-500 to-amber-600",
    badge: "Corporate & Retail",
    link: "/services/commercial"
  },
  {
    icon: Home,
    title: "Residential Developments",
    desc: "Architecturally distinctive residences, high-rise luxury towers, and gated communities delivering premium lifestyle living.",
    accent: "from-blue-600 to-blue-700",
    badge: "Villas & High-Rise",
    link: "/services/residential"
  },
  {
    icon: Factory,
    title: "Industrial Infrastructure",
    desc: "Heavy engineering plants, automated warehousing, and distribution centers built for heavy load capacity and logistical speed.",
    accent: "from-slate-800 to-slate-950",
    badge: "Warehousing & Plants",
    link: "/services/industrial"
  },
  {
    icon: Hammer,
    title: "Renovation & Adaptive Reuse",
    desc: "Modern structural reinforcement, exterior facade overhauls, and heritage revivals executed with zero operational downtime.",
    accent: "from-amber-600 to-amber-700",
    badge: "Structural Retrofit",
    link: "/services/renovation"
  },
  {
    icon: FileText,
    title: "Integrated Design & Build",
    desc: "Single-source architectural modeling, BIM coordination, engineering design, and turnkey general contracting.",
    accent: "from-blue-500 to-indigo-600",
    badge: "Turnkey EPC",
    link: "/services/design-build"
  },
  {
    icon: HardHat,
    title: "Civil & Heavy Engineering",
    desc: "Highways, elevated corridors, foundation piles, and mass civic infrastructure constructed under rigorous safety standards.",
    accent: "from-slate-900 to-blue-950",
    badge: "Civil Works",
    link: "/services/civil"
  }
];

export default function Services() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Engineering & <span className="text-amber-500">Construction Services</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Comprehensive general contracting, civil engineering, and specialized development services executed to the highest quality benchmarks.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400/50 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-sm group-hover:scale-105 transition-transform`}>
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-500 transition-colors"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Have a Technical Requirement or RFP?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            Our engineering estimation team provides full bill-of-quantities (BOQ) review and structural consultations within 24-48 business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all"
            >
              <span>Submit Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all"
            >
              <span>View Past Projects</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}