import { temperatureList } from '../js/data/temperaturedata.js';

const navbarSelect = document.querySelector('.js-nav-link-temperature');
navbarSelect.classList.add('nav-link-current');

const navbarTop = document.querySelector('.nav-top');
navbarTop.classList.add('nav-top-temperature');

const navbarSide = document.querySelector('.nav-side-width');
navbarSide.classList.add('nav-side-temperature');

const footerSelect = document.querySelector('.footer');
footerSelect.classList.add('footer-temperature');

//Generates IDs for each data entry based on index in the array
const temperatureListId = temperatureList.map((item, index) => {
    return item.id = `temperature-${index}`;
})

let temperatureHTML = '';
let sidebarHTML = '';
let factCount = 0;


//Generates HTML cards for each entry in temperatureList
temperatureList.forEach((item) => {
    let factListHTML = '';
    for (let i = 0; i < item.factList.length; i++) {
        const fact = item.factList[i];
        factListHTML += `<p class="card-fact">${fact}</p>`;
    }

    if (factCount % 2 === 0) {
        temperatureHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="container-fluid row-buffer row justify-content-around">
                <div class="col-10 card-title-container">
                    <h1 class="card-count">- ${factCount + 1} -</h1>
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-temperature">Temperature: ${item.temperature}</p>
                </div>
                <div class="col-lg-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc} by ${item.imageCaption}">
                    <p class="card-image-caption">${item.imageDesc}</p>
                </div>
                <div class="card-fact-container col-lg-6 col-12">
                    <h2>Facts:</h2>
                    <p>${factListHTML}</p>
                </div>
            </div>
        </div>
        `;
        factCount++;
    } else {
        temperatureHTML += `
        <div id="${item.id}" class="compare-card">
            <div class="container-fluid row-buffer row justify-content-around">
                <div class="col-10 card-title-container">
                    <h1 class="card-count">- ${factCount + 1} -</h1>
                    <h1 class="card-title">${item.title}</h1>
                    <p class="card-temperature">Temperature: ${item.temperature}</p>
                </div>
                <div class="card-fact-container col-lg-6 col-12">
                    <h2>Facts:</h2>
                    <p>${factListHTML}</p>
                </div>
                <div class="col-lg-6 col-12">
                    <img class="card-image" src="${item.image}" title="${item.imageDesc} by ${item.imageCaption}">
                    <p class="card-image-caption">${item.imageDesc}</p>
                </div>
            </div>
        </div>
        `;
        factCount++;
    }



    if (item.id === 'temperature-0') {
        sidebarHTML +=
            `
          <a class="nav-side-item ${item.id} js-nav-side-item" href="#${item.id}">${item.title}</a>
        `
    } else {
        sidebarHTML +=
            `
          <a class="nav-side-item ${item.id}" href="#${item.id}">${item.title}</a>
        `
    }

    document.querySelector('.js-temperature-body').innerHTML = temperatureHTML;
    document.querySelector('.js-nav-side-content').innerHTML = sidebarHTML;

});

//Highlights entries on sidenav based on position on the page
window.addEventListener('scroll', () => {
    const position = Math.floor((scrollY) / 1000);
    if (position < temperatureList.length) {
        NavSideHighlight(position);
    }

});

//Highlights the active card div and removes highlights from all others
function NavSideHighlight(index) {
    const test = document.querySelector(`.temperature-${index}`);
    const hello = Array.from(document.getElementsByClassName('js-nav-side-item'));
    hello.forEach((test) => {
        test.classList.remove('js-nav-side-item');
    });
    test.classList.add('js-nav-side-item');
}