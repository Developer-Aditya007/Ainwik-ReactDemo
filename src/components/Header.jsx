import { Component } from "react"

import '../App.css'

function Header() {
  return (
    <div>
      <nav>
        <ul>
        <li><a href="">Home</a></li>
        <li className="parent">About
          <ul className="child">
            <li><a href="">About Company</a></li>
            <li><a href="">About CEO</a></li>
          </ul>
        </li>
        <li><a href="">Contact</a></li>
        <li><a href="">Products</a></li>
      </ul>
      </nav>
       <Main/>
    </div>
  )
}

export default Header


// class Main extends Component{
//   render(){
//     return(
//       <>
//         <h4>This is Main Section</h4>
//       </>
//     )
//   }
// }

function Main(){
  return(
    <>
    <h5>Lorem ipsum dolor sit amet.</h5>
    </>
  )
}