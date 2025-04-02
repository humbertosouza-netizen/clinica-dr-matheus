import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Clinic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clinicImages = [
    { src: '/images/clinic-1.jpg', alt: 'Recepção da Clínica' },
    { src: '/images/clinic-2.jpg', alt: 'Consultório Moderno' },
    { src: '/images/clinic-3.jpg', alt: 'Equipamentos Odontológicos' },
    { src: '/images/clinic-4.jpg', alt: 'Sala de Espera' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="clinica" className="container-section bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-0"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Nossa Clínica
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Ambiente moderno e acolhedor, equipado com tecnologia de ponta para garantir o seu conforto e os melhores resultados.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {clinicImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-transparent z-10 rounded-lg"></div>
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  objectPosition="center center"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clinic; 