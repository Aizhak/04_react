import React from 'react'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar bg-body-tertiary'>
    <div className='container-fluid'>
    <a className='navbar-brand'>Busca tu Serie Morro</a>
    <form className='d-flex' role='search'>
      <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
      <button className='btn btn-outline-success' type='submit'>Search</button>
    </form>
  </div>
</nav> 
  )
}

export default Navbar