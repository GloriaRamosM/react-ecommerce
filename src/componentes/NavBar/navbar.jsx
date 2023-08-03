import React from 'react';
import '../NavBar/navBar.css';
import CardWidget from '../CardWidget/cardWidget';

function Navbar() {
  return (
    <div className='contenedorNavbar'>
      <nav>
        <div> <img className='Logo' src={require('../imagenes/logotienda.jpg')} alt='logo de la tienda' /> </div>
        <ul className='listadeNavbar'>
          <li><a href="#">Fotos</a> </li>
          <li><a href="#">Modelos de Remeras</a></li>
          <li> <a href="#"> Modelos de medias</a></li>
          <li> <a href="#">Gorras</a></li>
          <li><a href="#"> <CardWidget/> </a></li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar