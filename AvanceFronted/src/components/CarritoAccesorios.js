import React from 'react';
import { data } from '../data'; 
import './CSS/CarritoAccesorios.css'; 

function CarritoAccesorios({ agregarAlCarrito }) {
  //este es el filtro de los productos con los ID especificados
  const productosMostrados = data.filter(producto => [5, 6, 7, 8, 9, 10].includes(producto.id));

  return (
    <div className="carrito-accesorios">
      <h2 className="titulo-carrito">Accesorios</h2> 
      
      <ul className="lista-productos">
        {productosMostrados.map((producto) => (
          <li key={producto.id} className="producto">
            <img 
              src={producto.img} 
              alt={producto.nombreProducto} 
              className="imagen-producto"
              onMouseEnter={(e) => e.target.classList.add('agrandar')}
              onMouseLeave={(e) => e.target.classList.remove('agrandar')}
            /> 
            <div>
              <p>{producto.nombreProducto} - ${producto.precio}</p>
              <button 
                onClick={() => agregarAlCarrito(producto)}
                className="boton-agregar"
              >
                Agregar al carrito
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarritoAccesorios;