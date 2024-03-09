import React from 'react';
import { data } from '../data'; 
import './CSS/CarritoOjos.css'; 

function CarritoOjos({ agregarAlCarrito }) {
  // Filtrar los productos para mostrar solo los productos de ojos (ID 15, 16, 17, 18, 20, 21)
  const productosMostrados = data.filter(producto => [15, 16, 17, 18, 20, 21].includes(producto.id));

  return (
    <div className="carrito-ojos">
      <h2 className="titulo-carrito">Ojos</h2> 
      
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

export default CarritoOjos;