"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClientImage {
  id: string;
  url: string;
  name: string;
}

const clientImage: ClientImage[] = [];

export default function Client() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as const;

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
  } as const;

  return (
    <section id="clients" className="w-full py-24 transparent transition-colors border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h1 className="text-sky-600 text-sm tracking-wide font-semibold uppercase mb-2">Clients</h1>
          <h2 className="font-bold text-slate-800 dark:text-slate-100 text-3xl mb-4 transition-colors">Yang Pernah Bekerja Sama</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto transition-colors">
            Berikut adalah client yang pernah bekerja sama dengan saya. Saya berkomitmen penuh untuk memberikan solusi terbaik bagi Anda.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={`flex flex-wrap ${clientImage.length > 0 ? 'justify-center items-center gap-8' : 'justify-center'}`}
        >
          {clientImage.length > 0 ? (
            clientImage.map((data, i) => (
              <motion.a
                key={i}
                variants={logoVariants}
                href="#"
                className="group relative flex items-center justify-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl w-32 h-32 transition-all duration-300 hover:shadow-md hover:border-sky-500 dark:hover:border-sky-500 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                onClick={(e) => e.preventDefault()}
              >
                <Image src={data.url} alt={data.name} width={80} height={80} className="object-contain" />
              </motion.a>
            ))
          ) : (
            <motion.div variants={logoVariants} className="py-10">
              <h1 className="text-xl font-medium text-slate-400 dark:text-slate-600">Coming soon...</h1>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}