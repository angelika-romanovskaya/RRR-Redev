import { useState } from "react";

export const Basket = () => {
    const [cart, setCart] = useState([
        { id: 1, title: "Футболка", count: 1 },
        { id: 2, title: "Кепка", count: 2 },
    ]);

    const addCountCart = (id) => {
        setCart(prevState => prevState.map((item) => item.id === id ? {...item, count: item.count + 1} : item))
    }

    const removeCountCart = (id) => {
        setCart(prevState => prevState.filter((item) => item.id !== id))
    }

    return <div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', justifyContent: 'center'}}>
        {cart.map((item, index) => <div key={index} style={{display: 'flex', alignItems: 'center', gap: 15}}>
            <h2>Name: {item.title}</h2>
            <span>count: {item.count}</span>

            <button style={{backgroundColor: 'green'}} onClick={() => addCountCart(item.id)}>+1</button>
            <button style={{backgroundColor: 'red'}} onClick={() => removeCountCart(item.id)}>remove</button>
        </div>)}

        <button style={{backgroundColor: "yellow", color: '#000'}} onClick={() => setCart([])}>reset basket</button>
    </div>
}