import './App.css';
import {useState} from "react";
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
        setTaskList(prevState => [...prevState, {task, id: generateID()}])
        setTask('')
    }

    return (
        <>
            <main className='container my-2'>
                <h1>ToDo list</h1>
                <form
                    className="row g-3"
                    onSubmit={addTaskInList}
                >
                    <div className="col-auto">
                        <label htmlFor="inputTask" className="visually-hidden">Task input</label>
                        <input
                            type="text" className="form-control"
                            id="inputTask"
                            placeholder="write your task here"
                            value={task}
                            onChange={(event) => setTask(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">+</button>
                    </div>
                </form>
                <div className="tasks">
                    {
                        taskList.map((taskInList) => (
                            <div className="form-check" key={taskInList.id}>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(event) => console.log(event.target.checked)}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {taskInList.task}
                                </label>
                            </div>
                        ))
                    }

                </div>
            </main>
        </>
    );
}

export default App;
