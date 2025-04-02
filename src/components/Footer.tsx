import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-section pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logotipo e Informações */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-10 w-auto">
                <Image 
                  src="/images/logo.png" 
                  alt="Dr. Matheus Henrique - Odontologia Especializada"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Atendimento odontológico de excelência com tecnologia de ponta e tratamento humanizado.
            </p>
            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/dr.matheushdias/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-blue-400 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#clinica" className="text-gray-400 hover:text-blue-400 transition-colors">Clínica</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">Rua Rubião Júnior, 3142</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">+55 67 98168-5349</span>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-blue-400 mt-1 mr-3" />
                <a 
                  href="https://wa.me/5567981685349" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {currentYear} Dr. Matheus Henrique - Todos os direitos reservados.
          <div className="mt-2">
            Desenvolvido por <a href="https://www.instagram.com/humbertodev.js/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Humberto Azambuja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 