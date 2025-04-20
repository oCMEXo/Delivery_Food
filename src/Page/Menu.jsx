import React, {Component} from "react";
import Header from "../Components/Layout/Header.jsx";
import OrderMainMenu from "../Components/Orders/OrderContent.jsx";
import Footer from "../Components/Layout/Footer.jsx";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            AddToSubmit: 0,
            order: [],
            error: null,
            isLoaded: false,
            items: [],
            quantityMap: {},
        }


        this.handleChange = this.handleChange.bind(this);
        this.getTotalQuantity = this.getTotalQuantity.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }


    handleChange = (e) => {
        this.setState({ input: parseInt(e.target.value) });
    };

    getTotalQuantity = () => {
        return this.state.order.reduce((sum, item) => sum + item.quantity, 0);
    };


    handleQuantityChange = (id, value) => {
        this.setState((prevState) => ({
            quantityMap: {
                ...prevState.quantityMap,
                [id]: value
            }
        }));
    };


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

    render() {
        const {error, isLoaded} = this.state;

        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <>

                    <Header
                        getTotalQuantity={this.getTotalQuantity()}
                        order={this.state.order}
                    />

                    <OrderMainMenu
                        error={this.state.error}
                        isLoaded={this.state.isLoaded}
                        items={this.state.items}
                        addToOrder={this.addToOrder}
                        input={this.state.input}
                        handleChange={this.handleChange}
                        quantityMap={this.state.quantityMap}
                        handleQuantityChange={this.handleQuantityChange}
                    />

                    <Footer/>
                </>
            )

        }
    }

    addToOrder = (newItem) => {
        this.setState((prevState) => {
            const updatedOrder = [...prevState.order];
            const existingIndex = updatedOrder.findIndex(item => item.id === newItem.id);

            if (existingIndex !== -1) {
                updatedOrder[existingIndex].quantity += newItem.quantity;
            } else {
                updatedOrder.push(newItem);
            }
            return {
                order: updatedOrder,
            };
        }, () => {
            console.log("Order:", this.state.order);
        });
    };


}