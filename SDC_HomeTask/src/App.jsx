import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <form>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" name="street" />
                <label htmlFor="house">House</label>
                <input type="text" id="house" name="house" />
                <div className="button-wrapper">
                    <button type="submit">
                        Order
                        <span className="tooltip">Нажмите, чтобы оформить заказ!</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;