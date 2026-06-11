import { useCallback, useState } from "react";
import { CardItem } from "./CardItem";

export const Basket = () => {
    const [cart, setCart] = useState([
        { id: 1, title: "Футболка", count: 1 },
        { id: 2, title: "Кепка", count: 2 },
    ]);

    const addCountCart = useCallback((id) => {
        setCart(prevState => prevState.map((item) => item.id === id ? {...item, count: item.count + 1} : item))
    }, [])

    const removeCountCart = useCallback((id) => {
        setCart(prevState => prevState.filter((item) => item.id !== id))
    },[])

    return <div style={{display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', justifyContent: 'center'}}>
        {cart.map((item, index) => <CardItem key={item.id} item={item} addCountCart={addCountCart} removeCountCart={removeCountCart}/>)}

        <button style={{backgroundColor: "yellow", color: '#000'}} onClick={() => setCart([])}>reset basket</button>
    </div>
}