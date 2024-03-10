import React from 'react';
import BitcoinConverter from './components/BitcoinConverter';
import './App.css'; 

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${require('./components/fondo.jpeg')})` }}>
      <h1 className="title">Calculadora de Conversión de Bitcoin</h1>
      <BitcoinConverter />
    </div>
  );
}

export default App;