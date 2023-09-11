import React from 'react'
import { Link } from 'react-router-dom'
import es from '../assets/es.jpg'
import ch from '../assets/ch.jpg'
import '../stylesheet/c.css'
import { AiFillHome } from "react-icons/ai";
import { motion } from 'framer-motion'


const C = () => {


  return (
    <>
      <div className='galeriecontainer'>
        <div className='img-container'>
          <motion.img
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            src={es}
          />

          <motion.img
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            src={ch}
          />
          
            
      </div>
      </div>
      <Link className='backing' to="/pagina1"><AiFillHome /></Link>
    </>
  )
}

export default C