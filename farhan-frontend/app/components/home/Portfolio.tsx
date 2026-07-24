"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Parameter {
  img: string;
  name: string;
}

interface PortfolioProps {
  firstStack: Parameter[];
}

export default function Portfolio({ firstStack }: PortfolioProps) {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A clean personal site built with Next.js and Tailwind CSS showcasing projects, certifications, and contact.',
      image: '/img/ss.png',
      live: '#',
      repo: '#',
      tech: firstStack,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  } as const;

  return (
    <section id="portfolio" className="w-full py-20 md:py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-sky-600 dark:text-sky-400 text-sm tracking-wide font-semibold">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mt-2">Latest Projects</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            My last projects was success i build with clean design and minimalis, focus on content & keep comfortable in any screen.
          </p>
        </motion.header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{ y: -5 }} // Efek interaktif saat di-hover
              className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-4 md:p-5">
                <div className="relative overflow-hidden rounded-xl border border-slate-100 dark:border-slate-700">
                  <Image src={p.image} alt={p.title} width={1280} height={800} className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">{p.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{p.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.tech?.map((t, idx) => (
                    <span key={idx} className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs transition-colors bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                      <Image src={t.img} alt={t.name} width={18} height={18} className="rounded" />
                      {t.name}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={p.live} className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 transition shadow-sm">Live Demo</a>
                  <a href={p.repo} className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition">Source Code</a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}