import { Component } from "react";

class Event extends Component{
    constructor(){
        super()
        this.consBind = this.consBind.bind(this)
    }
        handleClick = ()=>{
            alert("Hello World")
        }
        handleBind(){
            alert("This is Binding Method")
        }

        consBind(){
            alert("Hello I am constructor Binding")
        }
    render(){
        return(
            <>
               <button onClick={()=>alert('Hello Mr Rishabh')}>Click</button>
               <button onClick={this.handleClick}>Button</button>
               <button onClick={this.handleBind.bind(this)}>Bind Event</button>
               <button onClick={this.consBind}>Constructor Bind</button>
            </>
        )
    }
}
export default Event