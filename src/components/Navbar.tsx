import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegação
  const navLinks = [
    { title: 'Início', href: '#' },
    { title: 'Serviços', href: '#servicos' },
    { title: 'Clínica', href: '#clinica' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative h-12 w-auto">
            <Image 
              src="/images/logo.png" 
              alt="Dr. Matheus Dias - Odontologia Especializada"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </motion.a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{
                color: '#ffffff',
                textShadow: '0 0 8px rgba(0, 163, 255, 0.5)',
              }}
            >
              {link.title}
            </motion.a>
          ))}
          
          <motion.a
            href="#contato"
            className="button-primary py-2 px-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="mr-2" />
            Agendar
          </motion.a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              
              <a
                href="#contato"
                className="button-primary py-3 px-4 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaWhatsapp className="mr-2" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 