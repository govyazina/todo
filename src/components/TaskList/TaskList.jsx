import {Task} from "../Task/Task";
import {useContext} from "react";
import {GlobalContext} from "../../contexts/globalContext";

export const TaskList = () => {
	const {state: {taskList}} = useContext(GlobalContext)
	return (
		<div className="tasks">
			{
				taskList.map((taskInList) => (
					<div className="form-check" key={taskInList.id}>
						<Task
							task={taskInList.task}
							taskStatus={taskInList.taskStatus}
							id={taskInList.id}

						/>
					</div>
				))
			}

		</div>
	)
}