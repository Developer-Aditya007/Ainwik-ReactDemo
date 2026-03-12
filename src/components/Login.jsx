import axios from "axios";
import React, { useState } from "react";
import GoogleOAuth from "./GoogleOAuth";
const API_KEY = "reqres_fa8afe34eab64210b3d56c9f7c8df2fe"

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState=>({...prevState,[name]: value}));
  };

const handleSubmit = async (event)=>{
    event.preventDefault()
  //   const sendData =  await fetch('https://reqres.in/api/login',{
  //     method: "POST",
  //     headers:{
  //         'x-api-key': API_KEY,
  //         'Content-Type': 'application/json',

  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   // console.log({"Form Data":formData})
  //  const data =  await sendData.json()
  //  console.log(data)

  const response = await axios.post('https://reqres.in/api/login',formData,{
     headers: {
            'x-api-key': API_KEY,
            // 'Content-Type': 'application/json',
     }
  })

  console.log(response.data)
} 
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
<h1>login Page</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border"
        />
        <input type="submit" className="border" name="" id="" />
      </form>

      <GoogleOAuth/>
    </div>
  );
}

export default Login;
