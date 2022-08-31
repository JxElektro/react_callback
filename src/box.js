import React, { useState } from 'react';


function Box(props) {
    const [ count , setCount ] = useState(0);

    function click (){
      props.boxPush(props.id);
      setCount (count + 1);
    }

  return (
    <div onClick={ () => click()}>
    <div onClick={()=> props.boxPush ()} >
      <p>Caja{props.id} </p>    
      <p>Hijo :{count}</p>   
      <p>Diferencia con mi hermano : {count - props.brotherCount }</p>
      </div>
    </div>
  );
}

export default Box;
