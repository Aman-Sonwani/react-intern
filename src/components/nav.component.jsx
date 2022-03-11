import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="container">
            <NavLink href="" className="navbar-brand" to={'/'}>Home</NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className= "nav-item">
                  <NavLink href="" className="nav-link"  to={'/login'}>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="" className="nav-link" to={'register'}>Sign up</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
