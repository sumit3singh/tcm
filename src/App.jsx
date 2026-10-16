// src/App.jsx → ENTERPRISE APPLICATION ARCHITECTURE

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load all pages for high performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

// Service Detail Pages
const Commercial = lazy(() => import("./pages/services/Commercial"));
const Residential = lazy(() => import("./pages/services/Residential"));
const Industrial = lazy(() => import("./pages/services/Industrial"));
const Renovation = lazy(() => import("./pages/services/Renovation"));
const DesignBuild = lazy(() => import("./pages/services/DesignBuild"));
const Civil = lazy(() => import("./pages/services/Civil"));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
        
        <Navbar />

        <main className="flex-1">
          <Suspense
            fallback={
              <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
                <div className="text-center p-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">TCM</span>
                    <span className="text-2xl font-bold tracking-tight text-amber-500">CONSTRUCTION</span>
                  </div>
                  <div className="w-32 h-1 mx-auto bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-amber-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              {/* Service Detail Pages */}
              <Route path="/services/commercial" element={<Commercial />} />
              <Route path="/services/residential" element={<Residential />} />
              <Route path="/services/industrial" element={<Industrial />} />
              <Route path="/services/renovation" element={<Renovation />} />
              <Route path="/services/design-build" element={<DesignBuild />} />
              <Route path="/services/civil" element={<Civil />} />

              {/* Redirect legacy /tcm subpath to root */}
              <Route path="/tcm" element={<Navigate to="/" replace />} />
              <Route path="/tcm/*" element={<Navigate to="/" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}