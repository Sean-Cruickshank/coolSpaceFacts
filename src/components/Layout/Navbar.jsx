import { Outlet, Link, NavLink } from "react-router-dom"

export default function Navbar({earthImage}) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm mb-3 fixed-top">
        <div id="navbar" className="container-fluid nav-top">
          <div className="js-earth-image">
            {earthImage}
            <p>test</p>
          </div>
          <button 
            className="navbar-toggler button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <div className="nav-icon">
                <img src="/images/hamburger.png" alt="Logo" height="45" />
            </div>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item js-nav-link-size">
                  <Link className="nav-link" to="/size">Size</Link>
              </li>
              <li className="nav-item js-nav-link-distance">
              <Link className="nav-link" to="/distance">Distance</Link>
              </li>
              <li className="nav-item js-nav-link-temperature">
              <Link className="nav-link" to="/temperature">Temperature</Link>
              </li>
              <li className="nav-item js-nav-link-speed">
              <Link className="nav-link" to="/speed">Speed</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}