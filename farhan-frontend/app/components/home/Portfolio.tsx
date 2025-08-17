import Image from 'next/image';

interface Parameter {
  img: string;
  name: string;
}

interface PortfolioProps {
  firstStack: Parameter[];
}

export default function Portfolio({ firstStack }: PortfolioProps) {
  // You can add more projects here later — keep the structure consistent
  const projects = [
    {
      title: 'Personal Portfolio',
      description:
        'A clean personal site built with Next.js and Tailwind CSS showcasing projects, certifications, and contact.',
      image: '/img/ss.png',
      live: '#', // put your live URL
      repo: '#', // put your repo URL
      tech: firstStack,
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full py-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-10 md:mb-14">
          <p className="text-sky-600 text-sm tracking-wide">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Latest Projects
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            My last projects was success i build with clean design and
            minimalis, focus on content & keep comfortable in any screen.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 md:p-5">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={800}
                    className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {p.tech?.map((t, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
                    >
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={18}
                        height={18}
                        className="rounded"
                      />
                      {t.name}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
