// src/pages/Projects.jsx → ENTERPRISE ARCHITECTURAL PORTFOLIO

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Home, Factory, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const allProjects = [
  {
    id: 1,
    name: "Skyline Corporate Tower",
    type: "commercial",
    categoryLabel: "Commercial Tower",
    location: "Golf Course Extn, Gurugram",
    img: "https://images.unsplash.com/photo-1486401897504-2b8123ec0d8e?w=800&q=80&fit=crop"
  },
  {
    id: 2,
    name: "The Palm Luxury Residency",
    type: "residential",
    categoryLabel: "Luxury Residential",
    location: "Pataudi Road, Gurugram",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&fit=crop"
  },
  {
    id: 3,
    name: "Metro Heavy Logistics Hub",
    type: "industrial",
    categoryLabel: "Industrial Facility",
    location: "IMT Manesar, Haryana",
    img: "https://images.unsplash.com/photo-1581092580490-4d66393df8c3?w=800&q=80&fit=crop"
  },
  {
    id: 4,
    name: "Grand Heritage Estates",
    type: "residential",
    categoryLabel: "Gated Community",
    location: "Sector 65, Gurugram",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop"
  },
  {
    id: 5,
    name: "TechOne IT Innovation Center",
    type: "commercial",
    categoryLabel: "Commercial IT Park",
    location: "Cyber City, Gurugram",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop"
  },
  {
    id: 6,
    name: "Green Valley Cold Storage & Warehousing",
    type: "industrial",
    categoryLabel: "Automated Logistics",
    location: "Bhiwadi Industrial Zone",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop"
  },
  {
    id: 7,
    name: "Elite Corporate Commercial Plaza",
    type: "commercial",
    categoryLabel: "Retail & Offices",
    location: "Sector 44, Gurugram",
    img: "https://images.unsplash.com/photo-1543782249-3f02e6b9f8c3?w=800&q=80&fit=crop"
  },
  {
    id: 8,
    name: "Sunrise Luxury Villas",
    type: "residential",
    categoryLabel: "Residential Villas",
    location: "Sohna Road, Gurugram",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&fit=crop"
  },
];

const categories = [
  { id: "all", label: "All Works", icon: Layers },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "residential", label: "Residential", icon: Home },
  { id: "industrial", label: "Industrial", icon: Factory },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Subtle Background Glows */}
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
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider">
            <span>Portfolio of Excellence</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Featured <span className="text-amber-500">Infrastructure Projects</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Showcasing over two decades of engineering milestones, from landmark corporate towers to large-scale industrial complexes.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isSelected = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  isSelected
                    ? "bg-[#0A2647] text-[#F9A826] shadow-md border border-[#0A2647]"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-amber-400/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-950/80 text-amber-400 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="text-[11px] text-slate-500">Status: Completed</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-500 transition-colors"
                    >
                      Inquire <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 text-center bg-gradient-to-br from-[#0A2647] via-[#0D315C] to-[#144272] rounded-2xl shadow-xl border border-[#2C74B3]/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Commission Your Project with TCM Construction
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            From design engineering through construction delivery, our team brings certainty to cost, schedule, and quality.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] hover:from-[#ffb339] hover:to-[#ff8a3d] text-slate-950 shadow-md transition-all"
          >
            <span>Initiate Project Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
