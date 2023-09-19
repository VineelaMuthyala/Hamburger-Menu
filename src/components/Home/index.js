import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <Header />
        <div className="home-container">
          <img
            className="home-page-image"
            alt="home"
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          />
        </div>
      </div>
    )
  }
}
export default Home
