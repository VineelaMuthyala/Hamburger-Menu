import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        className="not-found-image"
        alt=" not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="text">Lost Your Way?</h1>
      <p className="text">
        Sorry we can`t find the page.You`ll find lots to explore on the home
        page.
      </p>
    </div>
  </div>
)
export default NotFound
