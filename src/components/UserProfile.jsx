import { useState } from "react";
import { UserInfoItem } from "./UserInfoItem";

export const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Иван",
        age: 25,
        isActive: true,
    });

    return <div>
         <UserInfoItem
            name={user.name}
            age={user.age}
            isActive={user.isActive}
        />

        <button onClick={() => setUser(prevState => ({...prevState, name: prevState.name === 'Angelika' ? 'Иван' : "Angelika"}))}>Сменить имя</button>
        <button onClick={() => setUser(prevState => ({...prevState, age: prevState.age + 1}))}>Увеличить возраст</button>
        <button onClick={() => setUser(prevState => ({...prevState, isActive: !prevState.isActive}))}>Переключить активность</button>
    </div>
}