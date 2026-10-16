// src/pages/services/DesignBuild.jsx → ENTERPRISE INTEGRATED DESIGN & BUILD

import React from "react";
import { motion } from "framer-motion";
import { FileText, Palette, Ruler, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function DesignBuild() {
  const steps = [
    { step: "01", icon: Palette, title: "Architectural Concept", desc: "Feasibility studies, master zoning, 3D parametric renderings, and client spatial discovery." },
    { step: "02", icon: Ruler, title: "Engineering & BIM", desc: "Detailed structural calculations, MEP clash detection, and digital BIM level 300 coordination." },
    { step: "03", icon: HardHat, title: "Turnkey EPC Execution", desc: "Integrated materials procurement, on-site general contracting, and continuous quality audits." },
    { step: "04", icon: FileText, title: "Handover & Commissioning", desc: "As-built documentation, statutory completion approvals, and zero-defect building commissioning." },
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
            Integrated <span className="text-blue-600">Design & Build</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            A single point of contractual responsibility. Combining creative architectural vision, mechanical engineering, and on-site construction to shorten delivery schedules and lower overall lifecycle cost.
          </p>
        </motion.div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-400/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-slate-300 tracking-wider">{item.step}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Accelerate Your Project Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">
            Design-build methodology reduces delivery timelines by up to 33% compared to conventional design-bid-build workflows.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all font-bold"
          >
            <span>Initiate Turnkey Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ServiceSwitcher />
      </div>
    </section>
  );
}
