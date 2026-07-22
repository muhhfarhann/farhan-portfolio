"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  // Data Cerita / Perjalanan Karirmu
  const journey = [
    {
      year: "2022 — 2026",
      title: "The Academic Foundation",
      subtitle: "Universitas Bina Sarana Informatika",
      desc: "Memulai perjalanan formal di program studi S1 Teknologi Informasi (GPA 3.58). Di sini saya membangun fondasi logika pemrograman, basis data, dan pengembangan perangkat lunak yang kuat menggunakan PHP Native, Bootstrap, dan MySQL.",
      icon: "🎓",
    },
    {
      year: "Internship Experience",
      title: "IT Support & Web Developer",
      subtitle: "Ministry of Home Affairs (Ditjen Bina Bangda)",
      desc: "Terjun langsung ke dunia profesional di instansi pemerintahan. Saya bertanggung jawab dalam memelihara aplikasi web, memberikan dukungan teknis IT, dan belajar bagaimana teknologi diterapkan dalam skala birokrasi nyata.",
      icon: "🏢",
    },
    {
      year: "Bootcamp & Specialization",
      title: "Full-Stack Web Developer",
      subtitle: "Dicoding x DBS Foundation",
      desc: "Fokus mendalami MERN Stack modern. Berkontribusi penuh sebagai Backend Developer dalam proyek Capstone, merancang API yang tangguh, dan menghubungkan sistem secara end-to-end.",
      icon: "🚀",
    },
  ];

  // Konfigurasi Animasi Framer Motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    },
  };

  return (
    <section id="tentang" className="relative w-full pt-28 pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* --- EFEK CAHAYA MELAYANG (BACKGROUND) --- */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-[300px] h-[300px] bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        
        {/* --- HEADER STORYTELLING --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-bold tracking-widest uppercase mb-4 border border-sky-200 dark:border-sky-800">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">Journey</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            Berawal dari rasa penasaran terhadap baris kode, hingga akhirnya berkesempatan membangun sistem nyata. Inilah cerita singkat perjalanan karir dan pendidikan saya.
          </p>
        </motion.div>

        {/* --- TIMELINE STORYTELLING --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 border-sky-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12"
        >
          {journey.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-8 md:pl-12"
            >
              {/* Ikon Titik Timeline */}
              <div className="absolute -left-[25px] top-1 flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-900 border-4 border-sky-100 dark:border-slate-800 rounded-full text-xl shadow-lg z-10">
                {item.icon}
              </div>

              {/* Kartu Konten */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_10px_30px_rgba(14,165,233,0.08)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-teal-400/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-4">
                    {item.subtitle}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- SOCIAL MEDIA CONNECT --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6">Mari Terhubung</h3>
          <div className="flex flex-wrap justify-center gap-4">
            
            {/* Instagram */}
            <a href="https://instagram.com/muhhfrhnnn" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 dark:hover:bg-sky-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30">
              <svg width="20" viewBox="0 0 24 24" className="fill-current"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/62895326257069" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-emerald-500 hover:border-emerald-500 dark:hover:bg-emerald-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30">
              <svg width="20" viewBox="0 0 24 24" className="fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/muhhfarhann" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 hover:border-slate-900 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/30">
              <svg width="20" viewBox="0 0 24 24" className="fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>

            {/* Email */}
            <a href="mailto:mf333285@gmail.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-rose-500 hover:border-rose-500 dark:hover:bg-rose-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/30">
              <svg width="20" viewBox="0 0 24 24" className="fill-current"><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z" /></svg>
            </a>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}