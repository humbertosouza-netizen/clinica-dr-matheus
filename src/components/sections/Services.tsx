import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTooth, FaProcedures, FaTeeth, FaMagic } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg"
    >
      <motion.div
        className="text-4xl text-blue-400 mb-4 flex justify-center"
        whileHover={{ scale: 1.1, color: '#7dd3fc' }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white text-center mb-3">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Tratamento de Canal',
      description: 'Alívio rápido da dor com tecnologia de ponta e procedimentos minimamente invasivos.',
      icon: <FaTooth />,
      delay: 0.1,
    },
    {
      title: 'Cirurgia de Sisos',
      description: 'Procedimento seguro e minimamente invasivo para remoção de dentes do siso.',
      icon: <FaProcedures />,
      delay: 0.3,
    },
    {
      title: 'Próteses Dentárias',
      description: 'Soluções estéticas e funcionais sob medida para restaurar seu sorriso.',
      icon: <FaTeeth />,
      delay: 0.5,
    },
    {
      title: 'Clareamento e Restauração',
      description: 'Transforme seu sorriso com técnicas avançadas de clareamento e restauração.',
      icon: <FaMagic />,
      delay: 0.7,
    },
  ];

  return (
    <section id="servicos" className="container-section bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent z-0"></div>
      
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
              Como resolvemos seu problema
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Contamos com equipamentos modernos e técnicas avançadas para oferecer o melhor tratamento odontológico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 