import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './pokelogo.png'


export default class navbar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
              <Link className="navbar-brand mr-3 align-items-center" to="/"><img src={logo} alt="logo"/></Link> 
              
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" to="/">Home</Link> 
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" to="/pokesearch">Search</Link> 
              <Link className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" to="/teams">Teams</Link> 
                
              </nav>
            </div>
        )
    }
}
