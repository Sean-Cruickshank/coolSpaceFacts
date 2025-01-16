import { Outlet, Link, NavLink } from "react-router-dom"
import React from "react"

export default function Navbar({earthImage, location, updateTheme, toggleDropdown}) {
  
  // Used to generate links for the navbar
  const linkArray = [
    {name: 'Size', url: '/size'},
    {name: 'Distance', url: '/distance'},
    {name: 'Temperature', url: '/temperature'},
    {name: 'Speed', url: '/speed'}
  ]

  // Generates links based on the above array
  const linkElement = linkArray.map((item) => {
    return (
      <li key={item.name} className="nav-item">
        <NavLink
          className={({isActive}) => isActive
            ? "nav-link-current nav-link nav-top-link" 
            : "nav-link nav-top-link"
          }
          to={item.url}
          onClick={updateTheme}
        >{item.name}</NavLink>
      </li>
    )
  })

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm mb-3 fixed-top">
        <div id="navbar" className={`container-fluid nav-top nav-top-${location}`}>
          <div className="earth-image">
            {earthImage}
          </div>

          {/* Hamburger Menu */}
          <button 
            className="navbar-toggler button"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleDropdown}
          >
            <div className="nav-icon">
                <img src="img/hamburger.png" alt="Logo" height="45" />
            </div>
          </button>

          <div className="nav-container d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              {linkElement}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}