import { useState } from "react"

export const SiblingComponent = () => {
    const [text, setText] = useState('Привет')

    return <div>
        <h3>{text}</h3>
        <button onClick={() => setText('Redev')}>click</button>
    </div>
}