import "../../App.css";
import React, {Component} from "react";

export default class Input extends Component {

    render() {
        return (
            <>
                <input
                    type="number"
                    placeholder='0'
                    value={this.props.input}
                    onChange={this.props.handleChange}

                    max="99"
                    style={{
                        color: 'black',
                        padding: "10px",
                        display: 'flex',
                        alignContent: 'center',
                        justifyContent: 'center',
                        width: "30px",
                        borderRadius: '6px',
                        border: '1px solid #DDD',
                        background: '#FAFAFA',
                    }}

                />

                <button  onClick={() => {
                    const quantity = parseInt(this.props.input) || 0;
                    if (quantity > 0) {
                        this.props.addToOrder({
                            ...this.props.item,
                            quantity,
                        });
                    }
                }}
                >
                    Add to cart
                </button>
            </>
        );
    }
}
