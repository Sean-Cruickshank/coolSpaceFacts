import { Outlet, Link, NavLink } from "react-router-dom"

export default function Navbar({earthImage, location, updateTheme}) {
  
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
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <div className="nav-icon">
                <img src="/images/hamburger.png" alt="Logo" height="45" />
            </div>
          </button>

          <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive
                    ? "nav-link-current nav-link" 
                    : "nav-link"
                  }
                  to="/size"
                  onClick={updateTheme}
                >Size</NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive
                    ? "nav-link-current nav-link" 
                    : "nav-link"
                  }
                  to="/distance"
                  onClick={updateTheme}
                >Distance</NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive
                    ? "nav-link-current nav-link"
                    : "nav-link"
                  }
                  to="/temperature"
                  onClick={updateTheme}
                >Temperature</NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => isActive
                    ? "nav-link-current nav-link" : "nav-link"
                  }
                  to="/speed"
                  onClick={updateTheme}
                >Speed</NavLink>
              </li>
            </ul>

          {/* <div className="">
            <NavLink to="/size">Size</NavLink>
            <NavLink to="/distance">Distance</NavLink>
            <NavLink to="/temperature">Temperature</NavLink>
            <NavLink to="/speed">Speed</NavLink>
          </div> */}
        </div>
      </nav>
    </header>
  )
}