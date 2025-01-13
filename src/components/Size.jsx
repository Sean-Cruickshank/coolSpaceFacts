import '../utils/size.jsx'
import { cardElement } from '../utils/size.jsx'

export default function Size() {

  
  return (
    <>
      <div className="view-body">
        <div className="compare-intro">
            <h1 className="compare-intro-size">The Size of the Universe</h1>
            <p>From asteroids to the largest structures in existance. This page explores the size of objects in our universe.</p>
        </div>
        <div className="js-size-body">
          {cardElement}
        </div>
      </div>
    </>
  )
}