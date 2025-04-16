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
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }


    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.input <= 99) {
            this.setState({
                AddToSubmit: this.state.input,
            });
        } else {
            // Пример простой обработки ошибки
            alert("Значение должно быть меньше или равно 99");
        }
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

                    <Header orders={this.state.order}/>

                    <OrderMainMenu
                        error={this.state.error}
                        isLoaded={this.state.isLoaded}
                        items={this.state.items}
                        addToOrder={this.addToOrder}
                    />

                    <Footer/>
                </>
            )

        }
    }
    addToOrder(item) {
        let isInArray = false
        this.state.order.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray){
            this.setState(prevState => ({
                order: [...prevState.order, item], // Добавляем item в массив
            }), () => {
                console.log(this.state.order);
            });
        }else{
            alert(`${item.meal}: есть в корзине!`);
        }
    }
}