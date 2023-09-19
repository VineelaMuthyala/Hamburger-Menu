import Header from '../Header'
import './index.css'

const About = () => (
  <div className="bg-container">
    <Header />
    <div className="about-container">
      <img
        className="about-image"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      />
    </div>
  </div>
)
export default About
