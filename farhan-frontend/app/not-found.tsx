import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-slate-600 font-extrabold text-5xl">
          404 Not Found Bro!
        </h1>
        <Image src={'/img/404.png'} alt="404" width={500} height={500} />
        <p className="text-red-500">not found page off your search is empty!</p>
        <Link href={'/'}>
          <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-0.5 px-1 rounded cursor-pointer">
            Home
          </button>
        </Link>
      </section>
    </>
  );
}
