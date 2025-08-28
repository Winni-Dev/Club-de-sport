// import React from 'react'
// import image1 from '../IMAGES/font.jpg';
// import image2 from '../IMAGES/derriere.png';
// import image3 from '../IMAGES/trois.jpg';
// import visage1 from '../IMAGES/visage1.jpg';
// import visage2 from '../IMAGES/visage2.jpg';
// import visage3 from '../IMAGES/visage3.jpg';
// import visage4 from '../IMAGES/visage4.jpg'

// import { GiWeightLiftingUp } from "react-icons/gi";
// import { IoIosFitness } from "react-icons/io";
// import { IoFitnessSharp } from "react-icons/io5";
// import { MdOutlineSportsMartialArts } from "react-icons/md";
// import { FaStar,FaStarHalfAlt  } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className='w-full '>
//       <div className=' w-full relative '>
//         <div className=' h-screen flex items-center'>
//             <img src={image1} alt="" className=' h-full relative w-full object-cover' />
//             <div className=' absolute h-screen w-full bg-gradient-to-b from-transparent to-black'></div>
//             <div className=' absolute bottom-14 flex justify-around gap-12 w-full'> 
//             <h1 className=' w-[50%] font-bold text-7xl  text-white mt-14'>
//               BIENVENUE SUR <span className='text-[#E53935]'> NOTRE PAGE </span>
//             </h1>
//             <p  className=' w-[35%]  text-white font-mono text-lg flex flex-col gap-5'>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. In molestiae animi reiciendis. Praesentium, possimus ullam. Expedita omnis rem assumenda, iusto voluptates esse provident labore, quisquam at id dolore enim quam?
//               <button className=' bg-[#E53935] cursor-pointer py-2 text-white hover:bg-[#c02927]'>En savoir plus</button>
//             </p>
//             </div>
//         </div>
//          </div>


//          <div className=' h-full pt-24 flex justify-around gap-10 '>
//           <div className="desc  w-[35%] ">
//             <span className=' text-[#c02927] font-bold'>Lorem</span>
//             <h1 className=' text-5xl font-semibold mb-20'>
//               Lorem ipsum dolor sit amet  adipisicing elit. Sed, perspiciatis.
//             </h1>
//             <p className=' text-lg font-mono text-[#3a3a3a] '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis, at nesciunt laudantium tenetur nostrum in earum rem culpa repellat.
//             </p>
//             <button className=' text-white mt-11 py-2 px-12 rounded-lg bg-[#c02927] cursor-pointer  hover:bg-[#eb221f]'>Voir plus</button>
//           </div>
//           <div className="img w-[40%] mt-12 text-[#0000001c] relative font-bold text-9xl">
//              SPORT INTENSIF EFFICACE
//              <img className=' absolute -top-36 ' src={image2} alt="" />
//           </div>
//          </div>



//          <div className=' w-full h-full pt-28 p-10 flex items-center justify-around'>
//           <div className="card rounded-lg border border-[#E0E0E0] shadow h-72 w-64 items-center justify-center cursor-pointer bg-white flex flex-col duration-300 gap-2  hover:scale-105">
//             <GiWeightLiftingUp className=' text-[#c02927] text-6xl '/>
//             <h4 className=' font-bold'>Lorem ipsum dolor sit.</h4>
//             <p className=' p-4 text-[#5c5c5c] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus nulla illum harum sint voluptate</p>
//             {/* <button className=' py-1 px-4 bg-[#FFC107] rounded-lg '>en Savoir plus</button> */}
//           </div>

//                     <div className="card rounded-lg border border-[#E0E0E0] shadow h-72 w-64 items-center justify-center cursor-pointer bg-white flex flex-col duration-300 gap-2  hover:scale-105">
//             <IoIosFitness className=' text-[#c02927] text-6xl '/>
//             <h4 className=' font-bold'>Lorem ipsum dolor sit.</h4>
//             <p className=' p-4 text-[#5c5c5c] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus nulla illum harum sint voluptate</p>
//             {/* <button className=' py-1 px-4 bg-[#FFC107] rounded-lg '>en Savoir plus</button> */}
//           </div>

