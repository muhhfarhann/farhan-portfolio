import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Parameter {
  index: number;
  text: string[];
}

// element hero atau section about
export default function Hero({ index, text }: Parameter) {
  return (
    <section className="hero w-full">
      <div className="container-hero">
        <div className="px-10 flex flex-wrap items-center sm:w-full">
          <div className="relative sm:w-1/2 self-center px-4">
            <h1 className="relative text-sm sm:text-[1rem] font-normal sm:font-semibold font-inter text-sky-600">
              Wellcome there.., I'm{' '}
              <span className="sm:block mt-1 text-2xl sm:text-[2rem] font-semibold bg-linear-to-br from-slate-700 from-8% via-slate-300 via-2% to-slate-800 to-60% bg-clip-text text-transparent">
                Muhammad Farhan
              </span>
            </h1>
            <h2 className="relative mb-1.5 sm:my-0 text-[.75rem] sm:text-[1rem] font-light text-red-800 bg-linear-to-r from-white to-slate-500 w-[100%] sm:w-[60%] rounded-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={text[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {text[index]}
                </motion.span>
              </AnimatePresence>
            </h2>

            <button className="relative my-1 sm:my-1.5 w-[auto] p-1.5 sm:p-2.5 bg-teal-500 text-white font-normal text-[.75rem] sm:text-[.8rem] rounded-full transition duration-200 shadow-sm hover:bg-teal-700 hover:shadow-lg sm:shadow sm:shadow-slate-600 sm:hover:shadow-md cursor-pointer">
              Contact Me
            </button>

            <span className="absolute inset-0 -top-[5rem] -left-[30rem] -z-10 flex justify-center items-center">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#08BDBA"
                  d="M23.4,-40C31,-36.2,38.1,-31.2,49.8,-24.3C61.5,-17.4,77.8,-8.7,78.5,0.4C79.2,9.5,64.4,19.1,52.1,25C39.8,30.8,30.1,33,21.8,42.1C13.5,51.3,6.8,67.3,-0.1,67.5C-7,67.8,-14.1,52.2,-24.6,44.4C-35.2,36.6,-49.2,36.5,-53.8,30.4C-58.4,24.3,-53.6,12.2,-51.1,1.5C-48.6,-9.2,-48.2,-18.4,-47.6,-31.5C-47.1,-44.6,-46.2,-61.5,-38.2,-65.1C-30.2,-68.6,-15.1,-58.8,-3.6,-52.6C7.9,-46.4,15.9,-43.8,23.4,-40Z"
                  transform="translate(100 100) scale(.5)"
                />
              </svg>
            </span>
          </div>

          <div className="relative sm:w-1/2 self-end px-4">
            <div className="relative mt-10">
              <Image
                src={'/img/911.png'}
                alt="Profile"
                width={0}
                height={0}
                className="w-full mx-auto sm:max-w-72 relative"
                sizes="100%"
              />
              <span className="absolute inset-0 -z-10 flex justify-center items-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    fill="#08BDBA"
                    d="M21.1,-44.1C23.8,-35.1,19.8,-22.1,25.5,-14.1C31.3,-6.1,46.7,-3.1,46.1,-0.3C45.5,2.4,28.8,4.7,21.4,9.7C13.9,14.7,15.6,22.3,13.6,26.3C11.5,30.3,5.8,30.7,-0.6,31.7C-6.9,32.7,-13.9,34.4,-20.6,33.1C-27.3,31.8,-33.7,27.5,-41.4,21.5C-49,15.5,-57.7,7.7,-57.3,0.2C-56.9,-7.3,-47.3,-14.5,-37.6,-16.9C-27.9,-19.3,-18.1,-16.9,-11.8,-23.8C-5.5,-30.8,-2.8,-47.2,3.2,-52.8C9.2,-58.4,18.5,-53.2,21.1,-44.1Z"
                    transform="translate(100 100) scale(1.5)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
