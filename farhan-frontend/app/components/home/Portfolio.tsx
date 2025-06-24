import Image from 'next/image';

interface Parameter {
  img: string;
  name: string;
}

interface PortfolioProps {
  firstStack: Parameter[];
}

// section portfolio project-project
export default function Portfolio({ firstStack }: PortfolioProps) {
  return (
    <section
      id="portfolio"
      className="relative -left-[64px] w-[99.9vw] md:w-[100vw] lg:w-[100vw] sm:w-[98.9vw] pt-36 pb-16 bg-linear-to-b from-slate-300 via-slate-100 to-slate-700 to-90%"
    >
      <div id="container">
        <div className="w-full px-4">
          <div className="m-w-xl mx-auto text-center mb-16 flex flex-col items-center">
            <h1 className="text-sky-600 sm:text-[1rem]">Portfolio</h1>
            <h2 className="font-bold text-slate-500 text-2xl mb-4 sm:text-[1.5rem]">
              Last Project
            </h2>
            <p className="font-medium text-[.75rem] text-slate-500 max-w-lg sm:text-[.85rem] indent-5 text-justify relative left-0">
              Some project below newest i build, in exercise and contribute on
              bootcamp.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 sm:w-1/2">
            <div className="rounded shadow-md overflow-hidden">
              <Image
                src={`/img/ss.png`}
                alt="Portfolio latihan"
                width={0}
                height={0}
                className="w-full"
                sizes="100%"
              />
            </div>
            <h1 className="font-semibold text-lg text-slate-600 md:text-slate-300 mt-3 mb-5 ">
              My Portfolio
            </h1>
            <h2 className="text-slate-700 md:text-slate-200">Tech Stack:</h2>
            <div className="container-stack-img flex gap-2.5 flex-wrap">
              {firstStack.map((data, index) => (
                <div
                  className="w-[75px] h-[75px] shadow-md rounded-full p-1 flex justify-center items-center"
                  key={index}
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={0}
                    height={0}
                    className="w-full"
                    sizes="100%"
                  />
                </div>
              ))}
            </div>
            <h3 className="text-slate-200">Explain: </h3>
            <p className="font-medium text-slate-200 text-base text-[.75rem]">
              This project is my portfolio website now you can see and now you
              are access this portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
