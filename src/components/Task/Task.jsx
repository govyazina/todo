import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export function Task({task, taskStatus, id}) {
    const {dispatch} = useContext(GlobalContext)
    const changeTaskStatus = (id) => {
        dispatch({
            type: 'CHANGE_TASK_STATUS',
            payload: id
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })

    }
    return (
        <>
            <label className="form-check-label" htmlFor="flexCheckDefault"
                   style={taskStatus ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}>
                <input className="form-check-input"
                       type="checkbox"
                       id="flexCheckDefault"
                       checked={taskStatus}
                       onChange={() => changeTaskStatus(id)}/>
                {task}
            </label>
            <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => deleteTask(id)}>
                Delete
            </button>
        </>
    )
}