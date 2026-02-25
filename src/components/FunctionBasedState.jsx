import {useState } from "react"

export default function FunctionBasedState(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        localStorage.setItem("frmData",JSON.stringify({email: email,password: password}))
    }

    return(
        <>
             <form onSubmit={handleSubmit}>
                   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                   <input type="submit"/>
             </form>
             <button onClick={()=>localStorage.clear()}>Remove Data</button>

        </>
    )
}