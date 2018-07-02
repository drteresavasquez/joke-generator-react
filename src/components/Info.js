import React, { Component } from 'react';

export default class Info extends Component{
    render(){
        return(
            <div className="Info">
                <h1>Created By Dr. Teresa Vasquez</h1>
                <p>I love to hear a good, corny joke. I began creating this app in the UX/UI Cohort I was instructing and shared it with my kids who LOVED it!</p>
                <p>I decided to update the interface so that they and others like us who love to clown around can get a great experience. While this is developed for the phone, it works well on Desktop as well.</p>

                <h3>Technologies:</h3>
                
                <ul>
                    <li>ReactJS</li>
                    <li>Joke API</li>
                    <li>JSX</li>
                    <li>SASS</li>
                </ul>

                <h3>Check Me Out:</h3>
                <ul>
                    <li><a href="https://github.com/drteresavasquez">GitHub</a></li>
                    <li><a href="http://facebook.com/DrTeresaVasquez">Facebook</a></li>
                    <li><a href="http://www.drteresavasquez.com">My Website</a></li>
                    <li><a href="http://portfolio.drteresavasquez.com">My Portfolio</a></li>
                
                </ul>
            </div>
        )
    }
}