import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/">
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              className="menu-button"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="menu" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="no-header-container">
              <button
                className="close-button"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close" />
              </button>
              <ul className="pop-up-container">
                <li>
                  <Link to="/" className="home-about-popup-container">
                    <AiFillHome />
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="home-about-popup-container">
                    <BsInfoCircleFill />
                    <p>About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default withRouter(Header)
