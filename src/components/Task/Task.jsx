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
    return (
        <>
            <input className="form-check-input"
                   type="checkbox"
                   id="flexCheckDefault"
                   checked={taskStatus}
                   onChange={() => changeTaskStatus(id)}/>
            <label className="form-check-label" htmlFor="flexCheckDefault" style={taskStatus ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}>
                {task}
            </label>
        </>
    )
}