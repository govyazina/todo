import {useContext, useState} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export const TaskEditor = ({id, setTaskEdit, task}) => {
	const [newTask, setNewTask] = useState(task)
	const {dispatch} = useContext(GlobalContext)
	const editTaskInList = (event) => {
		event.preventDefault()
		dispatch({
			type: 'EDIT_TASK',
			payload: {
				id: id,
				task: newTask
			}
		})
		setTaskEdit(prev => !prev)

	}
	return (
		<>
			<form
				className="row"
				onSubmit={editTaskInList}
			>
				<div className="col-3">
					<label htmlFor="inputTask" className="visually-hidden">Task input</label>
					<input
						type="text" className="form-control"
						id="inputTask"
						placeholder="write your task here"
						value={newTask}
						onChange={(event) => setNewTask(event.target.value)}
					/>
				</div>

					<button type="submit" className="btn btn-primary col-2 ms-2">save</button>

			</form>
		</>
	)
}