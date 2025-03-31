import "../../App.css";
import React, {Component} from "react";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count || 0, // Инициализируем значение с props
            input: '0',
            submit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })// Обновляем локальное состояние при вводе
    };

    // Обработчик отправки значения при нажатии на кнопку
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submit: this.state.input,
        })
    };

    render() {
        return (
            <>
                <form style={{
                    display: "flex",
                    gap: '10px'
                }}
                      onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        placeholder='0'
                        value={this.state.input}
                        onChange={this.handleChange}  // Обновляем локальное состояние при изменении
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
                    <button type={"submit"} onClick={this.props.increment}>Add to cart</button>
                </form>
                <h3>{this.state.submit}</h3>
            </>

        );
    }
}
