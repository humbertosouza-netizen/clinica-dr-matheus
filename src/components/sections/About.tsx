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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10 rounded-lg"></div>
            <div className="w-full h-full relative">
              <Image
                src="/images/dr-matheus.jpg"
                alt="Dr. Matheus Henrique"
                fill
                className="object-cover rounded-lg"
                objectPosition="center 20%"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Dr. Matheus Henrique
              </span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Com mais de 5 anos de experiência, o Dr. Matheus Henrique é especialista em diversas áreas da odontologia, 
              sempre buscando oferecer os tratamentos mais modernos e eficazes para seus pacientes.
            </p>

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
              "Meu objetivo é proporcionar um atendimento humanizado e de excelência, utilizando as técnicas mais modernas 
              para garantir o melhor resultado para cada paciente."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 