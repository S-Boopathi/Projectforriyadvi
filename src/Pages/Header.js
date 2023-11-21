import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" >USER APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/read">participants list</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/update">If any thind need to change ?</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
