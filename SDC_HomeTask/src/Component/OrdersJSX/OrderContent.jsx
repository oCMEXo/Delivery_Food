import React, { Component} from 'react';
import '../../App.css';
import {ContentMenuMain} from "../ContentMenu/ContentMenu.jsx";

export default class OrderMainMenu extends Component {


    state = {
        isActive: null,
        isMessageVisible: false
    };

    handClick = (category) => {
        console.log("Выбрана категория:", category);
        this.setState({ isActive: category });
    };

    handleMouseEnter = () => {
        this.setState({ isMessageVisible: true });
    };

    handleMouseLeave = () => {
        this.setState({ isMessageVisible: false });
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
                    <button
                        onClick={() => this.handClick('Dessert')}
                        className={this.state.isActive === 'Dessert' ? 'active' : ''}
                    >
                        Dessert
                    </button>
                    <button
                        onClick={() => this.handClick('Dinner')}
                        className={this.state.isActive === 'Dinner' ? 'active' : ''}
                    >
                        Dinner
                    </button>
                    <button
                        onClick={() => this.handClick('Breakfast')}
                        className={this.state.isActive === 'Breakfast' ? 'active' : ''}
                    >
                        Breakfast
                    </button>

                </div>
                <ul>
                    <ContentMenuMain/>
                </ul>

                <button className="seeMore">See more</button>
            </main>
        );
    }
}
