import React,{Component} from 'react';

import './Home.css';
import SelectBox from "../select-box/SelectBox";

export default class Home extends Component {
    render() {
        return (
            <section className="main-header">
                <div className="main-header-description">
                    <div>
                        <h1 className="main-header-description-h1">Lorem ipsum dolor sit amet,</h1>
                        <h3>consectetur adipisicing elit.
                            Ab aliquam doloremque facilis fuga fugiat fugit impedit nulla officia,
                            pariatur perferendis provident quasi quibusdam quidem quod repellat ullam vero?
                        </h3>
                    </div>
                </div>
                <SelectBox
                        pets = {[
                            {'id': 1, 'itemName': 'DOG', 'img': 'dog.png', 'isActive': false},
                            {'id': 2, 'itemName': 'CAT', 'img': 'cat.png', 'isActive': false},
                            {'id': 3, 'itemName': 'PARROT', 'img': 'parrot.png', 'isActive': false},
                            {'id': 4, 'itemName': 'FISH', 'img': 'fish.png', 'isActive': false},
                            {'id': 5, 'itemName': 'SOMEONE ELSE', 'img': 'briefcase.png', 'isActive': false},
                        ]}
                />
            </section>
        )

    }
}