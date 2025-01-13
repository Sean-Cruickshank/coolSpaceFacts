import { Outlet, Link, NavLink } from "react-router-dom"

export default function Sidenav({clock, location, updateTheme}) {
  return (
    <>
      <div id="nav-side" className={`nav-side-width nav-side-${location}`}>
        <p className="nav-side-clock">Local Time</p>
        <p className="nav-side-clock">
            {clock}
        </p>
        <NavLink
          className={({isActive}) => isActive
          ? "nav-side-link-current nav-link nav-side-link" : "nav-link nav-side-link"
        } to="/"
          onClick={updateTheme}
        >Home</NavLink>
        <NavLink
          className={({isActive}) => isActive
          ? "nav-side-link-current nav-link nav-side-link" : "nav-link nav-side-link"
        }
          to="/attributions"
          onClick={updateTheme}
          >Sources</NavLink>
        <div className="row justify-content-around">
          <div className="nav-side-content js-nav-side-content col">
          </div>
          </div>
      </div>

      <div className="nav-side-width">
          .
      </div>
    </>
  )
}