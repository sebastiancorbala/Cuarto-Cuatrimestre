import React from 'react';
import Menu from './Menu'; 
import './CSS/Ojos.css'; 
import mujerOjos1 from './Imagenes/mujerOjos1.jpg'; 
import mujerOjos2 from './Imagenes/mujerOjos2.jpg'; 
import mujerOjos3 from './Imagenes/mujerOjos3.jpg'; 
import CarritoOjos from './CarritoOjos'; 

function Ojos() {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1>
      <Menu /> 



      
      <div className="banner-ojos">
        <img src={mujerOjos1} alt="Mujer Ojos 1" className="banner-img" />
        <img src={mujerOjos2} alt="Mujer Ojos 2" className="banner-img" />
        <img src={mujerOjos3} alt="Mujer Ojos 3" className="banner-img" />
      </div>
      
     
      <div className="frase">
        <p>"El alma que puede hablar con los ojos también puede besar con la mirada"
- Gustavo Adolfo Bécquer</p>
      </div>

    
      <CarritoOjos />
    </div>
  );
}

export default Ojos;