'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function ParallaxBackground() {
  // 1. SCROLL TRACKING (Kamera maju ke depan menembus ruangan)
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // 2. MOUSE TRACKING (Dimensi ke-4 / Interaksi Real-time)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fisika Spring agar pergerakan mouse terasa punya bobot dan sangat mulus (tidak kaku)
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Kalkulasi Layer 1: Background sangat jauh (bergerak sedikit dan lambat)
  const bgX = useTransform(smoothMouseX, [-1, 1], ['-2%', '2%']);
  const bgY = useTransform(smoothMouseY, [-1, 1], ['-2%', '2%']);

  // Kalkulasi Layer 3: Elemen Foreground (Kaca/Debu/Cahaya blur yang sangat dekat dengan layar, bergerak cepat berlawanan arah)
  const fgX = useTransform(smoothMouseX, [-1, 1], ['8%', '-8%']);
  const fgY = useTransform(smoothMouseY, [-1, 1], ['8%', '-8%']);

  // Deteksi pergerakan Mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalisasi posisi mouse dari ujung kiri (-1) ke ujung kanan (1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-50 bg-[#0a0f1a] overflow-hidden pointer-events-none">
      
      {/* KONTROL UTAMA: Menggabungkan Scroll dan Mouse Movement */}
      <motion.div style={{ scale, y: scrollY }} className="absolute inset-0 w-full h-full origin-bottom">
        
        {/* LAYER 1: GAMBAR BACKGROUND RUANG IT (Gelap, Misterius, Realistis) */}
        <motion.div 
          style={{ x: bgX, y: bgY }}
          className="absolute inset-[-5%] w-[110%] h-[110%] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-30 dark:opacity-20"
        />

        {/* LAYER 2: AMBIENT GLOW (Cahaya Ruangan yang memberikan nyawa/atmosfer) */}
        <motion.div 
          style={{ x: useTransform(smoothMouseX, [-1, 1], ['-4%', '4%']), y: useTransform(smoothMouseY, [-1, 1], ['-4%', '4%']) }}
          className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[130px] mix-blend-screen"
        />
        <motion.div 
          style={{ x: useTransform(smoothMouseX, [-1, 1], ['4%', '-4%']), y: useTransform(smoothMouseY, [-1, 1], ['4%', '-4%']) }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] mix-blend-screen"
        />

        {/* LAYER 3: OUT OF FOCUS FOREGROUND (Kunci Realistis - Efek Lensa) */}
        {/* Bola-bola blur ini seakan melayang beberapa sentimeter tepat di depan matamu */}
        <motion.div style={{ x: fgX, y: fgY }} className="absolute inset-0 w-full h-full">
            <div className="absolute top-[15%] left-[8%] w-32 h-32 bg-sky-400/15 rounded-full blur-[40px]" />
            <div className="absolute bottom-[25%] right-[5%] w-56 h-56 bg-emerald-400/10 rounded-full blur-[60px]" />
            <div className="absolute top-[60%] left-[85%] w-24 h-24 bg-blue-500/20 rounded-full blur-[50px]" />
        </motion.div>

      </motion.div>

      {/* LAPISAN FROSTED GLASS GLOBAL: Agar teks di websitemu tetap sangat kontras dan mudah dibaca */}
      <div className="absolute inset-0 bg-slate-50/60 dark:bg-slate-950/80 backdrop-blur-[5px] transition-colors duration-700" />
    </div>
  );
}