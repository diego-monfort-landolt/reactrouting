import { NavLink } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <nav>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)} to='/'>Site A -First Site</NavLink>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina2'>Site b -second Site</NavLink>
 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina3'>Site c -other Site</NavLink>

 <NavLink className={({isActive}) => (isActive ? "activado" : null)}  to='/pagina4'>Site c -other Site</NavLink>
    </nav>
   

  )
}

export default Nav