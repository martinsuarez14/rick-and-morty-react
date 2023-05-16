import React, { useEffect, useState } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service'

export const Finder = () => {

  const [personajes, setPersonajes] = useState([])
  const [tablaPersonajes, setTablaPersonajes] = useState([])
  const [busqueda, setBusqueda] = useState([])

  const getPersonajes = () => {
    RickAndMortyService.getAllCharacters()
      .then((data) => {
        setPersonajes(data)
        setTablaPersonajes(data)
      })
  }

  useEffect(() => {
    getPersonajes();
  }, [personajes])
  

  const handleChange = (e) => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaPersonajes.filter((e) => {
      if (e.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return e;
      }
    });
    setPersonajes(resultadoBusqueda);
  }


  return (
    <div>
      <div className='containerInput'>
        <input
          type="text"
          className='form-control inputBuscar'
          value={busqueda}
          placeholder='Find by name'
          onChange={handleChange}
        />
        <button className='btn btn-success'>
          Buscar
        </button>
      </div>
      <div className='table-responsive'>
        <table className='table table-sm table-bordered'>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Especie</th>
            </tr>
          </thead>
          <tbody>
            {personajes &&
              personajes.map((pj) => (
                <tr key={pj.id}>
                  <td><img src={pj.image} alt="" /></td>
                  <td>{pj.name}</td>
                  <td>{pj.species}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
