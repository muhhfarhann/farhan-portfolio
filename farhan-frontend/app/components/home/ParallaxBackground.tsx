'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function ParallaxBackground() {
  // 1. SCROLL TRACKING
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // 2. MOUSE TRACKING (Fisika 4D J.A.R.V.I.S)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // KALKULASI LAPISAN HUD (Heads Up Display)
  // Layer belakang (Data dan teks) - Gerakan lambat
  const hudBackX = useTransform(smoothX, [-1, 1], ['-2%', '2%']);
  const hudBackY = useTransform(smoothY, [-1, 1], ['-2%', '2%']);

  // Layer Tengah (Arc Reactor Raksasa) - Gerakan menengah
  const reactorX = useTransform(smoothX, [-1, 1], ['-5%', '5%']);
  const reactorY = useTransform(smoothY, [-1, 1], ['-5%', '5%']);

  // Layer Depan (Percikan Api Thruster) - Gerakan sangat cepat berlawanan arah
  const sparksX = useTransform(smoothX, [-1, 1], ['15%', '-15%']);
  const sparksY = useTransform(smoothY, [-1, 1], ['15%', '-15%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-50 overflow-hidden pointer-events-none bg-[#050505]">
      
      {/* Grid Pattern Khas Iron Man UI */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#00f0ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div style={{ scale, y: scrollY }} className="absolute inset-0 w-full h-full flex items-center justify-center">

        {/* LAYER 1: TEKS DATA J.A.R.V.I.S & TARGETING SYSTEM */}
        <motion.div style={{ x: hudBackX, y: hudBackY }} className="absolute inset-0 w-full h-full font-mono text-cyan-500/30 text-xs sm:text-sm overflow-hidden">
          <div className="absolute top-[15%] left-[5%] animate-pulse">
            SYS.ONLINE // MARK.LXXXV <br/>
            POWER: <span className="text-red-500/50">STABLE</span>
          </div>
          <div className="absolute top-[75%] right-[5%] text-right tracking-widest">
            ARC REACTOR CORE<br/>
            CAPACITY: 400%
          </div>
          {/* Garis Crosshair HUD */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] border border-cyan-500/10 rounded-full flex items-center justify-center">
            <div className="w-full h-[1px] bg-cyan-500/10 absolute"></div>
            <div className="h-full w-[1px] bg-cyan-500/10 absolute"></div>
          </div>
        </motion.div>

        {/* LAYER 2: GIANT ARC REACTOR (Animasi Berputar Otomatis) */}
        <motion.div style={{ x: reactorX, y: reactorY }} className="relative flex items-center justify-center w-[30rem] h-[30rem] sm:w-[45rem] sm:h-[45rem] opacity-40 dark:opacity-50">
          
          {/* Cahaya Pendar Arc Reactor */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-[100px]"></div>
          
          {/* Cincin Luar (Berputar searah jarum jam) */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} 
                      className="absolute w-[80%] h-[80%] rounded-full border-[2px] border-dashed border-cyan-400/40" />
          
          {/* Cincin Tengah (Berputar berlawanan arah) */}
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                      className="absolute w-[60%] h-[60%] rounded-full border-[8px] border-double border-cyan-300/30" />
          
          {/* Inti Reaktor (Glow Effect) */}
          <div className="absolute w-[25%] h-[25%] bg-cyan-300/30 rounded-full blur-[15px] border-[4px] border-cyan-100/70 shadow-[0_0_80px_#00f0ff]" />
          <div className="absolute w-[8%] h-[8%] bg-white rounded-full blur-[4px] shadow-[0_0_30px_#fff]" />

          {/* Aksentuasi Merah/Emas Iron Man yang berputar pelan */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
                      className="absolute w-[95%] h-[95%] rounded-full border border-red-500/20 border-t-amber-500/40" />
        </motion.div>

        {/* LAYER 3: FOREGROUND SPARKS (Percikan Api Thruster yang nge-blur) */}
        <motion.div style={{ x: sparksX, y: sparksY }} className="absolute inset-0 w-full h-full">
          <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} 
                      className="absolute top-[25%] left-[20%] w-3 h-16 bg-red-500 rounded-full blur-[10px] rotate-45" />
          <motion.div animate={{ y: [0, -40, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} 
                      className="absolute bottom-[20%] right-[25%] w-4 h-24 bg-amber-400 rounded-full blur-[12px] -rotate-12" />
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} 
                      className="absolute top-[60%] left-[15%] w-10 h-10 bg-cyan-300 rounded-full blur-[20px]" />
        </motion.div>

      </motion.div>

      {/* LAPISAN KACA GLOBAL: Menjaga kontras teks agar tetap elegan dan terbaca */}
      <div className="absolute inset-0 bg-slate-50/70 dark:bg-slate-950/70 backdrop-blur-[5px] transition-colors duration-700" />
    </div>
  );
}