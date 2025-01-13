import { sizeList } from '../data/sizedata.js'
import { distanceList } from '../data/distancedata.js'
import { temperatureList } from '../data/temperaturedata.js'
import { speedList } from '../data/speeddata.js'

// Grabs the page name
const url = window.location.href
const urlSplit = url.split('/');
const location = urlSplit[urlSplit.length - 1]

// Grabs the corresponding data array for location
let cardList = [];
export function getCompareData(location) {
	if (location === 'size') {
		cardList = sizeList
	} else if (location === 'distance') {
		cardList = distanceList
	} else if (location === 'temperature') {
		cardList = temperatureList
	} else if (location === 'speed') {
		cardList = speedList
	}
	
	//Generates IDs for each data entry based on index in the array
	const cardListId = cardList.map((item, index) => {
		return item.id = `size-${index}`;
	})
	
	let sidebarHTML = '';
	let cardCount = 0;
	let factCount = 0;
	
	
	//Generates HTML cards for each entry in cardList
	const cardElement = cardList.map((item) => {
		cardCount++
		let factListHTML = '';
		for (let i = 0; i < item.factList.length; i++) {
			const fact = item.factList[i];
			factListHTML += <p className="card-fact">{fact}</p>;
		}
	
		const factListElement = item.factList.map((fact) => {
			return <p key={factCount++} className='card-fact'>{fact}</p>
		})
	
		const cardImage =
			<div className="col-lg-6 col-12">
				<img className="card-image" src={item.image} title={`${item.imageDesc} by ${item.imageCaption}`} />
				<p className="card-image-caption">{item.imageDesc}</p>
			</div>
	
		const cardFacts = 
		<div className="card-fact-container col-lg-6 col-12">
			<h2>Facts:</h2>
			<>{factListElement}</>
		</div>
	
		let metricElement
		if (location === 'size') {
			metricElement = <p className="card-diameter">Diameter: {item.size}</p>
		} else if (location === 'distance') {
			metricElement = <p className="card-distance">Distance: {item.distance}</p>
		} else if (location === 'temperature') {
			metricElement = <p className="card-temperature">Temperature: {item.temperature}</p>
		} else if (location === 'speed') {
			metricElement = <p className="card-speed">Speed: {item.speed}</p>
		}
	
		return (
			<div key={item.id} id={item.id} className="compare-card">
				<div className="container-fluid row-buffer row justify-content-around">
	
					<div className="col-10 card-title-container">
						<h1 className="card-count">- {cardCount} -</h1>
						<h1 className="card-title">{item.title}</h1>
						{metricElement}
					</div>
					{cardCount % 2 === 0 ? cardFacts : cardImage}
					{cardCount % 2 === 0 ? cardImage : cardFacts}
				</div>
			</div>
		)
	})
	
	
	cardList.forEach((item) => {
		let factListHTML = '';
		for (let i = 0; i < item.factList.length; i++) {
			const fact = item.factList[i];
			factListHTML += `<p className="card-fact">${fact}</p>`;
		}
			
		if (item.id === 'size-0') {
			sidebarHTML +=
				<a
					className="nav-side-item ${item.id} js-nav-side-item"
					href="#${item.id}"
				>${item.title}</a>
		} else {
			sidebarHTML +=
				<a
					className="nav-side-item ${item.id}" href="#${item.id}"
				>${item.title}</a>
		}
			
			// document.querySelector('.js-size-body').innerHTML = sizeHTML;
			// document.querySelector('.js-nav-side-content').innerHTML = sidebarHTML;
	
	});
	
	//Highlights entries on sidenav based on position on the page
	window.addEventListener('scroll', () => {
			const position = Math.floor((scrollY) / 1000);
			if (position < cardList.length) {
					// NavSideHighlight(position);
			}
	
	});
	
	//Highlights the active card div and removes highlights from all others
	function NavSideHighlight(index) {
		const newCard = document.querySelector(`.size-${index}`);
		const oldCard = Array.from(document.getElementsByClassName('js-nav-side-item'));
		oldCard.forEach((card) => {
			card.classList.remove('js-nav-side-item');
		});
		newCard.classList.add('js-nav-side-item');
	}

	return cardElement
}