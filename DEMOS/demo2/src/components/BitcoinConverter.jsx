import React, { useState } from 'react';
import axios from 'axios'; //descargue e importe axios para que pidiera convertir el bitcoin
import './BitcoinConverter.css'; 

const BitcoinConverter = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState('');
  const [conversionResult, setConversionResult] = useState(null);

   // esta funcion es la que maneja el cambio del bitcoin
  const handleChange = (event) => {
    setBitcoinAmount(event.target.value);
  };

  const convertBitcoin = async () => {
    try {
         // este const de aca abajo realiza una solicitud HTTP para obtener los datos de la tasa de cambio
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,mxn` // Añadimos la moneda mexicana (MXN) a la consulta de la API
      );
      const bitcoinData = response.data.bitcoin;
      const usdRate = bitcoinData.usd;
      const eurRate = bitcoinData.eur;
      const mxnRate = bitcoinData.mxn; // tasa de cambio en pesos mexicanos
// aca calcula el resultado de la conversion en cada moneda
      const usdResult = bitcoinAmount * usdRate;
      const eurResult = bitcoinAmount * eurRate;
      const mxnResult = bitcoinAmount * mxnRate; // aca se calcula el resultado en pesos mexicanos

      setConversionResult({
        usd: usdResult,
        eur: eurResult,
        mxn: mxnResult, 
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bitcoin-converter">
      <h2 className='textobitcoin'>Bitcoin Converter</h2>
      <input
        type="number"
        value={bitcoinAmount}
        onChange={handleChange}
        placeholder="Enter Bitcoin amount"
      />
      <button onClick={convertBitcoin}>Convert</button>
      {conversionResult && (
        <div className="conversion-results">
          <p>{bitcoinAmount} Bitcoin is equivalent to:</p>
          <p>USD: {conversionResult.usd}</p>
          <p>EUR: {conversionResult.eur}</p>
          <p>MXN: {conversionResult.mxn}</p> 
        </div>
      )}
    </div>
  );
};

export default BitcoinConverter;