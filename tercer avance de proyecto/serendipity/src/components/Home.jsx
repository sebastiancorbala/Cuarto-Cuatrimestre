// Home.jsx
import React, { useState } from 'react';
import './CSS/Home.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import banner1 from './Imagenes/BANNER1.png';
import MasVendidos from './MasVendidos';

import mujer1home from './Imagenes/mujer1home.jpg';
import Menu from './Menu';

function Home() {
  // Estado para el carrito
  const [carrito, setCarrito] = useState([]);
  // Estado para mostrar u ocultar el carrito flotante
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="home">
      <h1 className="titulo">Serendipity</h1>
      <Menu /> {/* Aquí es el componente Menu */}
      <img src={banner1} alt="Banner 1" className="imagen-banner"/>
      <div className="presentacion">
        <h2 className="titulo-presentacion">Bienvenido a Serendipity</h2>
        <p className="parrafo-presentacion">En Serendipity, nos dedicamos a ofrecerte lo mejor en joyería, maquillaje y productos de belleza. 
        Nuestro objetivo es realzar tu belleza natural y hacerte sentir radiante en todo momento. Descubre nuestra amplia gama de productos y déjate sorprender por la magia de la serendipia.</p>
        <hr className="separador" />
      </div>
      {/* Sección del carrito más vendidos */}  
      <MasVendidos agregarAlCarrito={agregarAlCarrito} toggleCarrito={() => setMostrarCarrito(!mostrarCarrito)} mostrarCarrito={mostrarCarrito} />
      
  
      {/* Sección del testimonio */}
      <div className="testimonio">
        <p className="testimonio-texto">“Desde que descubrí Serendipity, mi rutina de belleza ha dado un giro total. Los productos son de alta calidad y el servicio de entrega es rápido y confiable. ¡Recomendado al 100%!”</p>
        <p className="testimonio-autor">— María Gómez</p>
      </div>
      <hr className="separador" />
      
       {/* Nueva sección: Descubre la magia de la belleza */}
       <div className="descripcion-belleza">
        <div className="contenido-belleza">
          <h2 className="titulo-belleza">Descubre la magia de la belleza</h2>
          <p className="parrafo-belleza">En Serendipity, encontrarás productos únicos que realzarán tu belleza de manera especial. Explora nuestra selección y descubre tu nueva joya favorita o esa paleta de maquillaje que tanto has deseado.</p>
        </div>
        <img src={mujer1home} alt="Mujer en Serendipity" className="imagen-belleza" />
      </div>
      <hr className="separador" />

      {/* Sección Sobre nosotros */}
      <div className="sobre-nosotros">
        <h2 className="titulo-sobre-nosotros">Sobre nosotros</h2>
        <p className="parrafo-sobre-nosotros">En Serendipity, nos apasiona resaltar la belleza interior y exterior de cada persona. Nuestra tienda ofrece una cuidadosa selección de joyería única, maquillaje de alta calidad y productos de belleza que te harán sentir radiante en cualquier ocasión. Nos comprometemos a brindarte una experiencia de compra excepcional, con entregas rápidas y un servicio al cliente personalizado. ¡Descubre la magia de Serendipity y déjate sorprender por la belleza que encontrarás!</p>
      </div>

      {/* Sección de iconos de redes sociales */}
      <div className="redes-sociales">
        <h2 className="texto-siguenos">Síguenos en redes sociales</h2>
        <div className="iconos-redes">
          <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icono-facebook" />
          </a>
          <a href="https://www.instagram.com/sebastian_corbala/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icono-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;