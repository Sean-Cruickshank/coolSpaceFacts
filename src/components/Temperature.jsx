import '../utils/compare.jsx'
import { getCompareData } from '../utils/compare.jsx'

export default function Temperature() {
  const cardElement = getCompareData('temperature')
  return (
    <>
      <div className="view-body">
        <div className="compare-intro">
          <h1 className="compare-intro-temperature">The Heat of the Universe</h1>
          <p>From the coldest reaches of deep space to the cores of the brightest stars, with some familiar places in between. This page explores the temperature extremes of the universe.</p>
        </div>
        <div className="js-temperature-body">
          {cardElement}
        </div>
      </div>
    </>
  )
}