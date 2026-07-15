export default function FooterSection() {
  return (
    <section id="footer" className="w-full bg-slate-900 dark:bg-black transition-colors pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="w-full sm:w-1/3 text-slate-300">
            <h1 className="font-semibold text-lg text-white mb-2">Muhammad Farhan</h1>
            <h2 className="text-sky-400 font-medium text-sm mb-4 tracking-wide uppercase">Contact Me</h2>
            <div className="text-sm space-y-2 text-slate-400">
              <p>mf333285@gmail.com</p>
              <p>Jl. Poncol, Ciracas, Jakarta Timur.</p>
            </div>
          </div>
          
          <div className="w-full sm:w-1/3 text-slate-300">
            <h2 className="text-sky-400 font-medium text-sm mb-4 tracking-wide uppercase">Quick Links</h2>
            <ul className="text-sm space-y-3">
               {/* Gunakan grid atau flex-col untuk link */}
              {['Home', 'About Me', 'Projects', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 transition hover:text-sky-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
            &copy; 2026 All Right Reserved. Designed & Developed by{" "}
            <span className="text-white font-medium">Muhammad Farhan</span>
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm">
            Build with 
            <span className="text-sky-400 font-medium mx-1">React, Next.js</span> & 
            <span className="text-teal-400 font-medium ml-1">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}