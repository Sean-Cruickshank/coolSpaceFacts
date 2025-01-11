import { Outlet, Link, NavLink } from "react-router-dom"

export default function Footer() {
  
  //Highlights the active page in the footer menu
  function footerSelect() {
    const fileName = window.location.pathname;
    if (fileName === '/') {
        const webName = 'Home';
        const footerSelect = document.querySelector(`.js-footer-link-${webName}`);
        //footerSelect.classList.add('footer-link');
    } else {
        const webName = fileName.split(/(\\|\/)/g).pop();
        //const footerSelect = document.querySelector(`.js-footer-link-${webName}`);
        //footerSelect.classList.add('footer-link');
    }
    
  }

  footerSelect();
  
  return (
    <footer className="footer text-muted">
      <div className="container-fluid">
          <div className="row">
              <div className="footer-top">
                  <NavLink className="link-a js-footer-link-Home" to="..">HOME</NavLink>
                  <NavLink className="link-a js-footer-link-Attributions" to="/attributions">ATTRIBUTIONS</NavLink>
              </div>
              <div className="footer-top">
                  <NavLink className="link-a js-footer-link-Size" to="/size">SIZE</NavLink>
                  <NavLink className="link-a js-footer-link-Distance" to="/distance">DISTANCE</NavLink>
                  <NavLink className="link-a js-footer-link-Temperature" to="/temperature">TEMPERATURE</NavLink>
                  <NavLink className="link-a js-footer-link-Speed" to="/speed">SPEED</NavLink>
              </div>
          </div>
          <div className="footer-bottom">
              <a href="https://www.seancruickshank.co.nz/"><img src="/images/coollogo2.png" target="_blank" className="footer-logo" alt="Logo"/></a>
              <br />
              <br />
              <p>Cool Space Facts &copy; 2024</p>
              <p>Website created by Sean Cruickshank</p>
              <br />
              <br />
          </div>
      </div>
  </footer>
  )
}