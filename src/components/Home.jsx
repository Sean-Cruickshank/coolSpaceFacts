import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div class="view-body">
      <div class="home-intro">
        <img class="home-bg-large" src="https://dqe1enhkuqw3t.cloudfront.net/home/banner_wide.png" />
        <img class="home-bg-medium" src="https://dqe1enhkuqw3t.cloudfront.net/home/banner_tall.png" />
      </div>

    <div class="home-body">
      <div class="container-fluid row row-buffer justify-content-around">
        <div class="col-12 home-card home-card-not-select">
          <h2>What is this place?</h2>
          <p>This website was designed to display facts about Space in a fun and engaging way.</p>
          <p>Each page contains a list of facts about places in our universe, ordered by a specific theme, from one extreme to the other, with a few facts about each place you might find interesting</p>
        </div>

        <div class="col-lg-5 col-12 home-card home-card-select">
          <NavLink to="/size">
            <div>
              <h2>Size</h2>
              <p>From satellites in orbit around the Earth all the way up to the biggest structures in the Universe</p>
              <img class="home-card-image" src="https://dqe1enhkuqw3t.cloudfront.net/compare/andromeda.jpg" />
            </div>
          </NavLink>
        </div>

        <div class="col-lg-5 col-12 home-card home-card-select">
          <NavLink to="/distance">
            <div>
              <h2>Distance</h2>
              <p>Categorises objects based on their distance from Earth. From our own solar system, to distant galaxies and beyond</p>
              <img class="home-card-image" src="https://dqe1enhkuqw3t.cloudfront.net/compare/satellite.jpg" />
            </div>
          </NavLink>
        </div>

        <div class="col-lg-5 col-12 home-card home-card-select">
          <NavLink to="/temperature">
            <div>
              <h2>Temperature</h2>
              <p>From the coldest reaches of deep space to the cores of the brightest stars, with some familiar places in between</p>
              <img class="home-card-image" src="https://dqe1enhkuqw3t.cloudfront.net/compare/sun.jpg" />
            </div>
          </NavLink>
        </div>

        <div class="col-lg-5 col-12 home-card home-card-select">
          <NavLink to="/speed">
            <div>
              <h2>Speed</h2>
              <p>This list begins with the slowest objects in our solar system and gradually builds up to near the speed of light</p>
              <img class="home-card-image" src="https://dqe1enhkuqw3t.cloudfront.net/compare/mercury.jpg" />
            </div>
          </NavLink>
        </div>

        <div class="col-lg-5 col-12 home-card home-card-select">
          <NavLink to="/attributions">
            <div>
              <h2>Sources</h2>
              <p>This page uses images and data sourced from other websites</p>
              <p>Credit for all work used can be found on the attributions page</p>
            </div>
          </NavLink>
        </div>

        <div class="col-12 card-disclaimer home-card-disclaimer">
          <h2>Disclaimer</h2>
          <p>The information used on this website might not be accurate. Most data was sourced quickly and is really just there to fill out the website.</p>
          <p>This website was created by Sean Cruickshank as part of my web design portfolio and is not intended for live use, but as a way to showcase and improve my web design skills</p>
        </div>
      </div>
    </div> 
  </div>
  )
}