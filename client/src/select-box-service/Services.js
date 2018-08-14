import React, {Component} from 'react';

import './Services.css';

export default class Services extends Component {
    render() {
        console.log(this.props.selectedPet);
            return (
                <div>
                    <div className="select-box-services select-box">
                       {this.props.selectedPet.icons.map(img =>
                           <div className="select-box-services-icons" key={img}>
                                <div>
                                    <img src={require(`../assets/images/services-icons/${img}`)} alt={img}/>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="select-box-services-names">
                        {this.props.selectedPet.services.map(serviceName =>
                            <div className="select-box-animal-or-choose" key={serviceName}>
                                <p>
                                    {serviceName}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            );
        // }
    }
}