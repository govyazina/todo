import './App.css';
import {useState} from "react";
import {TaskList} from "./components/TaskList/TaskList";
import {Form} from "./components/Form/Form";

const generateID = (function (n) {
    return function () {
        return n++
    }
})(1)


function App() {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    const addTaskInList = (event) => {
        event.preventDefault()
        setTaskList(prevState => [...prevState, {task, id: generateID(), taskStatus: false}])
        setTask('')
    }
    const changeTaskStatus = (id) => {
        const newArr = taskList.map(el => {
            if(el.id === id) {
                el.taskStatus = !el.taskStatus
            }
            return {...el}
        })
        setTaskList(newArr)
    }

    return (
        <>
            <main className='container my-2'>
                <h1>ToDo list</h1>
                <Form
                    addTaskInList={addTaskInList}
                    setTask={setTask}
                    task={task}
                />
                <TaskList
                    taskList={taskList}
                    changeTaskStatus={changeTaskStatus}
                />
            </main>
        </>
    );
}

export default App;
