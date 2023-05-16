import React from 'react'
import '../estilos/Galery.css';
import uno from '../../images/1.jpeg'
import cinco from '../../images/5.jpeg'
import quince from '../../images/15.jpeg'
import diecisiete from '../../images/17.jpeg'
import veinte from '../../images/20.jpeg'

export const Galery = () => {

  return (
    <section className='section-images'>
      <img src={uno} alt="Imagen Galeria" />
      <img src={cinco} alt="Imagen Galeria" />
      <img src={quince} alt="Imagen Galeria" />
      <img src={diecisiete} alt="Imagen Galeria" />
      <img src={veinte} alt="Imagen Galeria" />
    </section>
  )
}
