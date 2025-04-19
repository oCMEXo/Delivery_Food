    import React, {Component} from "react";
    import '../../App.css';
    import Input from "./Input.jsx";

    export class ContentMenuMain extends Component {
        constructor(props) {
            super(props);
            this.state = {
                expandedTextId: null,
            };
        }


        handleTextToggle = (id) => {
            this.setState((prevState) => ({
                expandedTextId: prevState.expandedTextId === id ? true : id
            }));
        };

        textMax = () => {
            if (this.state.truncateText !== false) {
                this.setState({ truncateText: false });
            }
        }

        truncateText = (text, maxLength = 90, id) => {
            const {expandedTextId} = this.state;
            if (!text) return "";

            if (expandedTextId !== id) {
                return (
                    <>
                        {text.length > maxLength ? (
                            <>
                                {text.slice(0, maxLength)}{" "}
                                <button
                                    style={{
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        color: 'black'
                                    }}
                                    onClick={() => this.handleTextToggle(id)}
                                >
                                    (Read more...)
                                </button>
                            </>
                        ) : (
                            text
                        )}
                    </>
                );
            }

            return text;
        }

        render() {

                return (
                    <>
                        <ul>
                            {this.props.items.map(item => (
                                <li key={item.id}
                                    onMouseEnter={this.textMax}
                                >
                                    <img src={item.img} alt={item.meal}/>
                                    <div className="contentBlog">
                                        <div className="nameAndCost">
                                            <h3>{item.meal}</h3>
                                            <p>$ {item.price}</p>
                                        </div>
                                        <p className="ipsum">
                                            {this.truncateText(item.instructions, 80, item.id)}
                                        </p>
                                        <div className="sizeAdd">
                                            <Input
                                                addToOrder={this.props.addToOrder}
                                                item={item}
                                                input={this.state.quantityMap[item.id] || ""}
                                                handleChange={(e) => this.props.handleQuantityChange(item.id, e.target.value)}
                                                quantityMap={this.props.quantityMap}

                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="seeMore">See more</button>
                    </>
                );
            }

    }
