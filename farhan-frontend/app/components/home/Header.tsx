"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Parameter {
  children: ReactNode;
}

export default function HeaderContainer({ children }: Parameter) {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-5 relative z-50" 
      id="beranda"
    >
      {children}
    </motion.header>
  );
}