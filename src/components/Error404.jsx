import '../utils/compare.jsx'

export default function Error404() {
  return (
    <>
      <div className="view-body">
        <div className="compare-intro error-page">
            <img className="card-image" src='img/404.jpg' />
            <h1 className="error-intro">Error 404</h1>
            <p>Page not found :(</p>
            <p>If this was done unintentionally please let me know so I can fix it!</p>
            <a href='mailto:seancruickshank2025@gmail.com'>Here is my email!</a>
        </div>
      </div>
    </>
  )
}