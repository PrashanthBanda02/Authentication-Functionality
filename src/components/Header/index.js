import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <button type="button">Home</button>
    </Link>
    <Link to="/about">
      <button type="button" className="header-btn">
        About
      </button>
    </Link>
  </div>
)

export default withRouter(Header)
