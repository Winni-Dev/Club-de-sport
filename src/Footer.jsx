// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         <div className="grid md:grid-cols-4 gap-12">
          
//           {/* Logo et description */}
//           <div>
//             <div className="flex items-center mb-4">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Logo"
//                 className="h-10 mr-2"
//               />
//               <span className="text-2xl font-bold text-[#E53935]">LOGO</span>
//             </div>
//             <p className="mb-6">
//               Votre salle de sport premium offrant des équipements de qualité et des coachs professionnels pour vous accompagner dans votre transformation.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#"><FaFacebook className="text-xl hover:text-[#E53935]" /></a>
//               <a href="#"><FaInstagram className="text-xl hover:text-[#E53935]" /></a>
//               <a href="#"><FaTwitter className="text-xl hover:text-[#E53935]" /></a>
//               <a href="#"><FaYoutube className="text-xl hover:text-[#E53935]" /></a>
//             </div>
//           </div>

//           {/* Liens rapides */}
//           {/* <div>
//             <h3 className="text-xl font-bold mb-6 text-[#E53935]">Liens rapides</h3>
//             <ul className="space-y-3">
//               <li><Link to="/" className="hover:text-[#E53935]">Accueil</Link></li>
//               <li><Link to="/about" className="hover:text-[#E53935]">À propos</Link></li>
//               <li><Link to="/services" className="hover:text-[#E53935]">Services</Link></li>
//               <li><Link to="/contact" className="hover:text-[#E53935]">Contact</Link></li>
//               <li><a href="#" className="hover:text-[#E53935]">Blog</a></li>
//             </ul>
//           </div> */}

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[#E53935]">Nos Services</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="hover:text-[#E53935]">Musculation</a></li>
//               <li><a href="#" className="hover:text-[#E53935]">Cardio Training</a></li>
//               <li><a href="#" className="hover:text-[#E53935]">Cours collectifs</a></li>
//               <li><a href="#" className="hover:text-[#E53935]">Coaching personnel</a></li>
//               <li><a href="#" className="hover:text-[#E53935]">Nutrition</a></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-bold mb-6 text-[#E53935]">Newsletter</h3>
//             <p className="mb-4">
//               Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Votre email"
//                 className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#E53935] hover:bg-[#c02927] px-4 py-2 rounded-r-lg transition-colors"
//               >
//                 OK
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//           <p>&copy; {new Date().getFullYear()} Votre Salle de Sport. Tous droits réservés.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
// import logo from '../IMAGES/logo.png'; // À remplacer
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img src='' alt="Logo" className="h-10 mr-2" />
              <span className="text-2xl font-bold text-[#E53935]">LOGO</span>
            </div>
            <p className="mb-6">
              Votre salle de sport premium offrant des équipements de qualité et des coachs professionnels pour vous accompagner dans votre transformation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook className="text-xl" />, url: "#" },
                { icon: <FaInstagram className="text-xl" />, url: "#" },
                { icon: <FaTwitter className="text-xl" />, url: "#" },
                { icon: <FaYoutube className="text-xl" />, url: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="hover:text-[#E53935] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#E53935]">Liens rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#E53935] transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-[#E53935] transition-colors">À propos</Link></li>
              <li><Link to="/services" className="hover:text-[#E53935] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#E53935] transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-[#E53935] transition-colors">Blog</Link></li>
            </ul>
            
          </motion.div> */}

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#E53935]">Nos Services</h3>
            <ul className="space-y-3">
              <li  className="hover:text-[#E53935] transition-colors">Musculation</li>
              <li className="hover:text-[#E53935] transition-colors">Cardio Training</li>
              <li className="hover:text-[#E53935] transition-colors">Cours collectifs</li>
              <li className="hover:text-[#E53935] transition-colors">Coaching personnel</li>
              <li className="hover:text-[#E53935] transition-colors">Nutrition</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#E53935]">Newsletter</h3>
            <p className="mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 w-full bg-white rounded-l-lg focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-[#E53935] hover:bg-[#c02927] px-4 py-2 rounded-r-lg transition-colors"
              >
                OK
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Votre Salle de Sport. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;