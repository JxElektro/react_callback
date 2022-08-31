import React, { useState } from 'react';


function Box(props) {
    const [ count , setCount ] = useState(0);  // contador hijo

    function click (){
      props.Push(props.id); // se convierte en boxClicked con el id que corresponda
      setCount (count + 1); // sin este no se muestra abajo en hijo
    }

  return (
    <div onClick={ () => click()}>
      <p>Caja{props.id} </p>    
      <p>Hijo :{count}</p>   
      <p>Diferencia con mi hermano : {count - props.broCount }</p>
    </div> 
  );
}

export default Box;



/* 
- al precionar alguna caja se activa la funcion click
- click determina como push es igual a boxclicked lo emula 
-se coloca el prop segun el id
- la funcion le suma












*/