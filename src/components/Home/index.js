import './index.css'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <div className="shopping-item">
            <h1 className="item-heading">Clothes That Get YOU Noticed</h1>
            <p className="item-text">Fashion is part of the daily air...</p>
            <button className="shopnow-btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            className="cloths-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </>
    )
  }
}

export default Home
