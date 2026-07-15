import { ReactNode } from 'react';

interface Parameter {
  isScroll: boolean;
  children: ReactNode;
}

export default function ContainerHeader({ isScroll, children }: Parameter) {
  return (
    <div
      className={`w-full max-w-6xl mx-auto py-3 px-5 fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between rounded-2xl border transition-all duration-500 backdrop-blur-md
      ${isScroll ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-slate-200/50 dark:shadow-black/50 border-slate-200 dark:border-slate-800' : 'bg-transparent border-transparent'}`}
    >
      {children}
    </div>
  );
}