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

function App() {
  return (
    <Router>
      <div className="App">
        <BarraDeArriba /> 
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/productos" component={Productos} /> 
          <Route path="/accesorios" component={Accesorios} /> 
          <Route path="/labios" component={Labios} />
          <Route path="/ojos" component={Ojos} /> 
          <Route path="/rostro" component={Rostro} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;