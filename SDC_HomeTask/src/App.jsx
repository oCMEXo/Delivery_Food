import './App.css'

export default function App() {
    const items = ["item1", "item2", "items", "item4"];

    return (
        <div>
            <h1>Список элементов</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}


