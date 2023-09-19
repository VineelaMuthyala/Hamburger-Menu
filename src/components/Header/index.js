import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'

import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      className="website-logo"
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
    />
    <Popup trigger={<GiHamburgerMenu className="burger-icon" />}>
      <div className="pop-up-container">
        <div className="home-popup-container">
          <AiFillHome />
          <p>Home</p>
        </div>
      </div>
    </Popup>
  </div>
)
export default Header
