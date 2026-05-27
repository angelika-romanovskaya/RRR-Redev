import { useState } from "react"

export const InputComp = () => {
    const [value, setValue] = useState('')

    return <div style={{display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
        <input placeholder="text" type="text" value={value} name="text" onChange={(event) => setValue(event.target.value)}/>
        <h4  style={{margin: 0, padding: 0}}>{value}</h4>
    </div>
}