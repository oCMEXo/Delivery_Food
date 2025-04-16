import "../../App.css";
import React, {Component} from "react";

export default class Input extends Component {


    // handleChangeInput = (e) => {
    //     this.props.handleChange(e.target.value);
    // };


    // handleSubmitInput = (e) => {
    //     e.preventDefault()
    //     this.props.handleSubmit(e);
    // };


    render() {
        return (
            <>

                <form style={{
                    display: "flex",
                    gap: '10px'
                }}
                      onSubmit={this.props.handleSubmit}>
                    <input
                        type="number"
                        placeholder='0'
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
                </form>

                <button onClick={() => this.props.addToOrder(this.props.item)}>Add to cart</button>
            </>
        );
    }
}