//                     <div className="card z-30 rounded-lg border border-[#E0E0E0] shadow h-72 w-64 items-center justify-center cursor-pointer bg-white flex flex-col duration-300 gap-2  hover:scale-105">
//             <IoFitnessSharp className=' text-[#c02927] text-6xl '/>
//             <h4 className=' font-bold'>Lorem ipsum dolor sit.</h4>
//             <p className=' p-4 text-[#5c5c5c] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus nulla illum harum sint voluptate</p>
//             {/* <button className=' py-1 px-4 bg-[#FFC107] rounded-lg '>en Savoir plus</button> */}
//           </div>

//                     <div className="card z-30 rounded-lg border border-[#E0E0E0] shadow h-72 w-64 items-center justify-center cursor-pointer bg-white flex flex-col duration-300 gap-2  hover:scale-105">
//             <MdOutlineSportsMartialArts className=' text-[#c02927] text-6xl '/>
//             <h4 className=' font-bold'>Lorem ipsum dolor sit.</h4>
//             <p className=' p-4 text-[#5c5c5c] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus nulla illum harum sint voluptate</p>
//             {/* <button className=' py-1 px-4 bg-[#FFC107] rounded-lg '>en Savoir plus</button> */}
//           </div>
//          </div>



//          <div className=' flex w-full h-screen p-10 py-14 '>
//           <div className="img w-[50%]  flex items-center justify-center">
//             <img className=' object-cover w-full h-full' src={image3} alt="" />
//           </div>
//           <div className="desc w-[50%] flex flex-col items-center justify-around  h-full text-white bg-[#c02927]">
//             <h1 className=' font-bold text-4xl'>GIM & FITNESS</h1>
//             <p className=' p-10 font-mono text-lg '>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, perspiciatis velit accusantium provident, at totam a ut reiciendis ad optio qui sunt laborum sapiente minima tempora fugit delectus dignissimos ipsam!
//             </p>
//             <div className=' w-full p-5 flex justify-around'>
//               <div className='card flex flex-col items-center gap-5 justify-center'>
//               <h1 className=' text-6xl font-bold'>
//                 +3000
//                 </h1>
//                 <span>Menbre</span>
//               </div>

//               <div className='card flex flex-col items-center gap-5 justify-center'>
//               <h1 className=' text-6xl font-bold'>
//                 +80
//                 </h1>
//                 <span className=' ml-5'>class</span>
//               </div>

//               <div className='card flex flex-col items-center gap-5 justify-center'>
//               <h1 className=' text-6xl font-bold'>
//                 +75
//                 </h1>
//                 <span className=' ml-5'>COACH</span>
//               </div>

              
//             </div>

//           </div>
//          </div>

//          <span className=' w-full flex items-center justify-center pb-12 font-bold text-[#E53935] '>
//           <h1 className=' text-4xl underline'>
//             L'avis de certain clients
//           </h1>
//          </span>

//          <div className="avi flex flex-wrap justify-around gap-y-10 w-full pb-10">
//           <div className="aviP px-14 w-1/2 gap-5 flex flex-col">
//             <div className="tete flex justify-around h-10 w-full">
//              <span className=' w-14 h-full rounded-full  border-[#c02927] border'>
//                <img  className=' w-full h-full object-cover rounded-full' src={visage1} alt="" />
//              </span>
//              <span className=' flex w-full h-full items-center justify-start pl-10'>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStarHalfAlt className=' h-full text-[#FFC107] ' />
//              </span>
//             </div>
//             <p className=' text-md text-[#353535] '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Quibusdam temporibus molestiae officia aliquam dolorum odio
//                deserunt vitae, aspernatur ratione sed quidem. Quisquam voluptatibus
//                 corporis provident!
//             </p>
//           </div>

//            <div className="aviP px-14 w-1/2 gap-5 flex flex-col">
//             <div className="tete flex justify-around h-10 w-full">
//              <span className=' w-14 h-full rounded-full  border-[#c02927] border'>
//                <img  className=' w-full h-full object-cover rounded-full' src={visage2} alt="" />
//              </span>
//              <span className=' flex w-full h-full items-center justify-start pl-10'>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStarHalfAlt className=' h-full text-[#FFC107] ' />
//              </span>
//             </div>
//             <p className=' text-md text-[#353535] '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Quibusdam temporibus molestiae officia aliquam dolorum odio
//                deserunt vitae, aspernatur ratione sed quidem. Quisquam voluptatibus
//                 corporis provident!
//             </p>
//           </div>

