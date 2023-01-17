import React from 'react'
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

// style
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);
   

    const handleMobileClick = () => {
        setClick(!click);
    }
    const handleMobileMenu = () => {
        setClick(false);

    }

  return (
    <>
    <nav className='navbar-items'>
    <Link to='/' className='navbar-logo' onClick={handleMobileMenu}><h1>Abdullah</h1></Link>

        <div className="menu-icon" onClick={handleMobileClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link to={item.url} className={item.cName}><i className={item.icon}></i> {item.title}</Link>
                </li>

                )

            })}
            <button className='sign-up-btn'>Sign Up</button>
          
        </ul>
    </nav>

    </>
  )
}

export default Navbar