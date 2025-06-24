import { ReactNode } from 'react';

interface Parameter {
  children: ReactNode;
}

// footer element
export default function Footer({ children }: Parameter) {
  return (
    <footer
      className={`mt-[3.5rem] flex flex-col sm:flex-row sm:justify-center box-border w-full max-w-full`}
    >
      {children}
    </footer>
  );
}
