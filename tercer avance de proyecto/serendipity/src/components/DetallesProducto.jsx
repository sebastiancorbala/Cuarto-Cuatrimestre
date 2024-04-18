import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import './CSS/DetallesProducto.css';
import categoriaAccesorios from './Imagenes/categoriaAccesorios.jpg';
import categoriaLabios from './Imagenes/categoriaLabios.jpg';
import categoriaOjos from './Imagenes/categoriaOjos.jpg';
import categoriaRostro from './Imagenes/categoriaRostro.jpg';

function DetallesProducto({ match }) {
  const productoId = parseInt(match.params.id);
  const producto = data.find(producto => producto.id === productoId);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="producto-info">
        <div className="producto-imagen">
          <h2 className="producto-titulo">{producto.nombreProducto}</h2>
          <img src={producto.img} alt={producto.nombreProducto} className="producto-img" />
          <p className="producto-descripcion">{producto.descripcion}</p>
          <p className="producto-precio">Precio: ${producto.precio}</p>
        </div>
      </div>
      {producto.qrImg && (
        <div className="qr-container">
          <h3>Código QR</h3>
          <img src={producto.qrImg} alt="Código QR" className="qr-img" />
        </div>
      )}
      
      {/* Seccion de Categorias */}
      <div className="categorias">
        <h2 className="titulo-categorias">Ve más de nuestras diferentes categorías</h2>
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

export default DetallesProducto;