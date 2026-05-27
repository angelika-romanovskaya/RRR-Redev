import { useState } from "react"

export const ColorComp = () => {
    const [color, setColor] = useState('red')

    return <div style={{display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
        <button onClick={() => setColor(prevState => prevState === 'red' ? 'blue' : 'red')}>change color</button>
        <h4 style={{margin: 0, padding: 0, color: color}}>Text</h4>
    </div>
}