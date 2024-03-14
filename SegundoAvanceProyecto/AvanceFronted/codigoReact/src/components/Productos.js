import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './CSS/Productos.css'; // Importa el archivo CSS para estilos específicos de Productos
import Menu from './Menu'; 
import mujer1productos from './Imagenes/mujer1productos.jpg';
import categoriaAccesorios from './Imagenes/categoriaAccesorios.jpg';
import categoriaLabios from './Imagenes/categoriaLabios.jpg';
import categoriaOjos from './Imagenes/categoriaOjos.jpg';
import categoriaRostro from './Imagenes/categoriaRostro.jpg';

function Productos() {
  return (
    <div className="productos">
      <h1 className="titulo">Serendipity</h1>

      <div className="menu-productos">
        <Menu /> {/* Aqui es el componente Menu */}
      </div>

      <div className="foto-frase">
        <div className="imagen-mujer1">
          <img src={mujer1productos} alt="Mujer de la sección de arriba" />
        </div>
        <div className="texto-frase">
          <p>"Comprender la belleza significa poseerla"</p>
          <p>- Wilhelm Lübke</p>
        </div>
      </div>

      {/* Seccion de Categorias */}
      <div className="categorias">
        <h2 className="titulo-categorias">Categorías</h2>
        <hr className="linea-separadora" />

        {/* Imagenes de categorias y botones */}
        <div className="categorias-container">
          <div className="categoria">
            <img src={categoriaAccesorios} alt="Accesorios" className="categoria-img" />
            <Link to="/accesorios" className="categoria-boton">Accesorios</Link> {/* Utiliza Link en lugar de botón */}
          </div>
          <div className="categoria">
            <img src={categoriaLabios} alt="Labios" className="categoria-img" />
            <Link to="/labios" className="categoria-boton">Labios</Link> 
          </div>
          <div className="categoria">
            <img src={categoriaOjos} alt="Ojos" className="categoria-img" />
            <Link to="/ojos" className="categoria-boton">Ojos</Link> 
          </div>
          <div className="categoria">
            <img src={categoriaRostro} alt="Rostro" className="categoria-img" />
            <Link to="/rostro" className="categoria-boton">Rostro</Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;