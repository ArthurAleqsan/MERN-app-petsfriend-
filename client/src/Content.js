import React,{Component} from 'react';

import {Route, HashRouter} from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Partners from "./partners/Partners";
import SignIn from "./sign-in/SignIn";
import Shops from "./shops/Shops";
import SignUp from "./sign-up/SignUp";
import Walking from "./select-box-service/walking/Walking";
import Medicine from "./select-box-service/medicine/Medicine";
import Accessories from "./select-box-service/accesuares/Accesuares";
import Shop from "./select-box-service/shop/Shop";
import Food from "./select-box-service/food/Food";
import Blog from "./select-box-service/blog/Blog";
import TemproralyKeep from "./select-box-service/temproralyKeep/TemproralyKeep";


export default class Content extends Component {

    render () {

        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/partners" component={Partners}/>
                    <Route exact path="/shops" component={Shops}/>
                    <Route exact path="/sign-in" component={SignIn}/>
                    <Route exact path="/sign-up" component={SignUp}/>
                    <Route exact path="/walking" component={Walking}/>
                    <Route exact path="/medicine" component={Medicine}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/food" component={Food}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/temproralyKeep" component={TemproralyKeep}/>
                </div>
            </HashRouter>
        )
    }
}
