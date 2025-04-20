import React, {Component} from 'react';
import '../../App.css';
import {ContentMenuMain} from "../ContentMenu/ContentMenu.jsx";
import ButtonEats from "../ContentMenu/ButtonEat.jsx";
import bd_Order_Name from "../ContentMenu/Navigation_Tabs.js";

export default class OrderMainMenu extends Component {

        state = {
            selectedButton: null,
            isMessageVisible: false,
        }


    handleMouseEnter = () => {
        this.setState({isMessageVisible: true});
    };

    handleMouseLeave = (e) => {
        e.preventDefault();
        this.setState({isMessageVisible: false});
    };

    handleButtonClick = (buttonId) => {
        this.setState({selectedButton: buttonId});
    };



    render() {
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
                    {bd_Order_Name.map((button) => (
                        <ButtonEats key={button.id}
                                    buttonText={button.text}
                                    isSelected={this.state.selectedButton === button.id}
                                    onClick={() => this.handleButtonClick(button.id)}
                        />))}
                </div>

                <ContentMenuMain
                    error={this.props.error}
                    isLoaded={this.props.isLoaded}
                    items={this.props.items}
                    addToOrder={this.props.addToOrder}
                    input={this.props.input}
                    handleChange={this.props.handleChange}
                    quantityMap={this.props.quantityMap}
                    handleQuantityChange={this.props.handleQuantityChange}


                />

            </main>
        );
    }
}
