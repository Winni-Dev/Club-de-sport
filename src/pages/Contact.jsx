import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../IMAGES/contact.jpg'; // À remplacer
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img 
          src={contactImage}
          alt="Contactez-nous" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">CONTACTEZ-NOUS</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </motion.div>
      </div>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-[#E53935] mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Adresse</h3>
                  <p>123 Rue du Fitness, Yopougon Abidjan, Côte D'ivoire </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-[#E53935] mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Téléphone</h3>
                  <p>+225 07 49 800 313</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-[#E53935] mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p>contact@votresalle.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaClock className="text-2xl text-[#E53935] mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Horaires d'ouverture</h3>
                  <p>Lundi-Vendredi: 6h-22h</p>
                  <p>Samedi-Dimanche: 8h-20h</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53935]"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="bg-[#E53935] text-white py-3 px-6 rounded-lg hover:bg-[#c02927] transition-colors w-full"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 md:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Nous trouver</h2>
          <div className="h-96 bg-gray-300 rounded-xl overflow-hidden">
            {/* Intégrez ici votre carte Google Maps ou autre */}
            <iframe 
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.046393518994!2d-4.100970460979054!3d5.333372728618437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c1b2379645df%3A0xed0110374553fb69!2sGROUPE%20SCOLAIRE%20LA%20BAGOUE!5e0!3m2!1sfr!2sci!4v1755511850598!5m2!1sfr!2sci '
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Carte de localisation"
            ></iframe>

            
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;