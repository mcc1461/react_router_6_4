import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const nav =  useNavigate();
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h1 style={{color: "red", margin:"3rem 0 1rem 0"}}>About Page</h1>
      <button onClick={() => nav('/')} className='button-backToHome'>Home</button>
    </div>
  )
}

export default About