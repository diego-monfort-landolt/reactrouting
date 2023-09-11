import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/diego1.jpg'
import bilder from '../assets/testimonio-diego.jpg'
import '../stylesheet/a.css'

const A = () => {
 
  return (
    <>
    
      <div className='homecontainer'>
        <h1><span>Y</span>our <span>W</span>elcome</h1>
        <di className="homeimg">
          <img src={home} alt="home-picture" />
        </di>
      </div>
      <div className='maincontainer'>
        <div className='ueberschrift'>
          <h2>React Routing Tests...</h2>
        </div>
        <img className='ueberschriftimg' src={bilder} alt='foto' />
        <Link className='ueberschriftlink' to='/pagina3'>
          <button className='btn'>See More Pictures</button>
        </Link>

      </div>

    </>
  )
}

export default A