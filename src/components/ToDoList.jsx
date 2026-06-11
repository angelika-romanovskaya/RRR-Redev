import { useState } from "react";
import { TaskItem } from "./TaskItem";

export const ToDoList = () => {
    const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

    return <div>
        <ul>
            {tasks.map((item , index) => <TaskItem key={index} item={item}/>)}
        </ul>
        <button onClick={() => setTasks(prevState => ([...prevState, 'Выучить реакт']))}>Add</button>
        <button onClick={() => setTasks(prevState => {
            let currentTasks = [...prevState]
            currentTasks.pop()

            return currentTasks

        })}>Delete last task</button>
    </div>
}