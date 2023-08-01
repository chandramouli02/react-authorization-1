import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          className="header-logo-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="header-nav">
          <li>
            <Link className="header-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-nav-item" to="/products">
              products
            </Link>
          </li>
          <li>
            <Link className="header-nav-item" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="header-btn" to="/login">
              <button type="button" className="header-nav-btn">
                logout
              </button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
