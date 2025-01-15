import { sizeList } from '../data/sizedata.js'
import { distanceList } from '../data/distancedata.js'
import { temperatureList } from '../data/temperaturedata.js'
import { speedList } from '../data/speeddata.js'

// Grabs the corresponding data array for the page URL
export function dataSelect() {
	const location = window.location.href.toLowerCase()
	let cardList = [];
	if (location.includes('size')) {
		cardList = sizeList
	} else if (location.includes('distance')) {
		cardList = distanceList
	} else if (location.includes('temperature')) {
		cardList = temperatureList
	} else if (location.includes('speed')) {
		cardList = speedList
	}
	return cardList
}

export function getCompareData(location) {
	// Calls the above function to get a data array
	let cardList = dataSelect()
	// Used for displaying the fact count on page and alternating the image/factlist
	let cardCount = 0;
	// Used for generating keys
	let factCount = 0;
	
	//Generates HTML cards for each entry in cardList
	const cardElement = cardList.map((item) => {
		cardCount++

		// Generates the paragraphs for each fact in the factlist 
		const factListElement = item.factList.map((fact) => {
			return <p key={factCount++} className='card-fact'>{fact}</p>
		})
	
		// Generates the Image and image caption
		const cardImage =
			<div key={factCount++} className="col-lg-6 col-12">
				<img
					className="card-image"
					src={item.image}
					title={`${item.imageDesc} by ${item.imageCaption}`}
				/>
				<p className="card-image-caption">{item.imageDesc}</p>
			</div>
	
		// Generates the div for the factlist and inserts the paragraphs created above
		const cardFacts = 
		<div key={factCount++} className="card-fact-container col-lg-6 col-12">
			<h2>Facts:</h2>
			<>{factListElement}</>
		</div>
	
		// Generates the fact metric based on the active page
		let metricElement;
		if (location === 'size') {
			metricElement = <p className="card-diameter">Diameter: {item.size}</p>
		} else if (location === 'distance') {
			metricElement = <p className="card-distance">Distance: {item.distance}</p>
		} else if (location === 'temperature') {
			metricElement = <p className="card-temperature">Temperature: {item.temperature}</p>
		} else if (location === 'speed') {
			metricElement = <p className="card-speed">Speed: {item.speed}</p>
		}
	
		// Puts together the finished product
		// Image and fact list alternate sides every other card
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
	// return <p>WIP</p>
	return cardElement
}