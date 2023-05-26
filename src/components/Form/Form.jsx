import {useContext, useState} from "react";
import {GlobalContext} from "../../contexts/globalContext";

const generateID =  () => Date.now()

export const Form = () => {
    const {dispatch} = useContext(GlobalContext)
    const [task, setTask] = useState('')

    const addTaskInList = (event) => {
        event.preventDefault()

        if (task) {
            dispatch({
                    type: 'ADD_TASK',
                    payload: {
                        task,
                        id: generateID(),
                        taskStatus: false
                    }
                }
            )
        }
        setTask('')
    }
    return (
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
    )
}