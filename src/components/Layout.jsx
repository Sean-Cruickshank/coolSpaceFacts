import dayjs from "dayjs";
import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom"

import day from '../images/earth-day.png'
import night from '../images/earth-night.png'
import dawn from '../images/earth-dawn.png'
import dusk from '../images/earth-dusk.png'

import Footer from "./Footer";

export default function Layout() {
  
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
        } else if (todayTime >= 21 && todayTime < 23) {
            imageRef = night
        }
        earthImage = <img id="nav-earth-image" src={imageRef} />;
    }

    let clock = '12:00PM'
    function clockRefresh() {
        const clockSet = dayjs();
        const clockFormat = clockSet.format('h:mmA');
        clock = clockFormat
        setEarthImage(clockSet, earthImage);
    }

    //gets current time, formats correctly, runs setEarthImage and updates every 15 seconds
    clockRefresh()
    setInterval(clockRefresh, 15000);
  
    return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm mb-3 fixed-top">
            <div id="navbar" className="container-fluid nav-top">
                <div className="js-earth-image">
                    {earthImage}
                    <p>test</p>
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
                            <Link className="nav-link" to="/size">Size</Link>
                        </li>
                        <li className="nav-item js-nav-link-distance">
                        <Link className="nav-link" to="/distance">Distance</Link>
                        </li>
                        <li className="nav-item js-nav-link-temperature">
                        <Link className="nav-link" to="/temperature">Temperature</Link>
                        </li>
                        <li className="nav-item js-nav-link-speed">
                        <Link className="nav-link" to="/speed">Speed</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
          
          <div id="nav-side" className="nav-side-width">
        <p className="nav-side-clock">Local Time</p>
        <p className="nav-side-clock">
            {clock}
        </p>
        <Link className="nav-link nav-side-link" to="..">Home</Link>
        <Link className="nav-link nav-side-link" to="/attributions">Sources</Link>
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
    <Footer />
    </>
  )
}