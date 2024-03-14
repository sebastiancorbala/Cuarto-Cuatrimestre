import React from 'react';
import { data } from '../data'; 
import './CSS/MasVendidos.css';

function MasVendidos({ agregarAlCarrito }) {
  // Puse este filtro para poder elegir qué productos mostrar
  const productosMostrados = data.filter(producto => [1, 2, 3, 4].includes(producto.id));

  return (
    <div className="mas-vendidos">
      <h2 className="titulo-mas-vendidos">Los más vendidos</h2> 
      
      <ul>
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

export default MasVendidos;
