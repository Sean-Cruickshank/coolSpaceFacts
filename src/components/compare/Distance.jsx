import '../../utils/compare.jsx'
import { getCompareData } from '../../utils/compare.jsx'

export default function Distance() {
  const cardElement = getCompareData('distance')
  return (
    <>
      <div className="view-body">
        <div className="compare-intro">
          <h1 className ="compare-intro-distance">The Scale of the Universe</h1>
          <p>From the satellites in low Earth orbit to the most distant reaches of the cosmos. This page explores objects by their distance from Earth.</p>
        </div>
        <div className="js-distance-body">
          {cardElement}
        </div>
      </div>
    </>
  )
}