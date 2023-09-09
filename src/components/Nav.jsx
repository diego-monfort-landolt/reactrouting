import { NavLink } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <nav>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)} to='/'>Home</NavLink>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina2'>About Me</NavLink>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina3'>Galerie</NavLink>

 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina4/G'>Site D -other Site</NavLink>
    </nav>
   

  )
}

export default Nav