import { useState } from "react";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Иван",
        age: 25,
        isActive: true,
    });

    return <div>
        <h2>Name: {user.name}, Age: {user.age}, Active: {user.isActive ? 'true' : 'false'}</h2>

        <button onClick={() => setUser(prevState => ({...prevState, name: prevState.name === 'Angelika' ? 'Иван' : "Angelika"}))}>Сменить имя</button>
        <button onClick={() => setUser(prevState => ({...prevState, age: prevState.age + 1}))}>Увеличить возраст</button>
        <button onClick={() => setUser(prevState => ({...prevState, isActive: !prevState.isActive}))}>Переключить активность</button>
    </div>
}