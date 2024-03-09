import React from 'react';
import { data } from '../data'; 
import './CSS/CarritoRostro.css'; 

function CarritoRostro({ agregarAlCarrito }) {
  // Filtro de los productos con los IDs especificados para el rostro
  const productosMostrados = data.filter(producto => [22, 23, 24, 25, ].includes(producto.id));

  return (
    <div className="carrito-rostro">
      <h2 className="titulo-carrito">Productos para el rostro</h2> 
      
      <ul className="lista-productos">
        {productosMostrados.map((producto) => (
          <li key={producto.id} className="producto">
            <img 
              src={producto.img} 
              alt={producto.nombreProducto} 
              className="imagen-producto"
              onMouseEnter={(e) => e.target.classList.add('agrandar')}
              onMouseLeave={(e) => e.target.classList.remove('agrandar')}
            /> {/* Imagen del producto */}
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

export default CarritoRostro;