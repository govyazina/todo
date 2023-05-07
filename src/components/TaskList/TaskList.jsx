import {Task} from "../Task/Task";

export const TaskList = ({taskList, changeTaskStatus}) => {
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