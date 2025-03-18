import {Component} from "react";


export default class ButtonEats extends Component {
    render() {
        const {buttonText, isSelected, onClick} = this.props;
        return (
            <button
                onClick={onClick}
                style={{
                    fontWeight: 400,
                    lineHeight: "20px", /* 125% */
                    width: "132px",
                    height: "52px",
                    borderRadius: "6px",
                    border: isSelected ? "1px solid rgba(97, 114, 131, 0.20)" : "none",
                    cursor: "pointer",
                    backgroundColor: isSelected ? "#00a89a" : "#f0f0f0",
                    transition: "background-color 0.5s ease-in-out",
                    color: isSelected ? "white" : "black",
                }}
            >
                {buttonText}
            </button>

        )
    }
}