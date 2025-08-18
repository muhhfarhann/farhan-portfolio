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
  const [isScroll, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);

  // handle window scroll untuk memberi garis bawah di nav
  useEffect(() => {
    const berandaNav = document.querySelector('#beranda-nav');
    const tentangSaya = document.querySelector('.tentang-saya');
    const portfolio = document.querySelector('.portfolio');
    const clients = document.querySelector('.clients');
    const kontak = document.querySelector('.kontak');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Beranda aktif hanya jika di posisi awal
      if (scrollY === 0) {
        berandaNav?.classList.add('active');
        tentangSaya?.classList.remove('active');
        setScrolled(false);
      } else {
        berandaNav?.classList.remove('active');
        setScrolled(true);
      }

      // Tentang Saya
      if (scrollY >= 335) {
        tentangSaya?.classList.add('active');
      } else {
        tentangSaya?.classList.remove('active');
      }

      if (scrollY > 825) {
        tentangSaya?.classList.remove('active');
      }

      // Portfolio
      if (scrollY >= 815 && scrollY <= 1928) {
        portfolio?.classList.add('active');
      } else {
        portfolio?.classList.remove('active');
      }

      // Clients
      if (scrollY >= 2009) {
        clients?.classList.add('active');
      } else {
        clients?.classList.remove('active');
      }

      // Kontak
      if (scrollY >= 2624) {
        clients?.classList.remove('active');
        kontak?.classList.add('active');
      } else {
        kontak?.classList.remove('active');
      }

      if (scrollY > 2916) {
        kontak?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // untuk animasi text title
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => (i + 1) % text.length),
      2000,
    );
    return () => clearInterval(intervalId);
  }, []);

  //fungsi untuk handle click
  const handleClick = () => {
    // const imgRotateHand = document.querySelector('#rotateHand');
    // const hamburger = document.querySelector('#hambuger');
    setClick(true);

    if (click == true) {
      setClick((prev) => !prev);
    }
  };

  return (
    <>
      <HeaderContainer>
        <ContainerHeader isScroll={isScroll}>
          <Logo />
          <Navbar click={click} />
          <MenuButton click={click} handleClick={handleClick} />
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
