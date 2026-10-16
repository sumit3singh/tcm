// src/pages/About.jsx → ENTERPRISE CORPORATE ABOUT PAGE

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Trophy, Target, Heart, Wrench, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Crafting India's Future, One Landmark at a Time";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Building2, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "300+", label: "Engineers & Specialists" },
    { icon: Trophy, value: "20+", label: "Industry Accreditations" },
    { icon: Target, value: "100%", label: "On-Schedule Delivery" },
  ];

  const values = [
    { icon: Heart, title: "Integrity & Transparency", desc: "Uncompromising ethics and absolute commercial clarity in every client agreement." },
    { icon: Wrench, title: "Engineering Innovation", desc: "Employing advanced pre-cast, BIM modeling, and sustainable green construction." },
    { icon: Target, title: "Structural Excellence", desc: "Rigorous ISO-grade quality audits at every stage of design and execution." },
  ];

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
            <span>Corporate Profile</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            About <span className="text-amber-500">TCM Construction</span>
          </h1>
          <div className="flex items-center justify-center min-h-[36px] mt-3">
            <p className="text-sm sm:text-base md:text-lg font-medium text-slate-600">
              {typedText}
              <span className="inline-block w-0.5 h-4 ml-1 bg-amber-500 animate-pulse align-middle" />
            </p>
          </div>
        </motion.div>

        {/* Leadership & Story Section */}
        <div className="grid gap-8 mb-16 lg:gap-12 lg:mb-20 md:grid-cols-2 items-center">
          
          {/* Executive Leadership Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative p-7 sm:p-9 border border-slate-200/80 shadow-md bg-white rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2647] to-[#144272] text-[#F9A826] shadow-sm flex items-center justify-center font-black text-xl">
                  PA
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Prop. Anuj</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Founder & Managing Director</p>
                </div>
              </div>
              <blockquote className="text-sm sm:text-base leading-relaxed text-slate-600 italic border-l-2 border-amber-500 pl-4 my-4">
                "Every great structure begins with a vision of enduring strength. At TCM, we don't just assemble raw materials — we build enduring trust, industrial strength, and modern architectural legacies."
              </blockquote>
              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-slate-500 font-medium border-t border-slate-100">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Gurugram Headquarters</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> ISO Certified Standards</span>
              </div>
            </div>
          </motion.div>

          {/* Mission & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 md:order-2"
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Pioneering Modern Infrastructure Across India
            </h2>
            <p>
              Headquartered in <strong className="text-slate-900">Gurugram, Haryana</strong>, TCM Construction Pvt. Ltd. has established itself as an authoritative leader across commercial, civil, and residential construction verticals.
            </p>
            <p>
              Having executed over <strong className="text-amber-600 font-semibold">500+ projects</strong> ranging from corporate campuses and logistics hubs to luxury residences, we integrate engineering precision with strict adherence to timelines and safety protocols.
            </p>
            <p className="font-medium text-slate-800">
              Our multidisciplinary team delivers turnkey engineering, procurement, and construction (EPC) solutions tailored to meet global benchmarks.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-16 sm:gap-6 sm:grid-cols-4 lg:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 text-center bg-white border border-slate-200/80 shadow-xs rounded-xl hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 text-amber-500" />
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <p className="mt-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core <span className="text-amber-500">Operating Values</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              The foundational principles guiding every architectural decision and on-site operation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-amber-400/40 hover:shadow-md transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-amber-500/10 text-amber-600 mb-4">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{value.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Partner with a Proven Construction Leader
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            Consult with our engineering directors today to discuss timelines, specifications, and commercial estimates for your upcoming project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-slate-950 shadow-md hover:from-[#ffb339] hover:to-[#ff8a3d] transition-all"
          >
            <span>Request Project Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}