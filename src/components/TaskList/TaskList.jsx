import {Task} from "../Task/Task";
import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export const TaskList = () => {
	const {taskList, changeTaskStatus} = useContext(GlobalContext)
	return (
		<div className="tasks">
			{
				taskList.map((taskInList) => (
					<div className="form-check" key={taskInList.id}>
						<Task
							task={taskInList.task}
							taskStatus={taskInList.taskStatus}
							id={taskInList.id}
							changeTaskStatus={changeTaskStatus}
						/>
					</div>
				))
			}

		</div>
	)
}