import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


import './Services.css';

export default class Services extends Component {
    state = {
        redirect: false,
        url : null,
        selectedPet : null,
    };
    selectService(pet,service) {
        if(service.indexOf(' ') > -1) {
            this.setState({
                url : service.split(' ')[1],
            });
        }else {
            this.setState({
                url : service,
            });
        }
        this.setState({
            selectedPet : pet,
            redirect: true,
        });
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: `/${this.state.url}`,
                state: { referrer: this.state.selectedPet }
            }}/>
        }
    };
    render() {
        return (
            <div>
                <div className="select-box-services select-box">
                   {this.props.selectedPet.icons.map(img =>
                       <div
                           className="select-box-services-icons"
                           key={img}
                       >
                            <div>
                                <img src={require(`../assets/images/services-icons/${img}`)} alt={img}/>
                            </div>
                        </div>
                    )}

                </div>
                <div className="select-box-services-names">
                    {this.renderRedirect()}
                    {this.props.selectedPet.services.map(serviceName =>

                        <div
                            className="select-box-animal-or-choose"
                            key={serviceName}
                            onClick={() => this.selectService(this.props.selectedPet, serviceName)}
                        >
                            <p>
                                {serviceName}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}