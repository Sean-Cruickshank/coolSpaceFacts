import dayjs from "dayjs";
import React from "react";
import { Outlet, Link, NavLink, useParams } from "react-router-dom"

import day from '../../images/earth-day.png'
import night from '../../images/earth-night.png'
import dawn from '../../images/earth-dawn.png'
import dusk from '../../images/earth-dusk.png'

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

export default function Layout() {

  const [location, setLocation] = React.useState('')
  
  // Grabs the page name from the URL
  function getLocation() {
    const url = window.location.href.toLowerCase()
    const urlSplit = url.split('/');
    const urlHash = urlSplit[urlSplit.length - 1].split('#')
    setLocation(urlHash[0])
  }
  
  function updateTheme() {
    setLocation('placeholder')
    setTimeout(() => {
      window.scrollTo(0,0)
    },50)
  }

  React.useEffect(() => {
    getLocation()
  },[location])

  // Sets the Earth image based on the time of day
  let earthImage = ``;
  function setEarthImage(today) {
    const todayTime = today.format('HH');
    let imageRef = day
    if (todayTime >= 0 && todayTime < 6) {
        imageRef = night
    } else if (todayTime >= 6 && todayTime < 10) {
        imageRef = dawn
    } else if (todayTime >= 10 && todayTime < 17) {
        imageRef = day
    } else if (todayTime >= 17 && todayTime < 21) {
        imageRef = dusk
    } else if (todayTime >= 21) {
        imageRef = night
    }
    earthImage = <img id="nav-earth-image" src={imageRef} />;
  }
  setEarthImage(dayjs())

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

  return (
    <>
      <Navbar
        earthImage={earthImage}
        location={location}
        updateTheme={updateTheme}
      />

      <Sidenav
        clock={clock}
        location={location}
        updateTheme={updateTheme}
      />

      <div id="shared-layout-body" className="container-fluid">
        <main role="main" className="pb-3">
            <Outlet />
        </main>
      </div>

      <Footer
        location={location}
        updateTheme={updateTheme}
      />
    </>
  )
}