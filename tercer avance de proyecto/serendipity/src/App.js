import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BarraDeArriba from './components/BarraDeArriba';
import Home from './components/Home';
import Productos from './components/Productos';
import Accesorios from './components/Accesorios';
import Labios from './components/Labios';
import Ojos from './components/Ojos';
import Rostro from './components/Rostro';
import Footer from './components/Footer';
import Registro from "./components/Registro";
import DetallesProducto from './components/DetallesProducto'; // Importa el componente DetallesProducto

function App() {
  const agregarAlCarrito = (producto) => {
    console.log('Agregado al carrito:', producto);
    // Aquí se pueden implementar más lógicas
  };

  // Función para mostrar/ocultar el carrito 
  const toggleCarrito = () => {
    console.log('Mostrar/ocultar carrito');
    // Aquí se puede implementar la lógica para mostrar/ocultar el carrito
  };

  return (
    <Router>
      <div className="App">
        <BarraDeArriba />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/accesorios" render={() => <Accesorios agregarAlCarrito={agregarAlCarrito} toggleCarrito={toggleCarrito} />} />
          <Route path="/labios" render={() => <Labios agregarAlCarrito={agregarAlCarrito} toggleCarrito={toggleCarrito} />} />
          <Route path="/ojos" render={() => <Ojos agregarAlCarrito={agregarAlCarrito} toggleCarrito={toggleCarrito} />} />
          <Route path="/rostro" render={() => <Rostro agregarAlCarrito={agregarAlCarrito} />} />
          <Route exact path="/registro" component={Registro} />
          <Route path="/detalles/:id" component={DetallesProducto} /> {/* Ruta para los detalles del producto */}
        </Switch>
        <Footer style={{ paddingBottom: "50px" }} />
      </div>
    </Router>
  );
}

export default App;