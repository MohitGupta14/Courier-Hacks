import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
 

  return (
        <nav className="navbar navbar-expand-lg myclass ">
        <div className="container-fluid d-flex">
            <Link className="navbar-brand mx-2 color text p-2 flex-grow-1 gradient-text" to="/">CourierHelps</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 marginleft p-2">
                <li className="nav-item">
                <Link className="nav-link color" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                <Link className="nav-link color" to="/about">About us</Link>
                </li>
                
                
            </ul>
            <Link className="btn loginbutton mx-1 paddingclass" to="/login" role="button">Login</Link>
            <Link className="btn signupbutton mx-1 paddingclass" to="/signup" role="button">Signup</Link>
            
            </div>
  </div>
</nav>

  )
}

export default Navbar