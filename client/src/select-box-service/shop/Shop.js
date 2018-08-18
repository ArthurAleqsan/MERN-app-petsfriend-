import React, {Component} from 'react';

export default class Shop extends Component{

    render() {
        {console.log(this.props.location.state && this.props.location.state.referrer)}
        return(
            <div>Shop</div>
        )
    }
}