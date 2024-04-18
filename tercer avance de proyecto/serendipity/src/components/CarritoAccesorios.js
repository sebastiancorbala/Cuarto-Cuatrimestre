import React, { useState } from 'react';
import { data } from '../data';
import './CSS/CarritoAccesorios.css';

function CarritoAccesorios({ toggleCarrito, agregarAlCarrito }) {
  const productosMostrados = data.filter(producto => [5, 6, 7, 8, 9, 10].includes(producto.id));
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Agregamos el estado para mostrar/ocultar el carrito

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
    // Aquí iría la lógica para realizar la compra
  };

  return (
    <div className="carrito-accesorios">
      <h2 className="titulo-carrito-accesorios">Accesorios</h2>

      <div className="container-icon" onClick={() => setMostrarCarrito(!mostrarCarrito)}> {/* Cambiamos toggleCarrito por setMostrarCarrito */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="icon-cart"
        >
          {/* Aquí iría el icono del carrito */}
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
                  <p className="titulo-producto-carrito">{producto.nombre}</p>
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
              alt={producto.nombre}
              className="imagen-producto"
              onMouseEnter={(e) => e.target.classList.add('agrandar')}
              onMouseLeave={(e) => e.target.classList.remove('agrandar')}
            />
            <div className="producto-info">
              <p>{producto.nombre}</p>
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

export default CarritoAccesorios;