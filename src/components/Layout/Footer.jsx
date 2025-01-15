import { Outlet, Link, NavLink } from "react-router-dom"

import logo from '../../images/coollogo2.png'

export default function Footer({updateTheme, location}) {

  // Used for generating the top and bottom row of footer links, respectfully
  const linkArrayTop = [
    {name: 'Home', url: '/'},
    {name: 'Attributions', url: '/attributions'},
  ]
  const linkArrayBottom = [
    {name: 'Size', url: '/size'},
    {name: 'Distance', url: '/distance'},
    {name: 'Temperature', url: '/temperature'},
    {name: 'Speed', url: '/speed'}
  ]

  // Generates the links for the above arrays
  function footerTemplate(page) {
    return (
      <NavLink
        key={page.name}
        className={({isActive}) => isActive ? "link-a footer-link" : 'link-a' }
        to={page.url}
        onClick={updateTheme}
      >
        {page.name.toUpperCase()}
      </NavLink>
    )
  }

  //Converts the links into two seperate JSX elements
  const footerElementTop = linkArrayTop.map((page) => {
    return (
      footerTemplate(page)
    )
  })
  const footerElementBottom = linkArrayBottom.map((page) => {
    return (
      footerTemplate(page)
    )
  })
  
  return (
    <footer className={`footer text-muted footer-${location}`}>
      <div className="container-fluid">
          <div className="row">
              <div className="footer-top">
                {footerElementTop}
              </div>
              <div className="footer-top">
                {footerElementBottom}
              </div>
          </div>
          <div className="footer-bottom">
              <a href="https://www.seancruickshank.co.nz/"><img src={logo} target="_blank" className="footer-logo" alt="Logo"/></a>
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