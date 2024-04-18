import React, { useState } from 'react';
import { data } from '../data';
import './CSS/MasVendidos.css';

function CarritoLabios({ agregarAlCarrito }) {
  const productosMostrados = data.filter(producto => [3, 4, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].includes(producto.id));
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarProductoAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    agregarAlCarrito(producto);
  };

  const eliminarProductoDelCarrito = (id) => {
    const nuevoCarrito = carrito.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter(item => item.cantidad > 0);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const handleCompra = () => {
    alert('Funcionalidad de compra aún no implementada');
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };
  return (
    <div className="mas-vendidos">
      <h2 className="titulo-mas-vendidos">Labios</h2>

      <div className="container-icon" onClick={toggleCarrito}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="icon-cart"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="count-products">
          <span id="contador-productos">{carrito.length}</span>
        </div>
      </div>

      <div className={`container-cart-products ${mostrarCarrito ? 'show-cart' : 'hide-cart'}`}>
        {carrito.length === 0 ? (
          <p className="cart-empty">El carrito está vacío</p>
        ) : (
          <div>
            {carrito.map((producto) => (
              <div key={producto.id} className="cart-product">
                <div className="info-cart-product">
                  <span className="cantidad-producto-carrito">{producto.cantidad}</span>
                  <p className="titulo-producto-carrito">{producto.nombreProducto}</p>
                  <span className="precio-producto-carrito">${producto.precio}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-close"
                  onClick={() => eliminarProductoDelCarrito(producto.id)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total:</h3>
              <span className="total-pagar">${calcularTotal()}</span>
              <button className="comprar-button" onClick={handleCompra}>
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="productos-container">
        {productosMostrados.map((producto) => (
          <div key={producto.id} className="producto">
            <img
              src={producto.img}
              alt={producto.nombreProducto}
              className="imagen-producto"
              onMouseEnter={(e) => e.target.classList.add('agrandar')}
              onMouseLeave={(e) => e.target.classList.remove('agrandar')}
            />
            <div className="producto-info">
              <p>{producto.nombreProducto}</p>
              <p>${producto.precio}</p>
              <button
                onClick={() => {
                  agregarProductoAlCarrito(producto);
                  agregarAlCarrito(producto); // Llama a la función padre para agregar al carrito
                }}
                className="boton-agregar"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarritoLabios;