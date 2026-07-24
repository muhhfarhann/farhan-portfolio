'use client';

import { useEffect, useState } from 'react';
import HeaderContainer from './components/home/Header';
import ContainerHeader from './components/home/ContainerHeader';
import Logo from './components/home/Logo';
import MenuButton from './components/home/MenuButton';
import Main from './components/home/Main';
import ContainerMain from './components/home/ContainerMain';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Portfolio from './components/home/Portfolio';
import Client from './components/home/Client';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';
import Navbar from './components/home/Navbar';
import FooterSection from './components/home/FooterSection';
import Certification from './components/home/Certification';
import ThemeToggle from './components/home/ThemeToggle';
import ParallaxBackground from './components/home/ParallaxBackground'; // <-- PASTIKAN INI DIIMPORT

const text = [
  'Im a developer',
  'Im working on MERN',
  'Php',
  'Laravel',
  'Mysql',
];

const firstStack = [
  { img: '/img/stack/vite.png', name: 'vite' },
  { img: '/img/stack/mongo.png', name: 'mongo' },
  { img: '/img/stack/ex.png', name: 'express' },
  { img: '/img/stack/react.png', name: 'reactjs' },
  { img: '/img/stack/node.png', name: 'nodejs' },
];

export default function Home() {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('beranda');

  // Efek Scroll yang lebih Clean menggunakan State
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 20);

      // Deteksi section (Bisa disesuaikan ukurannya dengan tinggi layar aktual)
      if (scrollY < 400) setActiveSection('beranda');
      else if (scrollY >= 400 && scrollY < 1200) setActiveSection('tentang');
      else if (scrollY >= 1200 && scrollY < 2000) setActiveSection('portfolio');
      else if (scrollY >= 2000 && scrollY < 2600) setActiveSection('clients');
      else setActiveSection('kontak');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efek Ketik Hero
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => (i + 1) % text.length), 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <ParallaxBackground />
      <HeaderContainer>
        <ContainerHeader isScroll={isScroll}>
          <Logo />
          <Navbar click={click} activeSection={activeSection} />
          <div className="ml-auto flex items-center gap-2 sm:ml-4">
            <ThemeToggle />
            <MenuButton click={click} handleClick={handleClick} />
          </div>
        </ContainerHeader>
      </HeaderContainer>
      
      <Main>
        <ContainerMain>
          <Hero index={index} text={text} />
          <About />
          <Portfolio firstStack={firstStack} />
          <Certification />
          <Client />
          <Contact />
        </ContainerMain>
      </Main>
      
      <Footer>
        <FooterSection />
      </Footer>
    </>
  );
}