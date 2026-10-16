// src/pages/services/Industrial.jsx → ENTERPRISE INDUSTRIAL INFRASTRUCTURE

import React from "react";
import { motion } from "framer-motion";
import { Factory, Truck, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function Industrial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-0 w-80 h-80 bg-slate-800/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-slate-800/10 border border-slate-700/20 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Specialized Capability</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Industrial <span className="text-amber-500">Infrastructure</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Engineered warehousing hubs, manufacturing manufacturing plants, cold chain facilities, and logistics centers built for continuous heavy-duty industrial productivity.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 mb-16">
          {[
            { icon: Factory, val: "80+", label: "Plants Delivered" },
            { icon: Truck, val: "2M+", label: "Sq Ft Warehousing" },
            { icon: ShieldCheck, val: "ISO 9001", label: "Quality Certified" },
            { icon: Zap, val: "Heavy Load", label: "Flooring Standards" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 text-center bg-white border border-slate-200/80 shadow-xs rounded-xl"
            >
              <item.icon className="mx-auto mb-2 text-amber-500 w-6 h-6" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{item.val}</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Standards List */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Industrial Engineering Benchmarks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Heavy-duty laser screed industrial flooring with FM2 / Superflat tolerance",
              "Pre-Engineered Building (PEB) design with high clear heights and wide clear spans",
              "Comprehensive hazardous materials containment & certified industrial drainage",
              "Automated overhead crane gantries and integrated dock-leveler setups",
              "Full compliance with National Building Code (NBC) & factory inspectorate norms",
              "Dedicated substation, backup DG synchronization, and high-voltage supply lines"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Establish Your Industrial Facility
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">
            Consult our civil and industrial plant engineers for turnkey site planning and construction timelines.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all font-bold"
          >
            <span>Consult Industrial Division</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ServiceSwitcher />
      </div>
    </section>
  );
}
