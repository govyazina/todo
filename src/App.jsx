import './App.css';
import {Main} from "./components/Main/Main";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {GlobalContext} from "./contexts/globalContext";
import {useLocalStorage} from "./hooks/useLocalStorage";


function App() {
    const initialState = {
        taskList: [],
    }

    const [state, dispatch] = useLocalStorage('state', initialState)


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
