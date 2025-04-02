import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="container-section min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-primary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Alívio da dor e um sorriso saudável em poucas etapas.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Atendimento especializado para devolver a saúde e a beleza do seu sorriso com tecnologia de ponta.
          </p>
          
          <motion.a
            href="#contato"
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="mr-2 text-xl" />
            Agendar Consulta
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10 rounded-lg"></div>
          <div className="w-full h-full relative">
            <Image
              src="/images/dr-matheus.jpg"
              alt="Dr. Matheus Henrique"
              fill
              className="object-cover rounded-lg"
              objectPosition="center 20%"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 