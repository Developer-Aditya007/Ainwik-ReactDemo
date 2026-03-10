import React, { useEffect, useState } from 'react'
const API_KEY = "reqres_fa8afe34eab64210b3d56c9f7c8df2fe"

function Dashboard() {
    const [data,setData] = useState([])
    const getData = async ()=>{
        const fetchData = await fetch('https://reqres.in/api/users',{
            method: 'GET',
            headers:{
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
            }
        })
      const json = await fetchData.json()
       setData(json.data)
    }
    
      
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
       <h1 className='text-4xl font-bold text-center p-5'>This is Dashboard</h1>
        <ul>
            {data.map((value)=>{
        return <li>{value.id} {value.first_name} {value.last_name} {value.email} <img src={value.avatar} alt="" /></li>
       })}
        </ul>
    </div>
  )
}

export default Dashboard
