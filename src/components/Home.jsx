import { NavLink, useOutletContext } from "react-router-dom"

export default function Home() {
  
  const updateTheme = useOutletContext()
  
  return (
    <div className="view-body">
      <div className="home-intro">
        <img className="home-bg-large" src="img/banner_wide.png" />
        <img className="home-bg-medium" src="img/banner_tall.png" />
      </div>

    <div className="home-body">
      <div className="container-fluid row row-buffer justify-content-around">
        <div className="col-12 home-card home-card-not-select">
          <h2>What is this place?</h2>
          <p>This website was designed to display facts about Space in a fun and engaging way.</p>
          <p>Each page contains a list of facts about places in our universe, ordered by a specific theme, from one extreme to the other, with a few facts about each place you might find interesting</p>
        </div>

        <div className="col-lg-5 col-12 home-card home-card-select">
          <NavLink onClick={updateTheme} to="/size">
            <div>
              <h2>Size</h2>
              <p>From satellites in orbit around the Earth all the way up to the biggest structures in the Universe</p>
              <img className="home-card-image" src="img/compare/andromeda.jpg" />
            </div>
          </NavLink>
        </div>

        <div className="col-lg-5 col-12 home-card home-card-select">
          <NavLink onClick={updateTheme} to="/distance">
            <div>
              <h2>Distance</h2>
              <p>Categorises objects based on their distance from Earth. From our own solar system, to distant galaxies and beyond</p>
              <img className="home-card-image" src="img/compare/satellite.jpg" />
            </div>
          </NavLink>
        </div>

        <div className="col-lg-5 col-12 home-card home-card-select">
          <NavLink onClick={updateTheme} to="/temperature">
            <div>
              <h2>Temperature</h2>
              <p>From the coldest reaches of deep space to the cores of the brightest stars, with some familiar places in between</p>
              <img className="home-card-image" src="img/compare/sun.jpg" />
            </div>
          </NavLink>
        </div>

        <div className="col-lg-5 col-12 home-card home-card-select">
          <NavLink onClick={updateTheme} to="/speed">
            <div>
              <h2>Speed</h2>
              <p>This list begins with the slowest objects in our solar system and gradually builds up to near the speed of light</p>
              <img className="home-card-image" src="img/compare/mercury.jpg" />
            </div>
          </NavLink>
        </div>

        <div className="col-lg-5 col-12 home-card home-card-select">
          <NavLink  onClick={updateTheme} to="/sources">
            <div>
              <h2>Sources</h2>
              <p>This page uses images and data sourced from other websites</p>
              <p>Credit for all work used can be found on the sources page</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div> 
  </div>
  )
}