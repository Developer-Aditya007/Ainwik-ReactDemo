import { Component } from "react";
import { Camera, Instagram, ShoppingCart } from 'react-feather';
import './cart.css'

export default class ClassBasedState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Brajmohan",
      count: 0,
    };
  }
  render() {
    let user = localStorage.getItem("frmData")
    let json = JSON.parse(user)
    let email = json.email
    const { name, count } = this.state;
    return (
      <>
        <h3>This is Statefull class based component</h3>
        <h2>{count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ name: "Mr Dev" })}>
          Change Name
        </button>
        <h2>{name}</h2>
        <Camera color="red" size={50}/>
        <Instagram/>
        <h2>Welcome Mr {email}</h2>
        <ShoppingCart className="cart" color="blue"/>
        <span className="cart-value">{count}</span>
      </>
    );
  }
}
