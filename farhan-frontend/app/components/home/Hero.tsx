"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Parameter {
  index: number;
  text: string[];
}

export default function Hero({ index, text }: Parameter) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 320, damping: 18, mass: 0.6 });
  const springY = useSpring(dragY, { stiffness: 320, damping: 18, mass: 0.6 });
  const rotateX = useTransform(springY, [-150, 150], [20, -20]);
  const rotateY = useTransform(springX, [-150, 150], [-20, 20]);
  const stringPath = useTransform([springX, springY], (latest: number[]) => {
    const x = latest[0];
    const y = latest[1];
    const controlX = 100 + x * 0.4;
    const controlY = 40 + Math.abs(y) * 0.4;
    return `M100 0 Q ${controlX} ${controlY}, ${100 + x} ${95 + y}`;
  });

  return (
    <section className="hero w-full pt-32 pb-20" id="beranda">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse sm:flex-row flex-wrap items-center gap-y-12">
          
          {/* LEFT SIDE */}
          <div className="relative w-full sm:w-1/2 z-10 px-4">
            <h1 className="text-base font-medium text-slate-500 dark:text-slate-400 mb-2 tracking-wide">
              Welcome there.., I&lsquo;m
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              Muhammad Farhan
            </h2>
            
            {/* PERBAIKAN: Kotak teks mengetik dipertegas warnanya */}
            <div className="relative mb-8 overflow-hidden h-[40px] text-sm font-semibold flex items-center bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800/50 py-2 px-5 rounded-full w-fit">
              <AnimatePresence mode="wait">
                <motion.span
                  key={text[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  // Warna teks ditegaskan di sini
                  className="text-sky-700 dark:text-sky-300 block"
                >
                  {text[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <a href="#kontak" className="inline-block px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-full transition duration-300 shadow-lg shadow-sky-600/30">
              Contact Me
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-10 sm:mt-0">
            <motion.svg className="absolute top-0" width="200" height="200" viewBox="0 0 200 200">
              <motion.path d={stringPath} stroke="#64748b" strokeWidth="3" fill="transparent" strokeLinecap="round" />
            </motion.svg>

            <motion.div
              ref={cardRef}
              drag
              dragMomentum={false}
              style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: "preserve-3d" }}
              onDrag={(event, info) => { dragX.set(info.offset.x); dragY.set(info.offset.y); }}
              onDragEnd={() => { dragX.set(0); dragY.set(0); }}
              whileHover={{ scale: 1.05 }}
              className="relative mt-16 w-64 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-2xl cursor-grab active:cursor-grabbing transition-colors"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-200 dark:bg-slate-600 rounded-full border-4 border-white dark:border-slate-800 shadow-inner"></div>

              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-sky-400 shadow-lg bg-slate-100 dark:bg-slate-700">
                <Image src="/img/911.png" alt="Profile" width={300} height={300} className="object-cover w-full h-full" />
              </div>

              <div className="text-center mt-5">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-wide">Muhammad Farhan</h3>
                <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-1">Fullstack Developer</p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-400 dark:text-slate-500 tracking-widest font-mono">
                  SINCE 2022
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}