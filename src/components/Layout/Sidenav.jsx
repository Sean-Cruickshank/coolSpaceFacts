import { Outlet, Link, NavLink } from "react-router-dom"
import { dataSelect } from "../../utils/compare";

export default function Sidenav({clock, location, updateTheme}) {
  
  // Grabs the correct data array based on the page url
  let cardList = dataSelect()

  //Generates IDs for each data entry based on index in the array
  cardList.map((item, index) => {
		return item.id = `card-${index + 1}`;
	})

  // Generates the list of titles in the side nav
  // First entry (card-0) handled seperately to ensure it is always highlighted when user is at the top of the page
  const sidebarElement = cardList.map((item) => {
    if (item.id === 'card-0') {
			return (
				<a
					key={item.id}
          className={`nav-side-item ${item.id} js-nav-side-item`}
					href={`#${item.id}`}
				>{item.title}</a>
			)
		} else {
			return (
				<a
					key={item.id}
          className={`nav-side-item ${item.id}`} href={`#${item.id}`}
				>{item.title}</a>
			)
		}
	})

  //Highlights entries on sidenav based on position on the page
  window.addEventListener('scroll', () => {
    const position = Math.floor((scrollY) / 1000);
    if (position < cardList.length) {
        NavSideHighlight(position);
    }

	});
	
	//Highlights the active card div and removes highlights from all others
	function NavSideHighlight(index) {
		const newCard = document.querySelector(`.card-${index + 1}`);
    if (newCard) {
      const oldCard = Array.from(document.getElementsByClassName('js-nav-side-item'));
      oldCard.forEach((card) => {
        card.classList.remove('js-nav-side-item');
      });
      newCard.classList.add('js-nav-side-item');
    }
	}
  
  return (
    <>
      <div id="nav-side" className={`nav-side-width nav-side-${location}`}>
        <p className="nav-side-clock">Local Time</p>
        <p className="nav-side-clock">
            {clock}
        </p>
        <NavLink
          className={({isActive}) => isActive
          ? "nav-side-link-current nav-link nav-side-link" : "nav-link nav-side-link"
        } to="/"
          onClick={updateTheme}
        >Home</NavLink>
        <NavLink
          className={({isActive}) => isActive
          ? "nav-side-link-current nav-link nav-side-link" : "nav-link nav-side-link"
        }
          to="/sources"
          onClick={updateTheme}
          >Sources</NavLink>
        <div className="row justify-content-around">
          <div className="nav-side-content js-nav-side-content col">
            {sidebarElement}
          </div>
          </div>
      </div>

      <div className="nav-side-width">
          .
      </div>
    </>
  )
}