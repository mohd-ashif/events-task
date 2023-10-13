
import React , {useState} from "react";


function Count(){
    const [count ,setCount] =useState(0);

    const handleClick = () => {

        setCount(count+1)

    };
    const onClick = () => {

        setCount(count-1)
        
    };

    
return (
    <div>
        <h1>button:{count}</h1>
        <button onClick={handleClick} >incremet </button>
        <button onClick={onClick} >Decrement</button>
    </div>
)

}

export default Count;


