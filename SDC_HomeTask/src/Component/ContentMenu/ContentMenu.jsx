import '../../App.css'
import React, {Component} from "react";


export class ContentMenuMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            selectedCategory: []
        };
    }

    componentDidMount() {
        fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals')
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
                        error
                    });
                }
            );
    }


    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <p>Error {error.message}</p>;
        }   else if (!isLoaded){
            return <p> Loaded... </p>
        } else {

            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <img src={item.img} alt={`Burger`}/>
                            <div className="contentBlog">
                                <div className="nameAndCost">
                                    <h3>{item.meal}</h3>
                                    <p>$ {item.price}</p>
                                </div>
                                <p className="ipsum">
                                    {item.instructions}
                                </p>
                                <div className="sizeAdd">
                                    <p>1</p>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            );
        }
    }
}


