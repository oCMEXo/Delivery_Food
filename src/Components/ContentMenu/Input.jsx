import "../../App.css";
import React, {Component} from "react";

export default class Input extends Component {

    render() {
        return (
            <>
                <input
                    type="number"
                    placeholder='0'
                    value={this.props.input || ''}
                    onChange={this.props.handleChange}
                    min="0"
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

                {/*<button onClick={() => this.props.addToOrder(this.props.item)}>Add to cart</button>*/}
                <button onClick={() => this.props.addToOrder({
                    ...this.props.item,
                    quantity: this.props.input
                })}>
                    Add to cart
                </button>
            </>
        );
    }
}
