"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Clinic from '@/components/sections/Clinic';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import PreForm from '@/components/sections/PreForm';
import Footer from '@/components/Footer';

export default function Home() {
  // Remover o efeito de gradiente ao rolar
  useEffect(() => {
    // Garantir que o fundo seja preto sólido
    document.body.style.background = 'rgb(0, 0, 0)';
    
    // Sem evento de scroll
    return () => {};
  }, []);

  return (
    <main className="flex min-h-screen flex-col antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Clinic />
      <About />
      <PreForm />
      <Contact />
      <Footer />
    </main>
  );
}
