import React from "react"

export const CardItem = React.memo(({item, addCountCart, removeCountCart}) => {
     console.log('render CardItem', item.id)
    return <div style={{display: 'flex', alignItems: 'center', gap: 15}}>
            <h2>Name: {item.title}</h2>
            <span>count: {item.count}</span>

            <button style={{backgroundColor: 'green'}} onClick={() => addCountCart(item.id)}>+1</button>
            <button style={{backgroundColor: 'red'}} onClick={() => removeCountCart(item.id)}>remove</button>
        </div>
})