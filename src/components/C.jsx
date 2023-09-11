import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import es from '../assets/es.jpg'
import ch from '../assets/ch.jpg'
import '../stylesheet/c.css'
import { AiFillHome } from "react-icons/ai";
import { motion } from 'framer-motion'



const C = ({ setUser }) => {
  const [nombre, setNombre] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const [error,setError] = useState(false)

  const handleSubmit = (e) => {

    e.preventDefault()

    if (nombre == "" || contrasenia == "") {
      setError(true)
      return
    }
    setError(false)

    setUser([nombre])
    
  }

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


      <form onSubmit={handleSubmit} className='form'>
            
        <h2><span className='h2span'>L</span>ogin</h2>

      <input 
      type="text" 
      placeholder='user1234'
      value={nombre}
      onChange={e => setNombre(e.target.value)}

      />

      <input 
      type="password"
       placeholder='****'
       value={contrasenia}
      onChange={e => setContrasenia(e.target.value)}
       
       />
      <button>Login</button>

      </form>
      {error && <p>Wrong User Name or Password!</p>}
      

      </div>
      <Link className='regist' to="/register">Register Now</Link>
      <Link className='backing' to="/pagina1"><AiFillHome /></Link>
    </>
  )
}

export default C