'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function ParallaxBackground() {
  // 1. SCROLL TRACKING (Kamera maju ke depan)
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  // 2. MOUSE TRACKING (Interaksi 4D Real-time)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Fisika pergerakan (Makin tinggi mass, makin berat & mulus pergerakannya)
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // KALKULASI LAPISAN (Semakin dekat dengan layar, semakin cepat bergeser)
  const skyX = useTransform(smoothMouseX, [-1, 1], ['-1%', '1%']);
  const skyY = useTransform(smoothMouseY, [-1, 1], ['-1%', '1%']);

  const backX = useTransform(smoothMouseX, [-1, 1], ['-3%', '3%']);
  const backY = useTransform(smoothMouseY, [-1, 1], ['-3%', '3%']);

  const midX = useTransform(smoothMouseX, [-1, 1], ['-7%', '7%']);
  const midY = useTransform(smoothMouseY, [-1, 1], ['-7%', '7%']);

  const frontX = useTransform(smoothMouseX, [-1, 1], ['15%', '-15%']);
  const frontY = useTransform(smoothMouseY, [-1, 1], ['15%', '-15%']);

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
    <div className="fixed inset-0 w-screen h-screen -z-50 overflow-hidden pointer-events-none bg-gradient-to-b from-emerald-100 to-emerald-300 dark:from-slate-900 dark:to-emerald-950">

      <motion.div style={{ scale, y: scrollY }} className="absolute inset-0 w-full h-full origin-bottom select-none">

        {/* LAYER 0: MATAHARI / CAHAYA ATMOSFER */}
        <motion.div style={{ x: skyX, y: skyY }} className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-yellow-400/50 dark:bg-emerald-500/20 rounded-full blur-[60px]" />

        {/* LAYER 1: GUNUNG & POHON JAUH (Tipis & Transparan) */}
        <motion.div style={{ x: backX, y: backY }} className="absolute top-[30%] w-full flex justify-between px-10 grayscale brightness-0 opacity-10 dark:opacity-20 text-[10rem] sm:text-[15rem] leading-none">
          <span className="mt-20">🌲</span>
          <span>⛰️</span>
          <span className="mt-32">🌲</span>
        </motion.div>

        {/* LAYER 2: SILUET DINOSAURUS DI TENGAH HUTAN */}
        <motion.div style={{ x: midX, y: midY }} className="absolute top-[45%] w-full flex justify-around grayscale brightness-0 opacity-20 dark:opacity-40 text-[12rem] sm:text-[18rem] leading-none">
          <span className="-scale-x-100 drop-shadow-2xl">🦕</span>
          <span className="mt-32 text-[8rem] sm:text-[12rem] drop-shadow-2xl">🦖</span>
          <span className="mt-10 drop-shadow-2xl">🦕</span>
        </motion.div>

        {/* LAYER 2.5: PTERODACTYL TERBANG DI LANGIT */}
        <motion.div style={{ x: midX, y: midY }} className="absolute top-[15%] right-[15%] flex gap-8 grayscale brightness-0 opacity-20 dark:opacity-40 text-[4rem] sm:text-[6rem]">
          <span>🦅</span>
          <span className="mt-10 -scale-x-100">🦅</span>
        </motion.div>

        {/* LAYER 3: DAUN FOREGROUND BLUR (Efek Kedalaman Lensa Kamera) */}
        {/* Elemen ini bergerak paling cepat berlawanan arah mouse */}
        <motion.div style={{ x: frontX, y: frontY }} className="absolute -bottom-[10%] -left-[5%] w-[110%] flex justify-between grayscale brightness-0 opacity-40 dark:opacity-60 blur-[10px] text-[20rem] sm:text-[30rem] leading-none">
          <span className="-rotate-45 -ml-10">🌿</span>
          <span className="rotate-12 mt-32 text-[15rem] sm:text-[25rem]">🍃</span>
          <span className="rotate-45 -mr-10">🌿</span>
        </motion.div>

      </motion.div>

      {/* LAPISAN KACA GLOBAL: Meredam kontras agar teks UI portofoliomu tetap sangat jelas dibaca */}
      <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/70 backdrop-blur-[6px] transition-colors duration-700" />
    </div>
  );
}