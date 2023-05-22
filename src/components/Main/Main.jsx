import {Form} from "../Form/Form";
import {TaskList} from "../TaskList/TaskList";


export const Main = () => {
    return (
        <main className='container my-2'>
            <h1>let's to do it!</h1>
            <Form/>
            <TaskList/>
        </main>
    )
}