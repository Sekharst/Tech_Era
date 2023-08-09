import {Link} from 'react-router-dom'

import './index.css'

// import {NoCon, NoIm, Nel, Logo, Noh, Nop} from './style'

const NotFound = () => (
  <div>
    <Link to="/" className="link-el">
      <navbar className="nav-bar">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </navbar>
    </Link>
    <div className="no-container">
      <img
        className="no-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="no-head">Page Not Found</h1>
      <p className="no-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
