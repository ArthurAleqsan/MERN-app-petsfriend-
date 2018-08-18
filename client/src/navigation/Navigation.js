import React, {Component} from 'react';
import './Navigation.css';
import {NavLink, HashRouter} from "react-router-dom";

export default class Navigation extends Component {
    render() {

        return (
            <HashRouter>
                <nav className="navigation-top">
                    <ul className="navigation-top-container">
                        <li>
                            <NavLink exact to='/' className="navigation-top-item">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="navigation-top-item">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/partners' className="navigation-top-item">Partners</NavLink>
                        </li>
                        <li>
                            <NavLink to='/shops' className="navigation-top-item">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-in' className="navigation-top-item">Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-up' className="navigation-top-item">Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>
            </HashRouter>
            
        )
    }
}