import React from 'react';
import { motion } from 'framer-motion';
import serviceHero from '../IMAGES/service.jpg'; 
import service1 from '../IMAGES/service1.jpg'; 
import service2 from '../IMAGES/service2.jpg'; // À remplacer
import service3 from '../IMAGES/service3.jpg';
import service4 from '../IMAGES/service4.jpg';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { IoIosFitness } from 'react-icons/io'; 
import { IoFitness } from "react-icons/io5";

import { MdOutlineSportsMartialArts } from 'react-icons/md';


const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img 
          src={serviceHero} 
          alt="Nos services" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">NOS SERVICES</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez notre gamme complète de services pour transformer votre corps et votre esprit
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Nos Programmes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Musculation",
              icon: <GiWeightLiftingUp className="text-5xl text-[#E53935]" />,
              image: service1,
              description: "Programme complet de musculation avec équipements haut de gamme et coaching personnalisé."
            },
            {
              title: "Cardio Training",
              icon: <IoIosFitness className="text-5xl text-[#E53935]" />,
              image: service2,
              description: "Séances intensives pour améliorer votre endurance et brûler les graisses efficacement."
            },
            {
              title: "Fonctionnel Training",
              icon: <IoFitness className="text-5xl text-[#E53935]" />,
              image: service3,
              description: "Exercices fonctionnels pour renforcer votre corps dans son ensemble et améliorer vos performances quotidiennes."
            },
            {
              title: "Arts Martiaux",
              icon: <MdOutlineSportsMartialArts className="text-5xl text-[#E53935]" />,
              image: service4,
              description: "Découvrez les arts martiaux pour développer discipline, confiance et condition physique."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="bg-[#E53935] text-white py-2 px-6 rounded-lg hover:bg-[#c02927] transition-colors">
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nos Tarifs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basique",
                price: "5000Fcfa",
                features: ["Accès salle", "1 cours/semaine", "Suivi mensuel"]
              },
              {
                name: "Standard",
                price: "3000Fcfa",
                features: ["Accès illimité", "3 cours/semaine", "Suivi hebdo", "Sauna"],
                popular: true
              },
              {
                name: "Premium",
                price: "15000Fcfa",
                features: ["Accès illimité", "Cours illimités", "Coaching perso", "Sauna + Spa"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg ${plan.popular ? "border-2 border-[#E53935]" : ""}`}
              >
                {plan.popular && (
                  <div className="bg-[#E53935] text-white text-center py-1 font-bold">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-[#E53935] mb-6">{plan.price}<span className="text-sm text-gray-500">/mois</span></div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-medium ${plan.popular ? "bg-[#E53935] text-white" : "bg-gray-200"}`}>
                    S'inscrire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;