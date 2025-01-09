import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm mb-3 fixed-top">
            <div id="navbar" className="container-fluid nav-top">
                <div className="js-earth-image">
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
                            <a className="nav-link" asp-area="" asp-controller="Compare" asp-action="Size">Size</a>
                        </li>
                        <li className="nav-item js-nav-link-distance">
                            <a className="nav-link" asp-area="" asp-controller="Compare" asp-action="Distance">Distance</a>
                        </li>
                        <li className="nav-item js-nav-link-temperature">
                            <a className="nav-link" asp-area="" asp-controller="Compare" asp-action="Temperature">Temperature</a>
                        </li>
                        <li className="nav-item js-nav-link-speed">
                            <a className="nav-link" asp-area="" asp-controller="Compare" asp-action="Speed">Speed</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
          
          <div id="nav-side" className="nav-side-width">
        <p className="nav-side-clock">Local Time</p>
        <p className="nav-side-clock js-nav-side-clock"></p>
        <a className="nav-link nav-side-link" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
        <a className="nav-link nav-side-link" asp-area="" asp-controller="Home" asp-action="Attributions">Sources</a>
        <div className="row justify-content-around">
            <div className="nav-side-content js-nav-side-content col">
            </div>
        </div>
    </div>

    <div className="nav-side-width">
        .
    </div>

    <div id="shared-layout-body" className="container-fluid">
        <main role="main" className="pb-3">
            <Outlet />
        </main>
    </div>
      
      <footer className="footer text-muted">
        <div className="container-fluid">
            <div className="row">
                <div className="footer-top">
                    <a className="link-a js-footer-link-Home" asp-area="" asp-controller="Home" asp-action="Index">HOME</a>
                    <a className="link-a js-footer-link-Attributions" asp-area="" asp-controller="Home" asp-action="Attributions">ATTRIBUTIONS</a>
                </div>
                <div className="footer-top">
                    <a className="link-a js-footer-link-Size" asp-area="" asp-controller="Compare" asp-action="Size">SIZE</a>
                    <a className="link-a js-footer-link-Distance" asp-area="" asp-controller="Compare" asp-action="Distance">DISTANCE</a>
                    <a className="link-a js-footer-link-Temperature" asp-area="" asp-controller="Compare" asp-action="Temperature">TEMPERATURE</a>
                    <a className="link-a js-footer-link-Speed" asp-area="" asp-controller="Compare" asp-action="Speed">SPEED</a>
                </div>
            </div>
            <div className="footer-bottom">
                <a href="https://www.seancruickshank.co.nz/"><img src="/images/coollogo2.png" className="footer-logo" alt="Logo"/></a>
                <br />
                <br />
                <p>Cool Space Facts &copy; 2024</p>
                <p>Website created by Sean Cruickshank</p>
                <br />
                <br />
            </div>
        </div>
     </footer>
    </>
  )
}