import React from 'react';
import logo from './../images/gotjokes.png'

function Header(props){
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    )
}

export default Header;
