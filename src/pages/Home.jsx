// src/pages/Home.jsx → ENTERPRISE-GRADE RESPONSIVE 3D HERO (NO GAP + PROFESSIONAL TYPOGRAPHY)

import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Instances,
  Instance,
  OrbitControls,
  Sparkles,
  ContactShadows,
  Environment,
  Sky,
  PerspectiveCamera,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Bot, Send, X, ShieldCheck, Award } from "lucide-react";

/* ========================
   Floating CTA Buttons (Responsive)
   ======================== */
function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed z-40 flex flex-col gap-2.5 left-3 sm:left-5 bottom-4 sm:bottom-6"
    >
      <a
        href="https://wa.me/918685882050"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-lg hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href="tel:+918685882050"
        className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 bg-amber-500 hover:bg-amber-400 rounded-full shadow-lg hover:scale-110"
        aria-label="Direct Phone Call"
      >
        <Phone className="text-slate-950 w-5 h-5 sm:w-5 sm:h-5" />
      </a>
    </motion.div>
  );
}

/* ========================
   Compact Chatbot (Responsive)
   ======================== */
const Chatbot = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to TCM Construction Pvt. Ltd. How can we assist with your development project?", from: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { text: input, from: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { text: "Thank you for reaching out! A project manager will review your query and contact you promptly.", from: "bot" },
      ]);
    }, 900);
  };

  return (
    <div className="fixed z-40 right-3 sm:right-5 bottom-4 sm:bottom-6">
      {!open ? (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="w-12 h-12 sm:w-13 sm:h-13 bg-gradient-to-br from-[#0A2647] to-[#144272] border border-[#2C74B3]/40 rounded-full shadow-xl flex items-center justify-center text-[#F9A826] hover:scale-105 transition-all"
          aria-label="Open Project Assistant Chat"
        >
          <Bot className="w-6 h-6 text-[#F9A826]" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className="w-[calc(100vw-24px)] max-w-sm h-[400px] sm:h-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
        >
          <div className="px-4 py-3 bg-gradient-to-r from-[#0A2647] to-[#144272] text-white flex justify-between items-center border-b border-[#0A2647]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">TCM Project Advisory</div>
                <div className="text-[10px] text-slate-300">Online • Typically replies instantly</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs sm:text-sm bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-amber-500 text-slate-950 font-medium"
                      : "bg-white text-slate-800 border border-slate-200 shadow-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-3 bg-white border-t border-slate-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Inquire about residential, commercial..."
              className="flex-1 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-amber-500 text-xs sm:text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-2 rounded-lg transition font-semibold"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
});

/* ========================
   Instanced 3D Skyline
   ======================== */
const buildings = [...Array(90)].map(() => ({
  position: [(Math.random() - 0.5) * 90, 0, -Math.random() * 80 - 10],
  scale: [1 + Math.random() * 2.5, 2 + Math.random() * 12, 1 + Math.random() * 2.5],
  color: ["#072A4E", "#0A3A63", "#0f3b5e", "#2C74B3"][Math.floor(Math.random() * 4)],
}));

function Skyline() {
  return (
    <Instances limit={buildings.length}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial roughness={0.15} metalness={0.8} />

      {buildings.map((data, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.4}>
          <Instance position={data.position} scale={data.scale} color={data.color}>
            <mesh>
              <boxGeometry args={[1.02, 1.02, 1.02]} />
              <meshStandardMaterial emissive={data.color} emissiveIntensity={0.25} metalness={0.9} roughness={0.1} />
            </mesh>
          </Instance>
        </Float>
      ))}
    </Instances>
  );
}

/* ========================
   Animated Neon Grid
   ======================== */
function NeonGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.1) * 3;
    }
  });

  return (
    <group ref={gridRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial color="#020d1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {[...Array(50)].map((_, i) => {
        const pos = i * 5 - 125;
        return (
          <mesh key={`h${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[pos, -1.98, 0]}>
            <planeGeometry args={[1.5, 300]} />
            <meshBasicMaterial color="#39A0ED" transparent opacity={0.18} blending={2} />
          </mesh>
        );
      })}
      {[...Array(50)].map((_, i) => {
        const pos = i * 5 - 125;
        return (
          <mesh key={`v${i}`} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, -1.98, pos]}>
            <planeGeometry args={[1.5, 300]} />
            <meshBasicMaterial color="#39A0ED" transparent opacity={0.15} blending={2} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ========================
   Particle Field
   ======================== */
function ParticleField() {
  const points = useMemo(() => {
    const p = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      p[i * 3] = (Math.random() - 0.5) * 200;
      p[i * 3 + 1] = Math.random() * 40 - 10;
      p[i * 3 + 2] = -Math.random() * 150;
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={600} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={1} color="#F59E0B" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

/* ========================
   Main 3D Scene
   ======================== */
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 10, 35]} fov={60} />
      <Sky sunPosition={[100, 20, 100]} inclination={0.4} azimuth={0.25} />
      <fog attach="fog" args={["#020d1a", 30, 140]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[15, 25, 10]} intensity={2.2} castShadow shadow-mapSize={2048} />
      <NeonGrid />
      <Skyline />
      <ParticleField />
      <Sparkles count={120} scale={[250, 60, 250]} size={4} speed={0.5} opacity={0.7} color="#39A0ED" />
      <Sparkles count={40} scale={[200, 40, 200]} size={6} speed={0.3} opacity={0.6} color="#F59E0B" />
      <ContactShadows position={[0, -2.1, 0]} opacity={0.5} scale={120} blur={2.8} far={25} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  );
}

/* ========================
   Hero Page (Enterprise-Grade Corporate Design)
   ======================== */
export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building India's Most Iconic Structures";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020d1a] to-[#04182b] flex items-center justify-center">
      {/* 3D Background – Starts from the very top with ZERO gap */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Clean Subtle Gradient for text readability without darkening the sky */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

      {/* Hero Content – Balanced, Professional Typography */}
      <div className="relative z-20 w-full max-w-5xl px-4 pt-24 pb-16 mx-auto text-center sm:px-6 sm:pt-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto"
        >
          {/* Architectural Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-6 rounded-full bg-[#0A2647]/85 border border-[#144272] backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#F9A826] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#F9A826]">
              Premier Engineering & Infrastructure
            </span>
          </div>

          {/* Clean Enterprise Heading */}
          <h1 className="text-3xl font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span>TCM </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              CONSTRUCTION
            </span>
          </h1>

          {/* Typing Tagline */}
          <div className="flex items-center justify-center min-h-[44px] sm:min-h-[52px] mt-3 sm:mt-4">
            <h2 className="text-base font-normal tracking-wide text-slate-300 xs:text-lg sm:text-xl md:text-2xl max-w-2xl">
              {typedText}
              <span className="inline-block w-0.5 h-4 sm:h-5 ml-1 bg-amber-400 animate-pulse align-middle" />
            </h2>
          </div>

          {/* Subtext info */}
          <p className="max-w-2xl mx-auto mt-2 text-xs font-normal text-slate-400 sm:text-sm">
            Prop. Anuj • 500+ Landmark Projects Delivered Across India • Gurugram, Haryana
          </p>

          {/* Corporate CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 mt-8 sm:flex-row sm:gap-4 sm:mt-10">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-gradient-to-r from-[#F9A826] to-[#FF7A2D] text-slate-900 hover:from-[#ffb43b] hover:to-[#ff8c42] transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-xl bg-[#0A2647]/90 hover:bg-[#144272] text-white border border-[#2C74B3]/40 backdrop-blur-md transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Free Consultation</span>
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 gap-4 pt-8 mt-12 border-t sm:grid-cols-4 sm:gap-6 sm:mt-16 border-slate-800/70">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "20+", label: "Years Experience" },
              { value: "50+", label: "Cities Transformed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-xs font-medium tracking-wider text-slate-400 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <FloatingActions />
      <Chatbot />
    </section>
  );
}