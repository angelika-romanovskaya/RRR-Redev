import React from "react"

export const UserInfoItem = React.memo(({ name, age, isActive }) => {
    console.log('render UserInfoItem', name)
    return <h2>Name: {name}, Age: {age}, Active: {isActive ? 'true' : 'false'}</h2>
})