import React from 'react';
import Menu from './Menu';
import './CSS/Labios.css';
import mujerLabios1 from './Imagenes/mujerLabios1.jpeg';
import mujerLabios2 from './Imagenes/mujerLabios2.jpg';
import mujerLabios3 from './Imagenes/mujerLabios3.jpg';
import CarritoLabios from './CarritoLabios';

function Labios({ agregarAlCarrito, toggleCarrito }) {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1>
      <Menu />
      <div className="banner-labios">
        <img src={mujerLabios1} alt="Mujer Labios 1" className="banner-img" />
        <img src={mujerLabios2} alt="Mujer Labios 2" className="banner-img" />
        <img src={mujerLabios3} alt="Mujer Labios 3" className="banner-img" />
      </div>
      {/* Frase inspiradora */}
      <div className="frase">
        <p>"En los labios de una mujer, el color es el poema que pinta la sonrisa del alma."</p>
      </div>
      {/* Pass the props to CarritoLabios */}
      <CarritoLabios agregarAlCarrito={agregarAlCarrito} toggleCarrito={toggleCarrito} />
    </div>
  );
}

export default Labios;