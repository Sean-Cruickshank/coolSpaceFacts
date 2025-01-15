import '../utils/compare.jsx'
import { getCompareData } from '../utils/compare.jsx'

import earth from '../images/404.jpg'

export default function Error404() {
  const cardElement = getCompareData('size')
  return (
    <>
      <div className="view-body">
        <div className="compare-intro">
            <img src={earth} />
            <h1 className="compare-intro-error">Error 404</h1>
            <p>Page not found :(</p>
            <p>If this was done unintentionally please let me know so I can fix it!</p>
            <p>Email: seancruickshank2025@gmail.com</p>
        </div>
        <div className="js-size-body">
          {cardElement}
        </div>
      </div>
    </>
  )
}