//           <div className="aviP px-14 w-1/2 gap-5 flex flex-col">
//             <div className="tete flex justify-around h-10 w-full">
//              <span className=' w-14 h-full rounded-full  border-[#c02927] border'>
//                <img  className=' w-full h-full object-cover rounded-full' src={visage3} alt="" />
//              </span>
//              <span className=' flex w-full h-full items-center justify-start pl-10'>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStarHalfAlt className=' h-full text-[#FFC107] ' />
//              </span>
//             </div>
//             <p className=' text-md text-[#353535] '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Quibusdam temporibus molestiae officia aliquam dolorum odio
//                deserunt vitae, aspernatur ratione sed quidem. Quisquam voluptatibus
//                 corporis provident!
//             </p>
//           </div>

//           <div className="aviP px-14 w-1/2 gap-9 flex flex-col">
//             <div className="tete flex justify-around h-10 w-full">
//              <span className=' w-14 h-full rounded-full  border-[#c02927] border'>
//                <img  className=' w-full h-full object-cover rounded-full' src={visage4} alt="" />
//              </span>
//              <span className=' flex w-full h-full items-center justify-start pl-10'>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStar className=' h-full text-[#FFC107] '/>
//               <FaStarHalfAlt className=' h-full text-[#FFC107] ' />
//              </span>
//             </div>
//             <p className=' text-md text-[#353535] '>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Quibusdam temporibus molestiae officia aliquam dolorum odio
//                deserunt vitae, aspernatur ratione sed quidem. Quisquam voluptatibus
//                 corporis provident!
//             </p>
//           </div>

//          </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../IMAGES/font.jpg';
import image2 from '../IMAGES/derriere.png';
import image3 from '../IMAGES/trois.jpg';
import visage1 from '../IMAGES/visage1.jpg';
import visage2 from '../IMAGES/visage2.jpg';
import visage3 from '../IMAGES/visage3.jpg';
import visage4 from '../IMAGES/visage4.jpg';
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 1.2,
            delay: delay * 0.2,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Counter = ({ end, duration = 3 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 }
      });

      let start = 0;
      const increment = end / (duration * 60); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [end, inView, controls, duration]);

  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-4xl lg:text-6xl font-bold"
    >
      +{count}
    </motion.span>
  );
};

