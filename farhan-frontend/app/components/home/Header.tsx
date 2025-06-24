import { ReactNode } from 'react';

interface Parameter {
  children: ReactNode;
}

// element header
export default function HeaderContainer({ children }: Parameter) {
  return (
    <header className="px-5 relative" id="beranda">
      {children}
    </header>
  );
}
