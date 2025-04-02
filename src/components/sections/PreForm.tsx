import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaUndoAlt } from 'react-icons/fa';

type FormStep = 'symptoms' | 'location' | 'duration' | 'previous' | 'summary';

interface FormData {
  symptoms: string;
  location: string;
  duration: string;
  previous: string;
}

const PreForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('symptoms');
  const [formData, setFormData] = useState<FormData>({
    symptoms: '',
    location: '',
    duration: '',
    previous: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    switch (currentStep) {
      case 'symptoms':
        setCurrentStep('location');
        break;
      case 'location':
        setCurrentStep('duration');
        break;
      case 'duration':
        setCurrentStep('previous');
        break;
      case 'previous':
        setCurrentStep('summary');
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setFormData({
      symptoms: '',
      location: '',
      duration: '',
      previous: '',
    });
    setCurrentStep('symptoms');
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Olá, gostaria de agendar uma consulta.\n\n` +
      `Sintoma: ${formData.symptoms}\n` +
      `Localização: ${formData.location}\n` +
      `Duração: ${formData.duration}\n` +
      `Tratamento anterior: ${formData.previous === 'Sim' ? 'Sim' : 'Não'}`
    );
    
    window.open(`https://wa.me/5567981685349?text=${message}`, '_blank');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'symptoms':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Qual o seu sintoma principal?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Dor intensa', 'Inchaço', 'Dente quebrado', 'Sensibilidade', 'Estética', 'Sangramento'].map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => {
                    updateFormData('symptoms', symptom);
                    nextStep();
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    formData.symptoms === symptom
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'location':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Onde está localizado o problema?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Superior direito', 
                'Superior esquerdo', 
                'Inferior direito', 
                'Inferior esquerdo', 
                'Dentes da frente', 
                'Vários lugares'
              ].map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    updateFormData('location', location);
                    nextStep();
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    formData.location === location
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'duration':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Há quanto tempo está com o problema?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Hoje', 'Alguns dias', 'Uma semana', 'Algumas semanas', 'Meses', 'Anos'].map((duration) => (
                <button
                  key={duration}
                  onClick={() => {
                    updateFormData('duration', duration);
                    nextStep();
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    formData.duration === duration
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'previous':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Já fez algum tratamento anterior?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Sim', 'Não'].map((answer) => (
                <button
                  key={answer}
                  onClick={() => {
                    updateFormData('previous', answer);
                    nextStep();
                  }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    formData.previous === answer
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-700 hover:border-blue-400 hover:bg-blue-500/10'
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'summary':
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Resumo das Informações</h3>
            
            <div className="bg-black p-6 rounded-xl mb-6 text-left border border-gray-800">
              <div className="mb-3">
                <p className="text-blue-400 font-semibold">Sintoma:</p>
                <p className="text-white">{formData.symptoms}</p>
              </div>
              <div className="mb-3">
                <p className="text-blue-400 font-semibold">Localização:</p>
                <p className="text-white">{formData.location}</p>
              </div>
              <div className="mb-3">
                <p className="text-blue-400 font-semibold">Duração:</p>
                <p className="text-white">{formData.duration}</p>
              </div>
              <div>
                <p className="text-blue-400 font-semibold">Tratamento anterior:</p>
                <p className="text-white">{formData.previous === 'Sim' ? 'Sim' : 'Não'}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={resetForm}
                className="flex-1 py-3 px-6 rounded-lg border-2 border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaUndoAlt className="mr-2" />
                Recomeçar
              </motion.button>
              
              <motion.button
                onClick={handleWhatsAppSubmit}
                className="flex-1 button-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="mr-2" />
                Enviar para WhatsApp
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="pre-form" className="container-section bg-black relative overflow-hidden">
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
              Facilitador de Atendimento
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Responda as perguntas abaixo para que possamos entender melhor o seu problema e oferecer um atendimento mais preciso.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-black p-8 rounded-xl shadow-lg border border-gray-800">
            {renderStep()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreForm; 