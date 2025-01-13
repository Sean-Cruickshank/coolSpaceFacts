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

import { getCompareData } from "../../utils/compare";

export default function Layout() {

  // Grabs the page name
  const url = window.location.href
  const urlSplit = url.split('/');
  const location = urlSplit[urlSplit.length - 1]
  getCompareData(location)

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

  const [clock, setClock] = React.useState('12:00PM')

  function clockRefresh() {
    const clockSet = dayjs();
    const clockFormat = clockSet.format('h:mmA');
    if (clock !== clockFormat) {
        setClock(clockFormat)
        clearInterval(clockInterval)
    }
  }

  setEarthImage(dayjs())
  const clockInterval = setInterval(clockRefresh, 1000)

  return (
    <>
      <Navbar earthImage={earthImage} />

      <Sidenav clock={clock} />

      <div id="shared-layout-body" className="container-fluid">
        <main role="main" className="pb-3">
            <Outlet />
        </main>
      </div>

      <Footer />
    </>
  )
}