import * as React from 'react'
import { Link } from '@reach/router'
import './Header.scss'

const Header = () => {
  return (
    <header className="app__header">
      <Link className="" to="/">
        <h1 className="title">Rockets & Dragons</h1>
      </Link>

      <nav className="nav">
        <Link className="nav__link" to="/">
          Rockets
        </Link>
        <Link className="nav__link" to="/dragons">
          Dragons
        </Link>
      </nav>
    </header>
  )
}

export default Header
