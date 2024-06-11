import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav =  useNavigate();
  return (
   <div style={{display:"flex", flexDirection:"column"}}>
      <h1 style={{color: "blueviolet", margin:"3rem 0 1rem 0", textDecoration:"underline"}}>Home Page</h1>
    </div>
  )
}

export default Home
