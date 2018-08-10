import React,{Component} from 'react';

import {Route, HashRouter} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Partners from "./partners/Partners";
import SignIn from "./sign-in/SignIn";
import Shop from "./shop/Shop";
import SignUp from "./sign-up/SignUp";


export default class Content extends Component {

    render () {

        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/partners" component={Partners}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/sign-in" component={SignIn}/>
                    <Route exact path="/sign-up" component={SignUp}/>
                </div>
            </HashRouter>
        )
    }
}
