import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  handleLoginButton = () => {
    const {history} = this.props
    Cookies.set('jwt_token', 'sample-token', {expires: 10})
    history.replace('/')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page-container">
        <h1 className="login-heading">Please Login</h1>
        <button type="button" onClick={this.handleLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
