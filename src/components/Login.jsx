import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState=>({...prevState,[name]: value}));
  };

const handleSubmit =(event)=>{
    event.preventDefault()
    console.log({"Form Data":formData})
} 
  
if(formData.email){
    Navigate()
}
 
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
    </div>
  );
}

export default Login;
