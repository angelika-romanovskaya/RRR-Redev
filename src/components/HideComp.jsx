import { useState } from "react"

export const HideComp = () => {
    const [hide, setHide] = useState(false)

    return <div style={{display: 'flex', gap: 3, alignItems: 'center'}}>
        <button onClick={() => setHide(prevState => !prevState)}>{hide ? "Открыть" : "Скрыть"}</button>
        {!hide && <h3 style={{margin: 0, padding: 0}}>Привет</h3>}
    </div>
}