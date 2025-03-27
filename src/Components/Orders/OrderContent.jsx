import React, { Component} from 'react';
import '../../App.css'; // Подключаем стили

import burger1 from '../../assets/burger4.png';
import burger2 from '../../assets/burger1.png';
import burger3 from '../../assets/burger3.png';
import burger4 from '../../assets/burger4.png';
import burger5 from '../../assets/burger6.png';
import burger6 from '../../assets/burger7.png';

export default class OrderMainMenu extends Component {
    state = {
        isActive: null,
        isMessageVisible: false
    };



    handleCategoryChange = (e) => {
        this.setState({ isActive: e });
    };

    handleMouseEnter = () => {
        this.setState(state => ({
            isMessageVisible: !state.isMessageVisible,
        }));
    };

    handleMouseLeave = () => {
        this.setState({ isMessageVisible: false });
    };

    render() {
        const arrayBurger = [burger1, burger2, burger3, burger4, burger5, burger6];
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
                        onClick={() => this.handleCategoryChange('Dessert')}
                        className={this.state.isActive === 'Dessert' ? 'active' : ''}
                    >
                        Dessert
                    </button>
                    <button
                        onClick={() => this.handleCategoryChange('Dinner')}
                        className={this.state.isActive === 'Dinner' ? 'active' : ''}
                    >
                        Dinner
                    </button>
                    <button
                        onClick={() => this.handleCategoryChange('Breakfast')}
                        className={this.state.isActive === 'Breakfast' ? 'active' : ''}
                    >
                        Breakfast
                    </button>
                </div>

                <ul>
                    {arrayBurger.map((img, index) => (
                        <li key={index}>
                            <img src={img} alt={`Burger ${index}`} />
                            <div className="contentBlog">
                                <div className="nameAndCost">
                                    <h3>Burger {index}</h3>
                                    <p>$ 9.20 USD</p>
                                </div>
                                <p className="ipsum">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="sizeAdd">
                                    <p>1</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <button className="seeMore">See more</button>
            </main>
        );
    }
}
