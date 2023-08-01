import './index.css'
import {Component} from 'react'

class LoginFrom extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onClickLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  renderLoginFrom = () => {
    const {username, password, errorMsg, showError} = this.state
    return (
      <form onSubmit={this.onClickLogin} className="login-form">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          id="username"
          className="input"
          type="text"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="username"
        />
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          id="password"
          className="input"
          value={password}
          type="password"
          onChange={this.onChangePassword}
          placeholder="password"
        />
        <button className="login-btn" type="submit" data-testid="login button">
          Login
        </button>
        {showError && <p className="error-msg">{errorMsg}</p>}
      </form>
    )
  }

  render() {
    return (
      <div className="login-container">
        <img
          className="website-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-form-container login-form">
          {this.renderLoginFrom()}
        </div>
      </div>
    )
  }
}

export default LoginFrom
