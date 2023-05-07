import {Task} from "../Task/Task";

export const TaskList = ({taskList}) => {
	return (
		<div className="tasks">
			{
				taskList.map((taskInList) => (
					<div className="form-check" key={taskInList.id}>
						<Task task={taskInList.task} />
					</div>
				))
			}

		</div>
	)
}