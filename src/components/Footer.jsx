import { Outlet, Link, NavLink } from "react-router-dom"

import logo from '../images/coollogo2.png'

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

  const pageArray = [
    {name: 'Home', url: '..'},
    {name: 'Attributions', url: '/attributions'},
    {name: 'Size', url: '/size'},
    {name: 'Distance', url: '/distance'},
    {name: 'Temperature', url: '/temperature'},
    {name: 'Speed', url: '/speed'}
  ]

  const footerElement = pageArray.map((page) => {
    return (
      <NavLink
        key={page.name}
        className='link-a'
        to={page.url}
      >
        {page.name.toUpperCase()}
      </NavLink>
    )
  })

  footerSelect();
  
  return (
    <footer className="footer text-muted">
      <div className="container-fluid">
          <div className="row">
              <div className="footer-top">
                {footerElement}
              </div>
          </div>
          <div className="footer-bottom">
              <a href="https://www.seancruickshank.co.nz/"><img src={logo} target="_blank" className="footer-logo" alt="Logo"/></a>
              <p>Cool Space Facts &copy; 2024</p>
              <p>Website created by Sean Cruickshank</p>
          </div>
      </div>
  </footer>
  )
}