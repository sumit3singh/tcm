// src/components/ServiceSwitcher.jsx → ENTERPRISE SERVICE SWITCHER

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, Home, Factory, Hammer, FileText, HardHat, ArrowRight 
} from "lucide-react";

const allServices = [
  { icon: Building2, title: "Commercial", link: "/services/commercial", color: "from-amber-500 to-amber-600" },
  { icon: Home, title: "Residential", link: "/services/residential", color: "from-blue-600 to-blue-700" },
  { icon: Factory, title: "Industrial", link: "/services/industrial", color: "from-slate-800 to-slate-950" },
  { icon: Hammer, title: "Renovation", link: "/services/renovation", color: "from-amber-600 to-amber-700" },
  { icon: FileText, title: "Design & Build", link: "/services/design-build", color: "from-blue-500 to-indigo-600" },
  { icon: HardHat, title: "Civil Engineering", link: "/services/civil", color: "from-slate-900 to-blue-950" },
];

export default function ServiceSwitcher() {
  const location = useLocation();
  const currentPath = location.pathname;

  const otherServices = allServices.filter(s => s.link !== currentPath);

  return (
    <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-8 text-xl sm:text-2xl font-extrabold text-center text-slate-900 tracking-tight">
          Explore Our Other <span className="text-amber-500">Service Domains</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {otherServices.map((service, i) => (
            <motion.div
              key={service.link}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.link}
                className="block h-full p-5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-amber-400/50 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${service.color} text-white shadow-xs group-hover:scale-105 transition-transform`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
