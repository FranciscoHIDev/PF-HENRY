import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const favorites = () => {

  const favoritosGuardados = useSelector((state)=>state.fav)
  //console.log("favoritos guardados = " + favoritosGuardados)
  

  return (
    <div>favoritos</div>
  )
}

export default favorites