export default function Home() {
  return (
    <div className='w-full overflow'>
      {/* Hero Section */}
      <div className='w-full relative'>
        <div className='h-screen flex items-center'>
          <img 
            src={image1} 
            alt="" 
            className='h-full relative w-full object-cover' 
          />
          <div className='absolute h-screen w-full bg-gradient-to-b from-transparent to-black'></div>
          
          <AnimatedSection delay={0} className='absolute bottom-14 w-full px-4'>
            <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-12 w-full'>
              <motion.h1 
                className='w-full lg:w-[50%] font-bold text-4xl sm:text-5xl lg:text-7xl text-white mt-14'
              >
                BIENVENUE SUR <span className='text-[#E53935]'>NOTRE PAGE</span>
              </motion.h1>
              
              <motion.div 
                className='w-full lg:w-[35%] text-white font-mono mt-14 text-lg flex flex-col gap-5'
              >
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In molestiae animi reiciendis.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-[#E53935] cursor-pointer py-2 text-white hover:bg-[#c02927] max-w-[200px]'
                >
                  En savoir plus
                  <link rel="stylesheet" href="" />
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* About Section */}
      <AnimatedSection delay={0.5} className='h-full pt-12 lg:pt-24 px-4 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-10'>
          <div className="desc w-full lg:w-[35%] px-4 lg:px-0 z-30">
            <span className='text-[#c02927] font-bold'>Lorem</span>
            <h1 className='text-3xl lg:text-5xl font-semibold mb-8 lg:mb-20'>
              Lorem ipsum dolor sit amet adipisicing elit. Sed, perspiciatis.
            </h1>
            <p className='text-lg font-mono text-[#3a3a3a]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis, at nesciunt laudantium tenetur nostrum in earum rem culpa repellat.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='text-white mt-8 lg:mt-11 py-2 px-8 lg:px-12 rounded-lg bg-[#c02927] z-40 cursor-pointer hover:bg-[#eb221f]'
            >
              Voir plus
            </motion.button>
          </div>
          
          <div className="img w-full  lg:w-[40%]  text-6xl mb-4 mt-0 lg:mt-12 text-[#0000001c] relative font-bold  sm:text-6xl lg:text-8xl xl:text-9xl px-4 lg:px-0">
            <h1 className=' leading-28'>SPORT <br />  INTENSIF <br /> EFFICACE</h1>
            <img 
              className='absolute -top-24 lg:-top-36 w-full -ml-14 lg:ml-0 h-auto' 
              src={image2} 
              alt="" 
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={1} className='w-full h-full pt-12 lg:pt-28 px-4 lg:p-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {[
            { icon: <GiWeightLiftingUp className='text-[#c02927] text-5xl lg:text-6xl'/>, title: "Lorem ipsum dolor sit." },
            { icon: <IoIosFitness className='text-[#c02927] text-5xl lg:text-6xl'/>, title: "Lorem ipsum dolor sit." },
            { icon: <IoFitnessSharp className='text-[#c02927] text-5xl lg:text-6xl'/>, title: "Lorem ipsum dolor sit." },
            { icon: <MdOutlineSportsMartialArts className='text-[#c02927] text-5xl lg:text-6xl'/>, title: "Lorem ipsum dolor sit." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="card z-30 rounded-xl border border-gray-200 shadow-lg h-64 lg:h-72 w-full items-center justify-center cursor-pointer bg-white flex flex-col gap-4 hover:shadow-xl p-6 transition-all"
            >
              {item.icon}
              <h4 className='font-bold text-center text-lg'>{item.title}</h4>
              <p className='text-[#5c5c5c] text-sm lg:text-base text-center'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque natus nulla illum harum sint voluptate
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection delay={1.5} className='flex flex-col lg:flex-row w-full h-auto lg:h-screen p-4 lg:p-10 py-8 lg:py-14'>
        <div className="img w-full lg:w-[50%] h-64 lg:h-auto flex items-center justify-center overflow-hidden">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 1.5,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            className='object-cover w-full h-full'
            src={image3} 
            alt="" 
          />
        </div>
        <div className="desc w-full lg:w-[50%] flex flex-col items-center justify-around h-full text-white bg-[#c02927] p-6 lg:p-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            className='font-bold text-2xl lg:text-4xl mt-4 lg:mt-0'
          >
            GIM & FITNESS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            className='p-4 lg:p-10 font-mono text-sm lg:text-lg text-center'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, perspiciatis velit accusantium provident, at totam a ut reiciendis ad optio qui sunt laborum sapiente minima tempora fugit delectus dignissimos ipsam!
          </motion.p>
          
          <div className='w-full p-2 lg:p-5 grid grid-cols-3 gap-4'>
            {[
              { value: 3000, label: "Menbre" },
              { value: 80, label: "class" },
              { value: 75, label: "COACH" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8,
                    delay: 0.6 + (index * 0.2),
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                className='card flex flex-col items-center gap-3 lg:gap-5 justify-center'
              >
                <Counter end={stat.value} duration={2} />
                <span className='text-sm lg:text-base'>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={2} className='w-full px-4 lg:px-0 py-12 lg:py-20 bg-gray-50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
          className='w-full flex items-center justify-center pb-8 lg:pb-12 font-bold text-[#E53935]'
        >
          <h1 className='text-2xl lg:text-4xl underline decoration-2 underline-offset-8'>
            L'avis de nos clients
          </h1>
        </motion.div>

        <div className="avi flex flex-wrap justify-center gap-6 lg:gap-8 w-full pb-8 lg:pb-10 px-4 lg:px-8">
          {[
            { img: visage1, name: "Jean D." },
            { img: visage2, name: "Marie L." },
            { img: visage3, name: "Pierre T." },
            { img: visage4, name: "Sophie M." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: { 
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#c02927] overflow-hidden">
                    <img className='w-full h-full object-cover' src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className='text-[#FFC107]' />
                      ))}
                      <FaStarHalfAlt className='text-[#FFC107]' />
                    </div>
                  </div>
                </div>
                <p className='text-gray-600'>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quibusdam temporibus molestiae officia aliquam dolorum odio
                  deserunt vitae, aspernatur ratione sed quidem."
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}