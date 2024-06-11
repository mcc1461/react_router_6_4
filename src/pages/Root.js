import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Root = () => {
  return (
    <div className='nav-bars'>
        <nav style={{maxWidth: "90%vw", alignSelf: "center", fontSize:"1.5rem", fontWeight: "bold"}}>
            MCC-BLOG
        </nav>
        <div className='flex-apart'>
            <Link to='/' style={{backgroundColor: "#8a2be299"}}>Home</Link>&nbsp;
            <Link to='/about' style={{backgroundColor: "#8a2be299"}}   >About</Link>&nbsp;
            <Link to='/blogs/tech'>Tech</Link>&nbsp;
            <Link to='/blogs/food'>Food</Link>&nbsp;
            <Link to='blogs/culture'>Culture</Link>&nbsp;
            <Link to='/blogs/travel'>Travel</Link>&nbsp;
            <Link to='/blogs/nature'>Nature</Link>&nbsp;
        </div>
        <Outlet />
    
    </div>
  )
}

export default Root