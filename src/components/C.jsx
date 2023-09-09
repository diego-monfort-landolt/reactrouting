import React from 'react'
import { Link } from 'react-router-dom'
import es from '../assets/es.jpg'
import ch from '../assets/ch.jpg'
import react from '../assets/react.svg'
import '../stylesheet/c.css'
import { AiFillHome } from "react-icons/ai";


const C = () => {
  return (
    <>
      <div className='galeriecontainer'>
        <div className='img-container'>
          <img className='gimg' src={es} alt='es' />
          <img src={ch} alt='es' />
          <img src={react} alt='es' />
          <img src={es} alt='es' />
          <img src={es} alt='es' />
          <img className='gimg' src={es} alt='es' />
          <img src={ch} alt='es' />
          <img src={react} alt='es' />
          <img src={es} alt='es' />
          <img src={es} alt='es' />
          <img className='gimg' src={es} alt='es' />
          <img src={ch} alt='es' />
          <img src={react} alt='es' />
          <img src={es} alt='es' />
          <img src={es} alt='es' />
          <img className='gimg' src={es} alt='es' />
          <img src={ch} alt='es' />
          <img src={react} alt='es' />
          <img src={es} alt='es' />
          <img src={es} alt='es' />
        </div>

      </div>
      <Link className='backing' to="/pagina1"><AiFillHome /></Link>
    </>
  )
}

export default C