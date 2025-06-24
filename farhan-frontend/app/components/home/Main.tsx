import { ReactNode } from 'react';

interface Parameter {
  children: ReactNode;
}

// main element
export default function Main({ children }: Parameter) {
  return (
    <main
      id=""
      className={`mt-[3.5rem] px-[4rem] flex flex-col sm:flex-row sm:justify-center box-border w-full max-w-full overflow-x-hidden`}
    >
      {children}
    </main>
  );
}
