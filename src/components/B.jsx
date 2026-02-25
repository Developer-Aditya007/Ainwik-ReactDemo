import { Component } from "react";

class B extends Component{
    render(){
        return(
            <>
                <h2>Username is {this.props.n} <br />
                  Age is {this.props.a}
                </h2>
            </>
        )
    }
}

export default B