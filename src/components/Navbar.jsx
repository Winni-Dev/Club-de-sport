// import { Link, useLocation } from 'react-router-dom';


// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className='w-[80%] flex fixed top-0 justify-between px-4 py-3 bg-white z-50 shadow-lg mt-3 rounded-lg'>
//       {/* Logo */}
//       <div className='flex items-center'>
//         <img src="" alt="Logo" className='h-8 mr-2' /> {/* Ajustez la hauteur selon besoin */}
//         <span className='font-bold text-xl text-[#E53935]'>LOGO</span>
//       </div>

//       {/* Liens de navigation */}
//       <ul className='flex items-center gap-6'>
//         <li>
//           <Link 
//             to="/" 
//             className={`transition-colors duration-300 font-medium ${location.pathname === "/" ? 'text-[#E53935] font-bold' : 'text-gray-600 hover:text-[#E53935]'}`}
//           >
//             Accueil
//           </Link>
//         </li>
//         <li>
//           <Link 
//             to="/about" 
//             className={`transition-colors duration-300 font-medium ${location.pathname === "/about" ? 'text-[#E53935] font-bold' : 'text-gray-600 hover:text-[#E53935]'}`}
//           >
//             À propos
//           </Link>
//         </li>
//         <li>
//           <Link 
//             to="/services" 
//             className={`transition-colors duration-300 font-medium ${location.pathname === "/services" ? 'text-[#E53935] font-bold' : 'text-gray-600 hover:text-[#E53935]'}`}
//           >
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link 
//             to="/contact" 
//             className={`transition-colors duration-300 font-medium ${location.pathname === "/contact" ? 'text-[#E53935] font-bold' : 'text-gray-600 hover:text-[#E53935]'}`}
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3 } }
  };

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className='w-[90%] md:w-[80%] flex fixed top-0 justify-between px-4 py-3 bg-white z-50 shadow-lg mt-3 rounded-lg'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src="" alt="Logo" className='h-8 mr-2' /> 
        <span className='font-bold text-xl text-[#E53935]'>LOGO</span>
      </div>

      {/* Menu Desktop */}
      <ul className='hidden md:flex items-center gap-6'>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`transition-colors duration-300 font-medium ${
                location.pathname === to
                  ? 'text-[#E53935] font-bold'
                  : 'text-gray-600 hover:text-[#E53935]'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Bouton Burger (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden text-2xl text-gray-700 focus:outline-none'
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='absolute top-[70px] right-4 bg-white shadow-lg rounded-lg p-6 w-56 md:hidden flex flex-col gap-4'
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 font-medium ${
                  location.pathname === to
                    ? 'text-[#E53935] font-bold'
                    : 'text-gray-600 hover:text-[#E53935]'
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;