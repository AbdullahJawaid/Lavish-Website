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
    useEffect(() =>{
        handleMobileClick();
        handleMobileMenu ();


    },[])

  return (
    <>
    <nav className='navbar-items'>
    <Link to='/' className='navbar-logo' onClick={handleMobileMenu}><i className="fa-solid fa-fingerprint"></i><h1>LAVISH</h1></Link>

        <div className="menu-icon" onClick={handleMobileClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link to={item.url} className={item.cName} onClick={handleMobileClick}><i className={item.icon}></i> {item.title}</Link>
                </li>

                )

            })}
            <Link to='./signup'> <button className='sign-up-btn'>Sign Up</button></Link>
           
          
        </ul>
    </nav>

    </>
  )
}

export default Navbar