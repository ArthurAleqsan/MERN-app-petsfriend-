import React, {Component} from 'react';

import './Services.css';

export default class Services extends Component {
    render() {
        console.log(this.props)
        // if (this.props.services.length > 0) {
            return (
                <div>
                    <div className="select-box-services select-box">
                        {this.props.selectedPet.services.map(service =>
                            <div className="select-box-services-icons">
                                <div>
                                    <img src={require(`../assets/images/services-icons/${service.img}`)} alt={service.img}/>
                                </div>
                            </div>
                        )}
                        {/*<div className="select-box-services-icons">*/}
                        {/*/!*<div>*!/*/}
                        {/*<img src="{{icon}}" alt="">*/}
                        {/*/!*</div>*!/*/}
                        {/*</div>*/}
                        {/*<div className="select-box-services-names">*/}
                        {/*<div className="select-box-animal-or-choose">*/}
                        {/*/!*<p >*!/*/}
                        {/*/!*{{service}}*!/*/}
                        {/*/!*</p>*!/*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            );
        // }
    }
}