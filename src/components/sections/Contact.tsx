import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="container-section bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      
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
              Agende sua consulta
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e agende sua consulta em minutos. Estamos aqui para cuidar do seu sorriso!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-300">R. Rubião Júnior, 3142 - Centro, São José do Rio Preto - SP, 15010-090</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">Telefone/WhatsApp</h3>
                <p className="text-gray-300">+55 17 98161-5329</p>
              </div>
            </div>

            <motion.a
              href="https://wa.me/5517981615329"
              className="button-primary w-full mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Agendar pelo WhatsApp
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black p-6 rounded-xl shadow-lg border border-gray-800"
          >
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-transparent z-10 rounded-lg pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.0902960945!2d-49.38523662559525!3d-20.8148826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5e8459147d%3A0xd7991d4c45892f72!2sR.%20Rubi%C3%A3o%20J%C3%BAnior%2C%203142%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015010-090!5e0!3m2!1spt-BR!2sbr!4v1743617301376!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Localização da Clínica Dr. Matheus Henrique"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 