import React, { useState } from 'react';
import './App.css';


function App() {
  const [coin, setCoin] = useState(0);
  const [bill, setBill] = useState(0);


  return (
    <div> <h1 className='box'> " Todo fue diversion hasta que intente usar callbacks " - Jhen</h1>
      <div className='box'>
        <h3>Monedas</h3>
        <button id='50'  className='coin' onClick={() => setCoin(coin + 50)}>50</button>
        <button id='100' className='coin' onClick={() => setCoin(coin + 100)}>100</button>
        <button id='500'  className='coin' onClick={() => setCoin(coin + 500)}>500</button>
      </div>
      <div className='box'>
        <h3>Billetes</h3>

        <button id='1000'  className='bill' onClick={() => setBill(bill + 1000)}>1000</button>
        <button id='5000'  className='bill' onClick={() => setBill(bill + 5000)}>5000</button>
        <button id='10000' className='bill' onClick={() => setBill(bill + 10000)}>10000</button>
      </div>
      <div className='box'>
        <h3>Monto Total  :</h3>
        <h2>{(bill+coin)}</h2>
      </div>
      <div className='box'>
        <h4>Diferencial Monedas:{(coin-bill)} </h4>
      </div>
      <div className='box'>
        <h4>Diferencial Billetes: {(bill-coin)}</h4>
      </div>
    </div>
  );
}

export default App;
