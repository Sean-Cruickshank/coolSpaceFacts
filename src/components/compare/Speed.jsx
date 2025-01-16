import '../../utils/compare.jsx'
import { getCompareData } from '../../utils/compare.jsx'

export default function Speed() {
  const cardElement = getCompareData('speed')
  return (
    <>
      <div className="view-body">
        <div className="compare-intro">
          <h1 className="compare-intro-speed">The Speed of the Universe</h1>
          <p>From planetary days so slow you could outwalk them, to the cosmic speed limit. This page explores the fastest objects in the universe.</p>
        </div>
        <div className="js-speed-body">
          {cardElement}
        </div>
      </div>
    </>
  )
}