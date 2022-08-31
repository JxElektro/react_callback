import React, { useState } from 'react';
import './App.css';
import Box from './box';


function App() {

  const [count, updateCount] = useState(0);

  function boxClicked(brother) { //
    updateCount(count + 1);
    if (brother === 1) {
      setCount1(count1 + 1);
    } else {
      setCount2(count2 + 1);
    }
  
}


const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

return (
  <div>
    <Box id={1} brotherCount={count2} boxPush={boxClicked} />
    <Box id={2} brotherCount={count1} boxPush={boxClicked} />
    <p>Contador padre : {count}</p>
  </div>
);
}

export default App;
