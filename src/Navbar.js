import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
 

  return (
        <nav className="navbar navbar-expand-lg bg-light myclass">
        <div className="container-fluid">
          <img src='https://media.istockphoto.com/vectors/box-exprees-logo-stock-vector-vector-id1090457812?k=20&m=1090457812&s=612x612&w=0&h=9f8SqCaviyS_p4GQqV7_XkKJQ484HrmQm3o_jI_07rI=' className='logo'/>
            <Link className="navbar-brand mx-2" to="/">CourierHelps</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={"nav-link active"} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={"nav-link active"} to="/about">About</Link>
                </li>
                
                
            </ul>
            
            </div>
  </div>
</nav>

  )
}

export default Navbar