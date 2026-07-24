"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContact } from '../../hooks/useContact';

export default function Contact() {
  const { formData, status, isNotif, isLoading, handleChange, handleSubmit } = useContact();

  return (
    <section id="kontak" className="w-full pt-24 pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-sky-500 font-semibold tracking-wide uppercase text-sm mb-2">Contact</h1>
          <h2 className="font-bold text-slate-800 dark:text-slate-100 text-3xl mb-4 transition-colors">Let&apos;s Work Together</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto transition-colors">
            Punya pertanyaan atau tawaran kerja sama? Silakan isi form di bawah ini.
          </p>
        </motion.div>

        {isNotif && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-teal-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-lg shadow-teal-600/20"
          >
            <Image width={20} height={20} src="/img/check.png" alt="Success" className="w-5 h-5" />
            <p className="text-sm font-medium">Data Successfully Saved</p>
          </motion.div>
        )}

        <motion.form 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, type: "spring" }}
          onSubmit={handleSubmit} 
          className="w-full sm:w-2/3 mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-sm transition-colors"
        >
          {/* ... Sisa input form biarkan SAMA PERSIS dengan kodemu sebelumnya ... */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" autoComplete="off" value={formData.name} onChange={handleChange} className="w-full h-11 px-5 text-sm bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-transparent focus:border-sky-500 dark:focus:border-sky-500 rounded-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-400" />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" id="email" name="email" required placeholder="hello@example.com" autoComplete="off" value={formData.email} onChange={handleChange} className="w-full h-11 px-5 text-sm bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-transparent focus:border-sky-500 dark:focus:border-sky-500 rounded-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-400 invalid:focus:border-red-500 invalid:focus:ring-red-500/10 peer" />
            <p className="mt-1 text-xs text-red-500 opacity-0 peer-invalid:peer-focus:opacity-100 transition-opacity">Please enter a valid email address.</p>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
            <textarea id="message" name="message" required placeholder="How can I help you?" rows={4} value={formData.message} onChange={handleChange} className="w-full py-3 px-5 text-sm bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-transparent focus:border-sky-500 dark:focus:border-sky-500 rounded-xl transition duration-300 focus:outline-none focus:ring-4 focus:ring-sky-500/10 placeholder:text-slate-400 resize-none"></textarea>
          </div>

          <button type="submit" disabled={isLoading} className="w-full sm:w-auto px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-xl transition duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          <p className={`mt-5 text-center text-sm font-medium ${status.includes('berhasil') ? 'text-emerald-500' : status === 'Silakan isi form' ? 'text-slate-400' : 'text-red-500'}`}>{status}</p>
        </motion.form>
      </div>
    </section>
  );
}