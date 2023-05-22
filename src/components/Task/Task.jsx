import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export function Task({task, taskStatus, id}) {
    const {changeTaskStatus} = useContext(GlobalContext)
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