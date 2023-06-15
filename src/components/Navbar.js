import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">NewsVihar</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" to="/">Home</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/topheadlines">Top-Headlines</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/sports">Sports</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/crime">Crime</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/health">Health</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/politics">Politics</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/buisness">Buisness</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country Wise
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/india">India</Link></li>
            <li><Link class="dropdown-item" to="/us">United States</Link></li>
            <li><Link class="dropdown-item" to="/london">United Kingdom</Link></li>
            <li><Link class="dropdown-item" to="/canada">Canada</Link></li>
            <li><Link class="dropdown-item" to="/russia">Russia</Link></li>
            <li><Link class="dropdown-item" to="/ukraine">Ukraine</Link></li>
            <li><Link class="dropdown-item" to="/pakistan">Pakistan</Link></li>
            <li><Link class="dropdown-item" to="/afghanistan">Afghanistan</Link></li>
            <li><Link class="dropdown-item" to="/singapore">Singapore</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Categories
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/bitcoin">Bitcoin</Link></li>
            <li><Link class="dropdown-item" to="/tesla">Tesla</Link></li>
            <li><Link class="dropdown-item" to="/apple">Apple</Link></li>
            <li><Link class="dropdown-item" to="/war">Russia-Ukraine War</Link></li>
            <li><Link class="dropdown-item" to="/bollywood">Bollywood</Link></li>
            <li><Link class="dropdown-item" to="/hollywood">Hollywood</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
