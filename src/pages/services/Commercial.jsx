// src/pages/services/Commercial.jsx → ENTERPRISE COMMERCIAL CONSTRUCTION

import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceSwitcher from "../../components/ServiceSwitcher";

export default function Commercial() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Glows */}
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
            Commercial <span className="text-amber-500">Construction</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            World-class corporate towers, shopping complexes, and mixed-use commercial campuses engineered for occupant efficiency and long-term asset value.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 mb-16">
          {[ 
            { icon: Building2, val: "150+", label: "Commercial Towers" },
            { icon: Award,     val: "42",   label: "Industry Awards" },
            { icon: Clock,     val: "98%",  label: "On-Time Completion" },
            { icon: Users,     val: "50M+", label: "Sq Ft Developed" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 text-center bg-white border border-slate-200/80 shadow-xs rounded-xl"
            >
              <s.icon className="mx-auto mb-2 text-amber-500 w-6 h-6" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{s.val}</div>
              <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Features & Showcase */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Technical Specifications & Commercial Highlights
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We leverage advanced BIM coordinate systems, post-tensioned concrete technology, and energy-efficient building envelopes.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "LEED & IGBC Gold/Platinum Certified Green Building Construction",
                "Advanced HVAC, Automated Fire Suppression & BMS Integration",
                "High-Speed Passenger & Freight Elevator Core Engineering",
                "Seismic Zone IV/V Compliant Structural Frameworks",
                "Stringent On-Site HSE (Health, Safety, Environment) Protocols",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md h-64 sm:h-80 bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1486401897504-2b8123ec0d8e?w=1000&q=80&fit=crop"
              alt="Commercial Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-10 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30 mb-16">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Planning a Commercial Venture?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto mb-6">
            Get an in-depth structural feasibility report and BOQ projection for your commercial site.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all font-bold"
          >
            <span>Discuss Commercial Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Other Services Switcher */}
        <ServiceSwitcher />

      </div>
    </section>
  );
}
