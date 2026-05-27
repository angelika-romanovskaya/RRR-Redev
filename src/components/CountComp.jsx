import { useState } from "react"

export const CountComp = () => {
    const [count, setCount] = useState(0)

    return <div style={{display: 'flex', gap: 3, alignItems: 'center'}}>
        <h3>{count}</h3>
        <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
    </div>
}