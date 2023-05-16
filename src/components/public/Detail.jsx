import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {
  
  const [mascota, setMascota] = useState({});
  
  const { id } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharacterById(id)
      .then((data) => setMascota(data))
  }, [])
  


  return (
    <div>
      Soy el Detail
      <Link to={"/"} className='btn btn-primary btn-lg'>Volver</Link>

    </div>
  )
}
