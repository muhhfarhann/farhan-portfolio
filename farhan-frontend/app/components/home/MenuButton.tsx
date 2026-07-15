interface Parameter {
  click: boolean;
  handleClick: () => void;
}

export default function MenuButton({ click, handleClick }: Parameter) {
  return (
    <button
      onClick={handleClick}
      aria-label="Toggle Menu"
      className="sm:hidden flex flex-col justify-center items-center w-10 h-10 border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none"
    >
      <div className="flex flex-col items-center justify-center space-y-1.5">
        <span className={`w-5 h-0.5 bg-slate-800 dark:bg-slate-200 transition-all duration-300 ${click ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-slate-800 dark:bg-slate-200 transition-all duration-300 ${click ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-5 h-0.5 bg-slate-800 dark:bg-slate-200 transition-all duration-300 ${click ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
    </button>
  );
}