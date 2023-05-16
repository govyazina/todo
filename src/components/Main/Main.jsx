import {useState} from "react";
import {Form} from "../Form/Form";
import {TaskList} from "../TaskList/TaskList";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const generateID = (function (n) {
	return function () {
		return n++
	}
})(1)

export const Main = () => {
	const [task, setTask] = useState('')
	const [taskList, setTaskList] = useLocalStorage('taskList', [])
	const addTaskInList = (event) => {
		event.preventDefault()
		setTaskList(prevState => [...prevState, {task, id: generateID(), taskStatus: false}])
		setTask('')
	}
	const changeTaskStatus = (id) => {
		const newArr = taskList.map(el => {
			if(el.id === id) {
				el.taskStatus = !el.taskStatus
			}
			return {...el}
		}).sort((a, b) => a.taskStatus - b.taskStatus)
		setTaskList(newArr)
	}
	return (
		<main className='container my-2'>
			<h1>let's to do it!</h1>
			<Form
				addTaskInList={addTaskInList}
				setTask={setTask}
				task={task}
			/>
			<TaskList
				taskList={taskList}
				changeTaskStatus={changeTaskStatus}
			/>
		</main>
	)
}