import Image from 'next/image';

interface ClientImage {
  id: string;
  url: string;
  name: string;
}

const clientImage: ClientImage[] = [];

// section client atau perusahaan-perusahaan
export default function Client() {
  return (
    <section id="clients" className="w-full py-24 bg-slate-100 dark:bg-slate-900/50 transition-colors border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-sky-600 text-sm tracking-wide font-semibold uppercase mb-2">Clients</h1>
          <h2 className="font-bold text-slate-800 dark:text-slate-100 text-3xl mb-4 transition-colors">
            Yang Pernah Bekerja Sama
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto transition-colors">
            Berikut adalah client yang pernah bekerja sama dengan saya. Saya berkomitmen penuh untuk memberikan solusi terbaik bagi Anda.
          </p>
        </div>

        <div className={`flex flex-wrap ${clientImage.length > 0 ? 'justify-center items-center gap-8' : 'justify-center'}`}>
          {clientImage.length > 0 ? (
            clientImage.map((data, i) => (
              <a
                key={i}
                href="#"
                className="group relative flex items-center justify-center p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl w-32 h-32 transition-all duration-300 hover:shadow-md hover:border-sky-500 dark:hover:border-sky-500 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                onClick={(e) => e.preventDefault()}
              >
                <Image src={data.url} alt={data.name} width={80} height={80} className="object-contain" />
              </a>
            ))
          ) : (
            <div className="py-10">
              <h1 className="text-xl font-medium text-slate-400 dark:text-slate-600">Coming soon...</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}