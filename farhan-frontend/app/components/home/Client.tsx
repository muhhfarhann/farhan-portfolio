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
    <section
      id="clients"
      className="w-[99.9vw] md:w-[98.5vw] lg:w-[100vw] relative -left-[64px] pt-36 pb-32 bg-slate-400"
    >
      <div id="container" className="w-full">
        <div className="w-full px-4">
          <div className="m-w-xl mx-auto text-center mb-16 flex flex-col items-center">
            <h1 className="text-slate-700 font-bold text-[1.2rem]">Clients</h1>
            <h2 className="font-bold text-slate-700 text-[1.2rem] mb-4">
              Yang Pernah Bekerja Sama
            </h2>
            <p className="font-medium text-[.75rem] text-slate-200 max-w-lg indent-5 text-justify">
              Berikut adalah client yang pernah bekerja sama, dengan saya. Saya
              memiliki komitmen dengan anda jika anda mempercayai kepada saya
              untuk menyalurkan masalah kepada saya.
            </p>
          </div>
        </div>

        {/* client profile */}
        <div className="w-full px-4">
          <div
            className={`flex flex-wrap ${
              clientImage.length > 0
                ? 'justify-between sm:justify-center items-center '
                : 'justify-center'
            }`}
          >
            {clientImage &&
              clientImage.length > 0 &&
              clientImage.map((data, i) => (
                <a
                  key={i}
                  href=""
                  className={`mx-4 grayscale opacity-50transition duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 border border-slate-400 rounded-full sm:mx-6 mb-1 sm:mb-4 flex items-center justify-center p-1 max-w-[120px]`}
                  onClick={(e) => e.preventDefault()}
                >
                  <Image
                    src={data.url}
                    alt={data.name}
                    width={100}
                    height={100}
                  />
                </a>
              ))}
            {clientImage.length === 0 && (
              <h1 className="text-[1.5rem] text-center font-bold text-slate-700">
                Comming soon..
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
