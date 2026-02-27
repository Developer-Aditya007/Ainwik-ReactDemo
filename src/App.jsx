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
import Header from "./components/Header"
import  Footer  from "./components/Footer"
import Feature from "./pages/Feature"
import Engagement from "./pages/Engagement"
import ErrorPage from "./components/ErrorPage"
// import Footer  from "./components/Footer"
// import Header from "./pages/Header"

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
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path="/" element={<h1>This is DashBoard</h1>}/>
          <Route path="/engagement" element={<Engagement/>}/>
          <Route path="/feature" element={<Feature/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
  )
}

export default App

