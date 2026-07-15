interface Parameter {
  click: boolean;
  activeSection: string;
}

export default function Navbar({ click, activeSection }: Parameter) {
  const navItems = [
    { id: 'beranda', label: 'Home', href: '#beranda' },
    { id: 'tentang', label: 'About Me', href: '#tentang' },
    { id: 'portfolio', label: 'Projects', href: '#portfolio' },
    { id: 'clients', label: 'Clients', href: '#clients' },
    { id: 'kontak', label: 'Contact', href: '#kontak' },
  ];

  return (
    <div className={`
      ${click ? 'absolute right-5 top-[70px] flex flex-col p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl' : 'hidden'} 
      sm:relative sm:top-0 sm:flex sm:flex-row sm:items-center sm:gap-6 sm:p-0 sm:bg-transparent sm:border-none sm:shadow-none transition-all duration-300 z-50 ml-auto
    `}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`font-medium text-sm transition-colors hover:text-sky-500 mb-3 sm:mb-0 
            ${activeSection === item.id ? 'text-sky-500 dark:text-sky-400 font-semibold' : 'text-slate-600 dark:text-slate-300'}
          `}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}