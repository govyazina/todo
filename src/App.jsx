import './App.css';
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {GlobalContext} from "./contexts/globalContext";
import {useReducer, useState} from "react";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {reducer} from "./reducers/reducer";


function App() {
    const initialState = {
        task: '',
        taskList: [],
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    // const [taskList, setTaskList] = useLocalStorage('taskList', [])


    return (
        <>
            <GlobalContext.Provider value={{state, dispatch}}>
                <Header/>
                <Main/>
                <Footer/>
            </GlobalContext.Provider>

        </>
    );
}

export default App;
