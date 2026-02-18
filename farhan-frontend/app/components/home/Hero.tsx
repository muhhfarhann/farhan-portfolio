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

  /* =============================
     DRAG VALUES
  ============================== */

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  /* =============================
     SPRING FOLLOW (UNTUK BOUNCE)
  ============================== */

  const springX = useSpring(dragX, {
    stiffness: 320,
    damping: 18,
    mass: 0.6,
  });

  const springY = useSpring(dragY, {
    stiffness: 320,
    damping: 18,
    mass: 0.6,
  });

  /* =============================
     3D TILT (PAKAI SPRING!)
  ============================== */

  const rotateX = useTransform(springY, [-150, 150], [20, -20]);
  const rotateY = useTransform(springX, [-150, 150], [-20, 20]);

  /* =============================
     STRING IKUT SPRING
  ============================== */

  const stringPath = useTransform([springX, springY], (latest: number[]) => {
    const x = latest[0];
    const y = latest[1];

    const controlX = 100 + x * 0.4;
    const controlY = 40 + Math.abs(y) * 0.4;

    return `M100 0 Q ${controlX} ${controlY}, ${100 + x} ${95 + y}`;
  });

  /* =============================
     JSX
  ============================== */

  return (
    <section className="hero w-full">
      <div className="container-hero">
        <div className="px-10 flex flex-wrap items-center sm:w-full">
          {/* LEFT SIDE */}
          <div className="relative sm:w-1/2 self-center px-4">
            <h1 className="relative text-sm sm:text-[1rem] font-normal sm:font-semibold font-inter text-sky-950">
              Wellcome there.., I&lsquo;m
              <span className="sm:block mt-1 text-2xl sm:text-[2rem] font-semibold bg-linear-to-br from-slate-700 from-8% via-slate-300 via-2% to-slate-800 to-60% bg-clip-text text-transparent">
                Muhammad Farhan
              </span>
            </h1>
            <h2 className="relative mb-1.5 sm:my-0 text-[.75rem] sm:text-[1rem] font-light text-red-800 bg-linear-to-r from-white to-slate-500 w-[100%] sm:w-[60%] rounded-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={text[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {text[index]}
                </motion.span>
              </AnimatePresence>
            </h2>

            <button className="relative my-1 sm:my-1.5 w-[auto] p-1.5 sm:p-2.5 bg-teal-500 text-white font-normal text-[.75rem] sm:text-[.8rem] rounded-full transition duration-200 shadow-sm hover:bg-teal-700 hover:shadow-lg sm:shadow sm:shadow-slate-600 sm:hover:shadow-md cursor-pointer">
              Contact Me
            </button>

            <span className="absolute inset-0 -top-[5rem] -left-[30rem] -z-10 flex justify-center items-center">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#08BDBA"
                  d="M23.4,-40C31,-36.2,38.1,-31.2,49.8,-24.3C61.5,-17.4,77.8,-8.7,78.5,0.4C79.2,9.5,64.4,19.1,52.1,25C39.8,30.8,30.1,33,21.8,42.1C13.5,51.3,6.8,67.3,-0.1,67.5C-7,67.8,-14.1,52.2,-24.6,44.4C-35.2,36.6,-49.2,36.5,-53.8,30.4C-58.4,24.3,-53.6,12.2,-51.1,1.5C-48.6,-9.2,-48.2,-18.4,-47.6,-31.5C-47.1,-44.6,-46.2,-61.5,-38.2,-65.1C-30.2,-68.6,-15.1,-58.8,-3.6,-52.6C7.9,-46.4,15.9,-43.8,23.4,-40Z"
                  transform="translate(100 100) scale(.5)"
                />
              </svg>
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative sm:w-1/2 flex justify-center items-start px-4 mt-10">
            {/* STRING */}
            <motion.svg
              className="absolute top-0"
              width="200"
              height="200"
              viewBox="0 0 200 200"
            >
              <motion.path
                d={stringPath}
                stroke="#94a3b8"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* CARD */}
            <motion.div
              ref={cardRef}
              drag
              dragMomentum={false}
              style={{
                x: springX,
                y: springY,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onDrag={(event, info) => {
                dragX.set(info.offset.x);
                dragY.set(info.offset.y);
              }}
              onDragEnd={() => {
                dragX.set(0);
                dragY.set(0);
              }}
              whileHover={{ scale: 1.05 }}
              className="relative mt-24 w-64 bg-white rounded-2xl border border-slate-200 p-5 shadow-xl cursor-grab active:cursor-grabbing"
            >
              {/* HOLE */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-300 rounded-full border-4 border-white shadow-inner"></div>

              {/* PHOTO */}
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
                <Image
                  src="/img/911.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* INFO */}
              <div className="text-center mt-4">
                <h3 className="text-base font-bold text-slate-800 tracking-wide">
                  Muhammad Farhan
                </h3>
                <p className="text-sm text-slate-500">Fullstack Developer</p>
                <div className="mt-3 text-xs text-slate-400 tracking-widest">
                  Since: 2022-Present
                </div>
              </div>

              {/* SHINE */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4), transparent)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
