export default function About() {
  return (
    <section className="pt-24 pb-32" id="tentang">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-10">
          
          {/* Kolom Kiri: Experience */}
          <div className="w-full sm:w-1/2">
            <h4 className="text-sm font-bold uppercase text-sky-600 mb-2 tracking-wide">
              About Me
            </h4>
            <h3 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4 transition-colors">
              Experience
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed text-justify transition-colors">
              Experienced in building web applications with the MERN Stack. I have internship experience at the Ministry of Home Affairs (Ditjen Bina Bangda) as an IT Support & Web Developer. I also honed my skills at a Software Development bootcamp at Bina Sarana Informatika University (PHP Native, Bootstrap, MySQL) and contributed as a Backend Developer in the Capstone Project during the{' '}
              <a href="https://www.dicoding.com/" target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-500 font-medium transition-colors">
                Dicoding
              </a>{' '}
              x{' '}
              <a href="https://www.dbs.com/foundation/index.html" target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white font-medium hover:text-sky-500 transition-colors">
                DBS Foundation
              </a>{' '}
              bootcamp.
            </p>
          </div>

          {/* Kolom Kanan: Edukasi & Sosial */}
          <div className="w-full sm:w-1/2 flex flex-col gap-8">
            
            {/* Education Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-sm p-6 transition-colors">
              <h3 className="text-base font-semibold mb-4 text-sky-600 tracking-wide">Education</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
                <div className="font-medium text-slate-500 dark:text-slate-400">Universitas</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 text-right">Bina Sarana Informatika</div>

                <div className="font-medium text-slate-500 dark:text-slate-400">Program Studi</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 text-right">S1 Teknologi Informasi</div>

                <div className="font-medium text-slate-500 dark:text-slate-400">Grade</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 text-right">3.58</div>

                <div className="font-medium text-slate-500 dark:text-slate-400">Tahun</div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 text-right">2022 — 2026</div>
              </div>
            </div>

            {/* Social Media Links (Dipangkas untuk keterbacaan, letakkan SVG asli kamu di sini) */}
            <div>
               <h3 className="text-base font-semibold mb-3 text-sky-600 tracking-wide">Connect</h3>
               <div className="flex flex-wrap items-center gap-3">
                  {/* Gunakan SVG Instagram, WA, Github kamu sebelumnya di sini. Tambahkan class: */}
                  {/* dark:border-slate-700 dark:text-slate-400 dark:hover:text-white dark:hover:border-sky-500 */}
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}