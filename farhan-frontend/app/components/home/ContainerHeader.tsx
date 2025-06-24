import { ReactNode } from 'react';

interface Parameter {
  isScroll: boolean;
  children: ReactNode;
}

// container header
export default function ContainerHeader({ isScroll, children }: Parameter) {
  return (
    <div
      className={`container-header w-[90%] py-[.3rem] px-2.5 fixed top-0 z-50 flex flex-row items-center rounded-lg border-[1px] border-slate-300 backdrop-blur-md ${
        isScroll ? 'shadow-md shadow-slate-500' : 'shadow-none'
      } transition duration-500 sm:w-[97%]`}
    >
      {children}
    </div>
  );
}
