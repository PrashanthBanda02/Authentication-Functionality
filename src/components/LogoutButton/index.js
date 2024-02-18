import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const handleLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button type="button" className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
