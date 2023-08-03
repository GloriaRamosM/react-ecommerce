import React from 'react';
import '../estilos/navbar.css';


function Navbar() {
  return (
    <div className='contenedorNavbar'>
      <nav>
        <div> <img className='Logo' src={require('../imagenes/logotienda.jpg')} alt='logo de la tienda' /> </div>
        <ul className='listadeNavbar'>
          <li>Imagenes</li>
          <li>Modelos de Remeras</li>
          <li>Modelos de medias</li>
          <li>Gorras</li>
          <li>Carrito</li>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar