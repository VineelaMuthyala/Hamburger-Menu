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
            <button className="menu-button" type="button">
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => (
            <div>
              <button
                className="close-btn"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <div className="pop-up-container">
                <div>
                  <Link to="/" className="home-popup-container">
                    <AiFillHome />
                    <p>Home</p>
                  </Link>
                </div>
                <div>
                  <Link to="/about" className="home-popup-container">
                    <BsInfoCircleFill />
                    <p>About</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default withRouter(Header)
