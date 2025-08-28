import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../IMAGES/About.jpg'; // À remplacer par votre image
import teamImage from '../IMAGES/sport.jpg';
import  img1 from '../IMAGES/coache.jpg';
import img2 from '../IMAGES/coache2.jpg';
import img3 from '../IMAGES/coache3.jpg'; 
import img4 from '../IMAGES/coache4.jpg'; 
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img 
          src={aboutImage} 
          alt="À propos" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">À PROPOS DE NOUS</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez notre histoire, notre mission et notre passion pour le fitness
          </p>
        </motion.div>
      </div>

      {/* Notre Histoire */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#E53935] mb-4">Notre Histoire</h2>
            <p className="text-lg mb-6">
              Fondé en 2010, notre centre de fitness est né d'une passion commune pour le bien-être et la performance. 
              Ce qui a commencé comme un petit studio est rapidement devenu une référence dans la région.
            </p>
            <p className="text-lg">
              Aujourd'hui, nous accueillons plus de 3000 membres et proposons une gamme complète de services 
              pour répondre à tous les besoins en matière de fitness et de santé.
            </p>
          </div>
          <img 
            src={teamImage} 
            alt="Notre équipe" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </motion.div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nos Valeurs
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaAward className="text-4xl text-[#E53935] mb-4" />,
                title: "Excellence",
                text: "Nous nous engageons à fournir des services de la plus haute qualité."
              },
              { 
                icon: <FaUsers className="text-4xl text-[#E53935] mb-4" />,
                title: "Communauté",
                text: "Nous croyons en la force d'une communauté soudée et motivée."
              },
              { 
                icon: <FaProjectDiagram className="text-4xl text-[#E53935] mb-4" />,
                title: "Innovation",
                text: "Nous adoptons les dernières tendances et technologies du fitness."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Rencontrez Notre Équipe
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {[
    {
      id: 1,
      image: img1, // Chemin vers votre image
      name: "Jean Dupont",
      specialty: "Musculation",
      description: "Coach certifié avec 10 ans d'expérience en powerlifting",
    },
    {
      id: 2,
      image: img2, // Chemin vers votre image
      name: "Marie Lambert",
      specialty: "Yoga",
      description: "Prof de yoga depuis 8 ans, spécialiste en yoga vinyasa",
    },
    {
      id: 3,
      image: img3, // Chemin vers votre image
      name: "Thomas Martin",
      specialty: "CrossFit",
      description: "Ancien compétiteur CrossFit niveau national",
    },
    {
      id: 4,
      image: img4, // Chemin vers votre image
      name: "Sophie Leroy",
      specialty: "Pilates",
      description: "Spécialiste en rééducation par le Pilates",
    },
  ].map((coach) => (
    <motion.div
      key={coach.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: coach.id * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      {/* Image du coach */}
      <div className="h-48 overflow-hidden">
        <img 
          src={coach.image} 
          alt={`Coach ${coach.name}`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Contenu texte */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{coach.name}</h3>
        <p className="text-[#E53935] font-medium">{coach.specialty}</p>
        <p className="text-sm mt-2 text-gray-600">{coach.description}</p>
        
        {/* Bouton optionnel */}
        <button className="mt-4 px-4 py-2 bg-[#E53935] text-white rounded-lg hover:bg-[#c02927] transition-colors text-sm">
          Voir le profil
        </button>
      </div>
    </motion.div>
  ))}
</div>
      </section>
    </div>
  );
};

export default About;