import React from 'react';
import Menu from './Menu'; // Importa el componente de menu
import './CSS/Accesorios.css'; // Importa el archivo CSS para estilos específicos de Accesorios
import mujerAccesorios1 from './Imagenes/mujerAccesorios1.jpg'; 
import mujerAccesorios2 from './Imagenes/mujerAccesorios2.jpg'; 
import mujerAccesorios3 from './Imagenes/mujerAccesorios3.jpg'; 
import CarritoAccesorios from './CarritoAccesorios'; 

function Accesorios() {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1> {/* Tttulo "Serendipity" */}
      <Menu /> {/* Componente de menú */}

      {/* Seccion de imagenes de accesorios */}
      <div className="banner-accesorios">
        <img src={mujerAccesorios1} alt="Mujer Accesorios 1" className="banner-img" />
        <img src={mujerAccesorios2} alt="Mujer Accesorios 2" className="banner-img" />
        <img src={mujerAccesorios3} alt="Mujer Accesorios 3" className="banner-img" />
      </div>

      {/* Frase inspiradora */}
      <div className="frase">
        <p>"La belleza de un accesorio está en la mujer que lo usa"</p>
      </div>

      {/* Componente CarritoAccesorios */}
      <CarritoAccesorios />
    </div>
  );
}

export default Accesorios;