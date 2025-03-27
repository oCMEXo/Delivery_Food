import React, { Component } from "react";
import '../../App.css';

export class ContentMenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isClicked: false,
            selectedItemId: null,
            expandedTextId: null
        };
    }

    componentDidMount() {
        const URL_MEALS = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';
        fetch(URL_MEALS)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    handleItemClick = (id) => {
        this.setState({ selectedItemId: id });
    };

    handleTextToggle = (id) => {
        this.setState((prevState) => ({
            expandedTextId: prevState.expandedTextId === id ? null : id
        }));
    };


    truncateText = (text, maxLength = 80, id) => {
        const { expandedTextId } = this.state;
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
        const { error, isLoaded, items, selectedItemId} = this.state;

        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}
                                onClick={() => this.handleItemClick(item.id)}
                                style={{
                                    // height: selectedItemId === item.id ? 'auto' : '160px',
                                    // alignItems: selectedItemId === item.id ? 'start' : '',
                                }}
                            >
                                <img src={item.img} alt={item.meal} />
                                <div className="contentBlog">
                                    <div className="nameAndCost">
                                        <h3>{item.meal}</h3>
                                        <p>$ {item.price}</p>
                                    </div>
                                    <p className="ipsum">
                                        {this.truncateText(item.instructions, 80, item.id)}
                                    </p>
                                    <div className="sizeAdd">
                                        <p>{this.props.count}</p>
                                        <button onClick={() => {
                                            this.props.incrementCount()
                                        }}>Add to cart</button>
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
}
