import React, { useState } from 'react';
import './App.css';
import Box from './box';


function App() {

  const [count, updateCount] = useState(0); // contador padre

  function boxClicked(gato) { // emulado en box
    updateCount(count + 1);  // suma contador padre
    if (gato === 1) {       // suma a alguno de los hijos
      setCount1(count1 + 1);
    } else {
      setCount2(count2 + 1);
    }
  }

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Box id={1} broCount={count2} Push={boxClicked} /> 
      <Box id={2} broCount={count1} Push={boxClicked} />
      <p>Contador padre : {count}</p>
    </div>
  );
}

export default App;
