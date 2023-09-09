import React from 'react'
import { useParams } from 'react-router-dom'

const D = () => {
    const dato= useParams();
  return (
    <div> Site D
        <div>{dato.letra}</div>


    </div>
  )
}

export default D