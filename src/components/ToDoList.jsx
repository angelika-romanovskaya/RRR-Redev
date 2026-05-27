import { useState } from "react";

export const ToDoList = () => {
    const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

    return <div>
        <ul>
            {tasks.map((item , index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={() => setTasks(prevState => ([...prevState, 'Выучить реакт']))}>Add</button>
        <button onClick={() => setTasks(prevState => {
            let currentTasks = [...prevState]
            currentTasks.pop()

            return currentTasks

        })}>Delete last task</button>
    </div>
}