import React from 'react'
import RickAndMortyImage from '../../images/rick-and-morty.png';

export const Footer = () => {

  const year = new Date().getFullYear();

  const autor = "Martin Suarez";
  const repo = 'https://github.com/martinsuarez14/rick-and-morty-react';
  const github = 'https://github.com/martinsuarez14';
  const linkedin = 'https://www.linkedin.com/in/suarez-martin/';

  return (
    <footer className="container-fluid">
      <div className="text-center">
        <a href="/" className='image-container'>
          <img
            style={{ width: '3rem' }}
            className='image-footer'
            src={RickAndMortyImage}
            alt="Logo Footer" />
        </a>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className="nav-item">
            <a className="text-body-secondary" href={repo}>Repositorio</a>
          </li>
          <li>
            <a className="text-body-secondary" href={github}>GitHub</a>
          </li>
          <li>
            <a className="text-body-secondary" href={linkedin}>LinkedIn</a>
          </li>
        </ul>
        <p className="text-body-secondary">&copy; {autor} {year}</p>
      </div>
    </footer>
  )
}
