import React from 'react';
import logo from './../images/joker.png';
import back from './../images/back.png';
import info from './../images/info.png';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

    export default class Example extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Nav className="Nav-top">
                    <NavItem>
                      <NavLink href="#" onClick={this.props.viewApp} className="back-button"><img src={back} alt="back"/><span className="back-text">Get Another Joke</span></NavLink>
                    </NavItem>

                <NavItem>
                    <div className="header-logo">
                        <img src={logo} className="App-logo" alt="logo"/>
                    Joke Generator
                    </div>
                </NavItem>
                    <NavItem>
                      <NavLink href="#" onClick={this.props.viewInfo}><img src={info} alt="info"/></NavLink>
                    </NavItem>
                  </Nav>
            </div>
          );
        }
      }
