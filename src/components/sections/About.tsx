import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate, FaUserMd } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
      } 
    },
  };

  return (
    <section id="sobre" className="container-section bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent z-0"></div>
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10 rounded-lg pointer-events-none"></div>
            <Image
              src="/images/dr-matheus.jpg"
              alt="Dr. Matheus Dias"
              fill
              className="object-cover rounded-lg"
              objectPosition="center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="heading-secondary mb-4"
            >
              Dr. Matheus Dias
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6"
            >
              Com mais de 5 anos de experiência, o Dr. Matheus Dias é especialista em diversas áreas da odontologia,
              oferecendo tratamentos personalizados e de alta qualidade.
            </motion.p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaGraduationCap className="text-2xl text-blue-400" />
                <span className="text-gray-200">Graduado pela Universidade de São José do Rio Preto (UNIRP)</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCertificate className="text-2xl text-blue-400" />
                <span className="text-gray-200">Especialista em Endodontia e Cirurgia Oral</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaUserMd className="text-2xl text-blue-400" />
                <span className="text-gray-200">Membro da Associação Brasileira de Odontologia</span>
              </div>
            </div>

            <p className="text-gray-300">
              &ldquo;Meu objetivo é proporcionar um atendimento humanizado e de excelência, utilizando as técnicas mais modernas 
              para garantir o melhor resultado para cada paciente.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 