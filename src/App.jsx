import './App.css';
import {useState} from "react";

function App() {
    const [task, setTask] = useState()

    return (
        <>
            <div className='container my-2'>
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="inputTask" className="visually-hidden">Task</label>
                        <input
                            type="text" className="form-control"
                            id="inputTask"
                            placeholder="write task here"
                            onChange={(event) => setTask(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">+</button>
                    </div>
                </form>
                <div className="tasks">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {task}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
