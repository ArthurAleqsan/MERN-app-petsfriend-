import React, {Component} from 'react';

import './SelectBox.css';
import Services from "../select-box-service/Services";

export default class SelectBox extends Component {
    state = {
        id : null,
        selectedPet : {}
    };
    selectPet (pet){
        this.setState({ id : pet.id});
        this.fetchData(pet.id)
    }

    fetchData = pet_id => {
        const url = pet_id ? `/api/router/index/${pet_id}` : '';
        fetch( url , {
            method: "GET",
            dataType: "JSON",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
            .then((resp) => {
                return resp.json()
            })
            .then(selectedPet => {
                this.setState({ selectedPet : selectedPet});
                // console.log(this.state.selectedPet);
            })
            .catch((error) => {
                console.log(error, "catch the hoop")
            })
    };

    render(){
        return(
            <div className="select-box">
                {this.props.pets.map(pet =>
                    <div
                        className={this.state.id === pet.id? "select-box-animal-or-choose actived" : "select-box-animal-or-choose"}
                        key={pet.id}
                        onClick={() => this.selectPet(pet)}
                    >
                        <p className="select-box-animal-title">{pet.itemName}</p>
                        <img src={require(`../assets/images/selectBox/${pet.img}`)} alt={pet.img}/>
                    </div>
                )}
                {this.state.selectedPet.hasOwnProperty('services') &&
                    <Services
                        selectedPet = {this.state.selectedPet}
                    />
                }

            </div>
        );

    }

}

