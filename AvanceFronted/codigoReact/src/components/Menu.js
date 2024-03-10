import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CSS/Menu.css'; // Importa el archivo CSS para estilos específicos del menú

function Menu() {
  const location = useLocation();

  return (
    <ul className="menu">
      <li><Link to="/" className={location.pathname.toLowerCase() === '/' ? 'active' : ''}>Inicio</Link></li>
      <li><Link to="/productos" className={location.pathname.toLowerCase() === '/productos' ? 'active' : ''}>Productos</Link></li>
      <li><Link to="/accesorios" className={location.pathname.toLowerCase() === '/accesorios' ? 'active' : ''}>Accesorios</Link></li>
      <li><Link to="/labios" className={location.pathname.toLowerCase() === '/labios' ? 'active' : ''}>Labios</Link></li>
      <li><Link to="/ojos" className={location.pathname.toLowerCase() === '/ojos' ? 'active' : ''}>Ojos</Link></li>
      <li><Link to="/rostro" className={location.pathname.toLowerCase() === '/rostro' ? 'active' : ''}>Rostro</Link></li>
    </ul>
  );
}

export default Menu;