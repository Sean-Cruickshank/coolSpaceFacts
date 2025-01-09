//checks the current time and sets the Earth image accordingly
const earthImage = document.querySelector('.js-earth-image');

function setEarthImage(today) {
    const todayTime = today.format('HH');
    let numSwitch = 0;
    if (todayTime >= 0 && todayTime < 6) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/images/earth-night.png" />';
    } else if (todayTime >= 6 && todayTime < 10) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/images/earth-dawn.png" />';
    } else if (todayTime >= 10 && todayTime < 17) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/images/earth-day.png" />';
    } else if (todayTime >= 17 && todayTime < 21) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/images/earth-dusk.png" />';
    } else if (todayTime >= 21 && todayTime < 23) {
        earthImage.innerHTML = '<img id="nav-earth-image" src="/images/earth-night.png" />';
    }
}


//gets current time, formats correctly, runs setEarthImage and updates every 15 seconds
clockRefresh();
setInterval(clockRefresh, 15000);

function clockRefresh() {
    const clockSet = dayjs();
    const clockFormat = clockSet.format('h:mmA');
    const clock = document.querySelector('.js-nav-side-clock');
    clock.innerHTML = clockFormat;
    setEarthImage(clockSet);
}

//Highlights the active page in the footer menu
function footerSelect() {
    const fileName = window.location.pathname;
    if (fileName === '/') {
        const webName = 'Home';
        const footerSelect = document.querySelector(`.js-footer-link-${webName}`);
        footerSelect.classList.add('footer-link');
    } else {
        const webName = fileName.split(/(\\|\/)/g).pop();
        console.log(fileName);
        const footerSelect = document.querySelector(`.js-footer-link-${webName}`);
        footerSelect.classList.add('footer-link');
    }
    
}

footerSelect();
