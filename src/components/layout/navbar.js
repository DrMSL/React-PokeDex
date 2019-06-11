import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './pokelogo.png'


export default class navbar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
              <a href="#" className="navbar-brand mr-3 align-items-center"><img src={logo} /></a>
                <a href="#" className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Home</a>
              </nav>
            </div>
        )
    }
}
