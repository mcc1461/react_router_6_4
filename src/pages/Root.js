import React from 'react'
import {Link} from 'react-router-dom'

const Root = () => {
  return (
    <div style={{width: "400px"}}>
        <nav>
            MCC-BLOG
        </nav>
        <div className='flex-apart'>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/blogs/tech'>Tech</Link>&nbsp;
            <Link to='/blogs/food'>Food</Link>&nbsp;
            <Link to='blogs/culture'>Culture</Link>&nbsp;
            <Link to='/blogs/travel'>Travel</Link>&nbsp;
            <Link to='/blogs/nature'>Nature</Link>&nbsp;


        </div>
    
    
    </div>
  )
}

export default Root