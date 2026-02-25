// Conditional Statement in Reactjs

import { useState } from "react"

export default function Condition(){
    const [count,setCount] = useState(0)

    const handleChange = ()=>{
        if(count<5 ){
            setCount(count+1)
        }
        else{
            alert("You can not add more than 4")
        }
    }
    return(
        <>
             <h2>{count}</h2>
             <button onClick={handleChange}>Increment</button>
        </>
    )
}