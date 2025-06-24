import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const images = [
  {
    img: '/img/zahir.png',
    title: 'zahir',
    name: 'Zahir International',
    topic: 'Basis Data',
    materi: 'Basis Data',
    year: '2024',
  },
  {
    img: '/img/bsi.png',
    title: 'bsi',
    name: 'Universitas Bina Sarana Informatika',
    topic: 'Software Development',
    materi: 'Fullstack Web Developer',
    year: '2024',
  },
  {
    img: '/img/dicoding.png',
    title: 'dicoding',
    name: 'Dicoding Indonesia',
    topic: 'Front & Backend',
    materi: 'Fullstack Web Developer',
    year: '2025',
  },
  {
    img: '/img/dicoding.png',
    title: 'IdCamp',
    name: 'ID Camp x Dicoding',
    topic: 'Front & Backend',
    materi: 'Fullstack Web Developer',
    year: '2024',
  },
];

export default function Certification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Initialize with false

  useEffect(() => {
    // Check if window is available (client-side)
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        setIsSmallScreen(window.innerWidth <= 768);
      }
    };

    const handleScroll = () => {
      if (containerRef.current) {
        setScrollX(containerRef.current.scrollLeft);
      }
    };

    const handleResize = () => {
      checkScreenSize();
    };

    // Initial check for screen size
    checkScreenSize();

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="certif relative -left-[64px] w-[99.9vw] bg-slate-400 flex overflow-x-auto gap-5 scroll-smooth"
      id="certif"
    >
      <div
        className="title w-[100px] h-[100%] absolute left-0 top-1/2 -translate-y-1/2 text-[.75rem] font-bold text-slate-200 z-20 p-2 rounded-br-md"
        style={{
          background: `url(/img/bookmark.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1>Certificate & Achievements</h1>
      </div>
      {images.map((img, index) => (
        <div
          key={index}
          className="card-certif relative left-[8rem] w-1/2 md:w-1/3 border border-sky-200 flex flex-col justify-center items-center shrink-0 transition-transform rounded-md bg-slate-300 shadow-[0_0_5px_grey]"
          style={{
            transform: `translateX(-${scrollX * 0.3}px) scale(${
              isSmallScreen ? 1 - scrollX * 0.0005 : 1
            })`,
          }}
        >
          <div className={`img w-[100px] flex justify-center mb-5`}>
            <Image src={img.img} alt={img.title} width={100} height={100} />
          </div>
          <div className="detail w-[80%] text-center mb-2.5">
            <h1 className="text-[.75rem]">{img.name}</h1>
            <div className="role text-[.75rem] text-slate-600 mb-1.5">
              <h2 className="">{img.topic}</h2>
              <h3>{img.year}</h3>
            </div>
            <div className="credential w-[100px] mx-auto shadow-[0_0_10px_grey] border border-slate-400 flex gap-1 justify-center items-center rounded-full p-1 cursor-pointer">
              <a
                href=""
                className="cursor-pointer hover:shadow-md transition duration-200 ease-in-out"
                onClick={(e) => e.preventDefault()}
              >
                <Image
                  src={`/img/external-link.png`}
                  alt="link"
                  width={10}
                  height={10}
                />
              </a>
              <h1 className="text-[.5rem]">Show Credential</h1>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
