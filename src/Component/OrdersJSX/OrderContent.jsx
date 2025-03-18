import React, {Component} from 'react';
import '../../App.css';
import {ContentMenuMain} from "../ContentMenu/ContentMenu.jsx";
import ButtonEats from "../ContentMenu/ButtonEat.jsx";

export default class OrderMainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButton: null
        }
    }

    state = {
        isActive: null,
        isMessageVisible: false
    };


    handleMouseEnter = () => {
        this.setState({isMessageVisible: true});
    };

    handleMouseLeave = () => {
        this.setState({isMessageVisible: false});
    };

    handleButtonClick = (buttonId) => {
        this.setState({selectedButton: buttonId});
    };


    render() {
        const bd_Order = [
            {id: 1, text: "Breakfast"},
            {id: 2, text: "Lunch"},
            {id: 3, text: "Dinner"}
        ]
        return (
            <main className="mainManu">
                <div className="infoPageMenu">
                    <h1>Browse our menu</h1>
                    <div className="labelMenu">
                        Use our menu to place an order online, or
                        <button
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            className="phone"> phone</button>
                        our store to place a pickup order. Fast and fresh food.
                    </div>
                    {this.state.isMessageVisible && (
                        <div className="message">+370453020340</div>
                    )}
                </div>

                <div className="buttonChoiceEating">
                    {bd_Order.map((button) => (
                        <ButtonEats key={button.id}
                                    buttonText={button.text}
                                    isSelected={this.state.selectedButton === button.id}
                                    onClick={() => this.handleButtonClick(button.id)}
                        />))}
                </div>

                <ContentMenuMain/>


            </main>
        );
    }
}
