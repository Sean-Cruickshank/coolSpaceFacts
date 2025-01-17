import { Outlet, Link, NavLink } from "react-router-dom"

export default function Footer({updateTheme, location}) {

  // Used for generating the top and bottom row of footer links, respectfully
  const linkArrayTop = [
    {name: 'Home', url: '/'},
    {name: 'Sources', url: '/sources'},
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
        className={({isActive}) => isActive ? "footer-link active-footer-link" : 'footer-link' }
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
              <a
                target='_blank'
                href="https://www.seancruickshank.co.nz/"
              >
                <img
                  src='img/coollogo2.png'  
                  className="footer-logo" 
                  alt="Logo"
                />
              </a>
              <br />
              <br />
              <span>Website created by Sean Cruickshank &copy; 2025</span>
              <br />
              <br />
          </div>
      </div>
  </footer>
  )
}