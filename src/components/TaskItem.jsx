import React from "react"

export const TaskItem = React.memo(({item}) => {
    console.log('render TaskItem', item)
    return <li>{item}</li>
})