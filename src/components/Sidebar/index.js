import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import {
  faHome,
  faHistory,
  fa5,
  faCalendar,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="dailyphoto-link"
          to="/dailyphoto"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faCalendar} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="dayinthelife-link"
          to="/dayinthelife"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHistory} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="fivephotostory-link"
          to="/fivephotostory"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={fa5} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/21jadennguyen/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar