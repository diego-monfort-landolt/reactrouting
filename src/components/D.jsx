import React from 'react'
import { useParams } from 'react-router-dom'

const D = () => {
    const dato= useParams();
  return (
    <div> 
        <div>{dato.letra}</div>


    </div>
  )
}

export default D