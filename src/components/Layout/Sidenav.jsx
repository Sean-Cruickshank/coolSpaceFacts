import { Outlet, Link, NavLink } from "react-router-dom"

export default function Sidenav({clock}) {
  return (
    <>
      <div id="nav-side" className="nav-side-width">
        <p className="nav-side-clock">Local Time</p>
        <p className="nav-side-clock">
            {clock}
        </p>
        <Link className="nav-link nav-side-link" to="..">Home</Link>
        <Link className="nav-link nav-side-link" to="/attributions">Sources</Link>
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