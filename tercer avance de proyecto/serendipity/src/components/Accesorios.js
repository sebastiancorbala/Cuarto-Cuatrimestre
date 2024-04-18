import React from 'react';
import Menu from './Menu';
import './CSS/Accesorios.css';
import mujerAccesorios1 from './Imagenes/mujerAccesorios1.jpg'; 
import mujerAccesorios2 from './Imagenes/mujerAccesorios2.jpg'; 
import mujerAccesorios3 from './Imagenes/mujerAccesorios3.jpg'; 
import CarritoAccesorios from './CarritoAccesorios';

function Accesorios({ agregarAlCarrito, toggleCarrito }) {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1>
      <Menu />

      <div className="banner-accesorios">
        <img src={mujerAccesorios1} alt="Mujer Accesorios 1" className="banner-img" />
        <img src={mujerAccesorios2} alt="Mujer Accesorios 2" className="banner-img" />
        <img src={mujerAccesorios3} alt="Mujer Accesorios 3" className="banner-img" />
      </div>

      <div className="frase">
        <p>"La belleza de un accesorio está en la mujer que lo usa"</p>
      </div>

      {/* Pasa las funciones como props a CarritoAccesorios */}
      <CarritoAccesorios agregarAlCarrito={agregarAlCarrito} toggleCarrito={toggleCarrito} />
    </div>
  );
}

export default Accesorios;