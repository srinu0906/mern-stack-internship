// To make a counter app sing useState
import { useState } from "react";

const Counter = () =>{
    // let count = 0;
    const [count,setCount] = useState(0);
    const increaseCount =() =>{
        // count++;
        // console.log('Count increased by 1');
        setCount(count + 1);
        console.log('course',count)
    }

    return <>
     <h1>Hello from counter</h1>
     <h2>{count}</h2>
     <button  onClick={increaseCount}> Click Me</button>
    </>
    
}

export default Counter;