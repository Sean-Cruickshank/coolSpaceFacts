import dayjs from "dayjs";
import React from "react";
import { Outlet, Link, NavLink, useParams } from "react-router-dom"

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

export default function Layout() {

  const [location, setLocation] = React.useState('')
  
  // Grabs the page name from the URL and saves it to storage
  function getLocation() {
    const url = window.location.href.toLowerCase()
    const urlSplit = url.split('/');
    const urlHash = urlSplit[urlSplit.length - 1].split('#')
    setLocation(urlHash[0])
  }

  /* --- Colour Theme --- */
  
  // onClick method for all NavLinks
  // Sets the location state to a placeholder to trigger a rerender and sets user to the top of the page
  // Closes the dropdown nav if applicable
  function updateTheme() {
    setLocation('placeholder')
    setDropdown(false)
    setTimeout(() => {
      window.scrollTo(0,0)
    },50)
  }

  // Resyncs the location state to the URL
  React.useEffect(() => {
    getLocation()
  },[location])

  /* --- Earth Image --- */

  // Sets the Earth image based on the time of day
  let earthImage = ``;
  function setEarthImage(today) {
    const todayTime = today.format('HH');
    let imageRef = 'img/earth-day.png'
    if (todayTime >= 0 && todayTime < 6) {
        imageRef = 'img/earth-night.png'
    } else if (todayTime >= 6 && todayTime < 10) {
        imageRef = 'img/earth-dawn.png'
    } else if (todayTime >= 10 && todayTime < 17) {
        imageRef = 'img/earth-day.png'
    } else if (todayTime >= 17 && todayTime < 21) {
        imageRef = 'img/earth-dusk.png'
    } else if (todayTime >= 21) {
        imageRef = 'img/earth-night.png'
    }
    earthImage = <img id="nav-earth-image" src={imageRef} />;
  }
  setEarthImage(dayjs())

  /* --- Clock --- */

  // Refreshes the clock and saves it to state
  const [clock, setClock] = React.useState(dayjs().format('h:mmA'))
  function clockRefresh() {
    const clockSet = dayjs();
    const clockFormat = clockSet.format('h:mmA');
    if (clock !== clockFormat) {
        setClock(clockFormat)
        clearInterval(clockInterval)
    }
  }

  // Runs the clock refresh once per second
  const clockInterval = setInterval(clockRefresh, 1000)

  /* --- Dropdown Nav --- */

  // Toggle value for the dropdown navigation
  const [dropdown, setDropdown] = React.useState(false)

  // Toggle function for dropdown state, triggers on the 'compare' button in Navbar.jsx
  function toggleDropdown() {
    setDropdown((prev) => !prev)
  }

  // Assigns the css class to show or hide the dropdown list when the dropdown state is toggled
  React.useEffect(() => {
    if (dropdown) {
      document.querySelector('.nav-container').classList.add('nav-container-dropdown')
    } else {
      document.querySelector('.nav-container').classList.remove('nav-container-dropdown')
    }
  },[dropdown])

  const [page, setPage] = React.useState('')
  
  function pageRefresh() {
    const currentPage = window.location.href;
    if (page !== currentPage) {
      setPage(currentPage)
      getLocation()
      clearInterval(pageInterval)
    }
  }

  const pageInterval = setInterval(() => {
    pageRefresh()
  },1000)

  return (
    <>
      <Navbar
        earthImage={earthImage}
        location={location}
        updateTheme={updateTheme}
        toggleDropdown={toggleDropdown}
      />

      <Sidenav
        clock={clock}
        location={location}
        updateTheme={updateTheme}
      />

      <div id="shared-layout-body" className="container-fluid">
        <main role="main" className="pb-3">
            <Outlet context={updateTheme} />
        </main>
      </div>

      <Footer
        location={location}
        updateTheme={updateTheme}
      />
    </>
  )
}