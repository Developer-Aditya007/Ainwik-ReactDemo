// import Header from './components/Header'
// import Footer from './components/Footer'
// import Portal from './components/Portal'
// import A from './components/A'
// import Event from './components/Event'
// import FunctionEvents from './components/FunctionEvents'
// import DynamicData from './components/DynamicData'
// import ClassBasedState from './components/ClassBasedState'
// import FunctionBasedState from './components/FunctionBasedState'
// import Condition from './components/Conditional'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./pages/Header"

// function App() {
//   const userinfo = ["John",21,"USA"]
//   const [n,a,c] = userinfo
//   return (
//     <div>
//       <Header/>
//       <h2>This is DashBoard</h2>
//       <p>Lorem ipsum dolor sit amet.</p>
//       <A name={n} age={a} country = {c}/>
//       <Portal/>
//       <Event/>
//       <FunctionEvents/>
//       <DynamicData/>
//       <ClassBasedState/>
//       <FunctionBasedState/>
//       <Condition/>
//       <Footer/>
//     </div>
//   )
// }

// export default App



function App() {
  return (
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<h1>This is DashBoard</h1>}/>
          <Route path="/about" element={<h1>This is About Page</h1>}/>
          <Route path="/footer" element={<h1>This is Footer Section</h1>}/>
       </Routes>
       </BrowserRouter>
  )
}

export default App

