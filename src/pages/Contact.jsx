// src/pages/Contact.jsx → ENTERPRISE CONTACT & INQUIRY PAGE

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    projectType: "Commercial",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", mobile: "", email: "", projectType: "Commercial", message: "" });
    }, 4000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 max-w-7xl mx-auto">



        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-start">

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-6">
              <Send className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Project Inquiry & RFP Submission
              </h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you. Our technical estimation division will review your project brief and connect with you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                      Project Classification
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 text-slate-800 bg-white"
                    >
                      <option value="Commercial">Commercial Tower / Complex</option>
                      <option value="Residential">Residential Villa / High-Rise</option>
                      <option value="Industrial">Industrial Plant / Warehouse</option>
                      <option value="Civil">Civil / Infrastructure Work</option>
                      <option value="Renovation">Renovation & Structural Retrofit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Project Brief & Location Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe estimated plot size, location, planned built-up area, and target completion schedule..."
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-amber-500 text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-900 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Office */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Corporate Headquarters</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Killa No. 144, Bhora Kalan, Pataudi Road,<br />
                    Gurugram, Haryana 122413, India
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone */}
            <a
              href="tel:+918685882050"
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400/50 hover:shadow-md transition-all flex items-start gap-3.5 group block"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Direct Project Desk</h3>
                <p className="text-base sm:text-lg font-bold text-amber-600 mt-0.5">
                  +91 86858 82050
                </p>
                <p className="text-[11px] text-slate-400">Monday to Saturday • 9:00 AM – 6:30 PM IST</p>
              </div>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:info@tcmconstructionspvtltd.com"
              className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-amber-400/50 hover:shadow-md transition-all flex items-start gap-3.5 group block"
            >
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Commercial Correspondence</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-700 mt-0.5 break-all">
                  info@tcmconstructionspvtltd.com
                </p>
              </div>
            </a>

            {/* Operating Credentials */}
            <div className="p-5 bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] text-white rounded-2xl border border-[#2C74B3]/30 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#F9A826]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9A826]">Statutory Certifications</h4>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Registered Private Limited Enterprise with full GST, PF, ESI compliance and structural engineering licensing.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
