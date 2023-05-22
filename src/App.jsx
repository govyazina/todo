import './App.css';
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {GlobalContext} from "./contexts/globalContext";
import {useState} from "react";
import {useLocalStorage} from "./hooks/useLocalStorage";

const generateID = (function (n) {
    return function () {
        return n++
    }
})(1)
function App() {

    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useLocalStorage('taskList', [])
    const addTaskInList = (event) => {
        event.preventDefault()
        if (task) {
            setTaskList(prevState => [...prevState, {task, id: generateID(), taskStatus: false}])
            setTask('')
        }
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
        <>
            <GlobalContext.Provider value={{task, setTask, taskList, setTaskList, addTaskInList, changeTaskStatus, generateID}}>
                <Header/>
                <Main/>
                <Footer/>
            </GlobalContext.Provider>

        </>
    );
}

export default App;
