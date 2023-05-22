import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export const Form = () => {
    const {setTask, addTaskInList, task} = useContext(GlobalContext)
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