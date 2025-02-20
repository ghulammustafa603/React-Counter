import React,{useState} from "react";
import './Counter.css'
const Counter=()=>
{
    const [count,setcount]=useState(0)
    return(

        <div className="container">
            <p id="text">You have clicked {count} times</p>
            <button id="b1" onClick={()=>{setcount(count+1)}
            }>Click me</button>
        </div>

    )

}
export default Counter