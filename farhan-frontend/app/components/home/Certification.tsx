import Image from 'next/image';

// Feel free to add a real credential URL for each item
const images = [
  {
    img: '/img/zahir.png',
    title: 'zahir',
    name: 'Zahir International',
    topic: 'Basis Data',
    materi: 'Basis Data',
    year: '2024',
    url: '#',
  },
  {
    img: '/img/bsi.png',
    title: 'bsi',
    name: 'Universitas Bina Sarana Informatika',
    topic: 'Software Development',
    materi: 'Fullstack Web Developer',
    year: '2024',
    url: '#',
  },
  {
    img: '/img/dicoding.png',
    title: 'dicoding',
    name: 'Dicoding Indonesia',
    topic: 'Front & Backend',
    materi: 'Fullstack Web Developer',
    year: '2025',
    url: '#',
  },
  {
    img: '/img/dicoding.png',
    title: 'IdCamp',
    name: 'ID Camp x Dicoding',
    topic: 'Front & Backend',
    materi: 'Fullstack Web Developer',
    year: '2024',
    url: '#',
  },
];

export default function Certification() {
  return (
    <section id="certif" className="w-full py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-10 md:mb-14">
          <p className="text-sky-600 text-sm tracking-wide">Certificate</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Certificates & Achievements
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            This for my achievment off my learn & relevant for my career.
          </p>
        </header>

        {/* Mobile: horizontal snap; Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {images.map((item, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-auto md:shrink md:snap-none rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl border border-slate-200 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-slate-800 font-semibold text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-slate-500 text-sm truncate">
                      {item.topic}
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-xs px-2 py-1 border border-slate-200">
                    {item.year}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Materi:{' '}
                  <span className="font-medium text-slate-700">
                    {item.materi}
                  </span>
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="Coming soon"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white 
               bg-emerald-600 disabled:bg-emerald-600/60 disabled:text-white/80 disabled:cursor-not-allowed
               disabled:grayscale transition"
                  >
                    Show Credential (Soon)
                  </button>
                  <button
                    disabled
                    type="button"
                    className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium text-slate-700 border border-slate-300 hover:bg-slate-50 transition"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(item.url || '#', '_blank');
                      }
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
