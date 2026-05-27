import { useState } from "react"
import { ChildComponent } from "./ChildComponent"
import { SiblingComponent } from "./SiblingComponent"

export const ParentComponent = () => {
    const [count, setCount] = useState(0)

    return <div>
        <h3>Счетчик: {count}</h3>
        <button style={{backgroundColor: 'green'}} onClick={() => setCount(prevState => prevState + 1)}>Увеличить</button>
        <button style={{backgroundColor: 'yellow', color: '#000'}} onClick={() => setCount(0)}>Сбросить</button>
        <button style={{backgroundColor: 'blue'}} onClick={() => setCount(Math.floor(Math.random() * 10) + 1)}>Случайное значение</button>
        <button style={{backgroundColor: 'red'}} onClick={() => setCount(prevState => prevState > 0 ? prevState - 1 : prevState)}>Уменьшить</button>

        <ChildComponent name="Паша" count={count}/>

        <SiblingComponent/>
    </div>
}