import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export function Task({task, taskStatus, id}) {
    const {state, dispatch} = useContext(GlobalContext)
    const changeTaskStatus = (id) => {
        const newList = state.taskList.map(el => {
            if(el.id === id) {
                el.taskStatus = !el.taskStatus
            }
            return {...el}
        }).sort((a, b) => a.taskStatus - b.taskStatus)
        dispatch({
            type: 'CHANGE_TASK_STATUS',
            payload: newList
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