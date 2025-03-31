import React, {Component} from "react";
import '../../App.css';
import Input from "./Input.jsx";

export class ContentMenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isClicked: false,
            selectedItemId: null,
            expandedTextId: null,
            countInput: 0,
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

    handleTextToggle = (id) => {
        this.setState((prevState) => ({
            expandedTextId: prevState.expandedTextId === id ? true : id
        }));
    };

    textMax = () => {
        this.setState({truncateText: false});
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
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <p>Error: {error.message}</p> && console.log(error);
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <>
                    <ul>
                        {items.map(item => (
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
                                        <Input count={this.state.count}
                                               onCountSubmit={this.handleCountSubmit}
                                               increment={this.props.increment}
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
}
