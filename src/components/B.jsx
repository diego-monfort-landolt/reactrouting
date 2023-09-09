import React from 'react'
import devabout from '../assets/testimonio-diego.jpg';
import '../stylesheet/b.css'

const B = () => {
  return (
    <>
        <div className='uebermich'>
        <h2>About Me</h2>
        <div className='aboutmeimg'>
          <div className='border'></div>
          <img className='aimg' src={devabout} alt='devabout' />
        </div>

          </div>
    </>
  )
}

export default B