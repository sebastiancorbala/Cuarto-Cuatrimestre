import React from 'react';
import Menu from './Menu'; 
import './CSS/Rostro.css'; 
import mujerRostro1 from './Imagenes/mujerRostro1.jpg'; 
import mujerRostro2 from './Imagenes/mujerRostro2.jpg'; 
import mujerRostro3 from './Imagenes/mujerRostro3.jpg'; 
import CarritoRostro from './CarritoRostro'; 

function Rostro({ agregarAlCarrito }) {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1> 
      <Menu /> 

      <div className="banner-rostro">
        <img src={mujerRostro1} alt="Mujer Rostro 1" className="banner-img" />
        <img src={mujerRostro2} alt="Mujer Rostro 2" className="banner-img" />
        <img src={mujerRostro3} alt="Mujer Rostro 3" className="banner-img" />
      </div>

      <div className="frase">
        <p>"Con el toque mágico del maquillaje, el rostro femenino se convierte en un lienzo donde la belleza se dibuja con elegancia, revelando la poesía que reside en cada trazo de color delicado."</p>
      </div>

      <div className='seccion-carrito'>
        {/* Componente CarritoRostro */}
        <CarritoRostro agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>
  );
}

export default Rostro;