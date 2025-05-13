import React from 'react'
import { assets } from "../assets/assets"
import { motion } from "framer-motion"
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'

const Header = () => {

 const {user,setShowLogin}=useContext(AppContext);
 const navigate=useNavigate()
 
 const onClickHandler=()=>{
  if(user){
    navigate('/result')
  }else{
    setShowLogin(true)
  }


 }
  

  return (
    <motion.div
      className='flex flex-col justify-center items-center text-center my-20'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best Text to Image Generator</p>
        <img src={assets.star_icon} alt="Star Icon" />
      </motion.div>

      <motion.h1
        className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn <span className='text-blue-600'>Text</span> into <span className='text-blue-600'>Images</span> Instantly
      </motion.h1>

      <motion.p
        className='text-center max-w-xl mx-auto mt-5'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Ignite your imagination with AI—transform your thoughts into stunning visuals in moments, just type and let the magic unfold.
      </motion.p>

      <motion.button onClick={onClickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 p-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt="Star Group Icon" />
      </motion.button>

      <motion.div 
      className='flex flex-wrap justify-center mt-16 gap-3'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      >
        {Array(6).fill("").map((_, index) => (
          <motion.img
            whileHover={{scale:1.05,duration:0.1}}
            key={index}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
            alt={`Sample ${index + 1}`}
            width={70}
          />
        ))}
      </motion.div>

      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      className='mt-2 text-neutral-600'>Generate Images from Imagify</motion.p>
    </motion.div>
  )
}

export default Header
