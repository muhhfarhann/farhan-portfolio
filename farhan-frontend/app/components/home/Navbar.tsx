interface Parameter {
  click: boolean;
}

// navbar
export default function Navbar({ click }: Parameter) {
  return (
    <div className="navbar ml-auto">
      <div
        className={`nav-list p-1.5 text-sky-600 gap-2.5 transition duration-700 delay-1000 ${
          click ? 'absolute right-0 z-50' : 'hidden'
        } top-[50px] flex-col shadow-sm shadow-slate-700 bg-linear-to-br from-gray-400 via-slate-200 to-gray-200 sm:bg-none rounded-2xl sm:top-0 sm:relative sm:flex sm:flex-row sm:items-center`}
      >
        <div className="nav">
          <a
            href="#beranda"
            className="hover:text-slate-400 beranda-nav active"
            id="beranda-nav"
          >
            Home
          </a>
        </div>
        <div className="nav">
          <a
            href="#tentang"
            className="hover:text-slate-400 tentang-saya"
            id="tentang-saya-nav"
          >
            About Me
          </a>
        </div>
        <div className="nav">
          <a
            href="#portfolio"
            className="hover:text-slate-400 portfolio"
            id="tentang-saya-nav"
          >
            Projects
          </a>
        </div>
        <div className="nav">
          <a
            href="#clients"
            className="hover:text-slate-400 clients"
            id="tentang-saya-nav"
          >
            Clients
          </a>
        </div>
        <div className="nav">
          <a
            href="#kontak"
            className="hover:text-slate-400 kontak"
            id="kontak-nav kontak"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
