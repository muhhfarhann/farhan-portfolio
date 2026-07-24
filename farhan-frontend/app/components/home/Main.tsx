import { ReactNode } from 'react';

interface Parameter {
  children: ReactNode;
}

export default function Main({ children }: Parameter) {
  return (
    // Hapus margin atas dan padding samping, biarkan full edge-to-edge
    <main className="w-full flex flex-col overflow-x-hidden relative">
      {children}
    </main>
  );
}