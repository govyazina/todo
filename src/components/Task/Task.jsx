import {TaskShow} from "../TaskShow/TaskShow";
import {useState} from "react";
import {TaskEditor} from "../TaskEditor/TaskEditor";

export function Task({task, taskStatus, id}) {
    const [taskEdit, setTaskEdit] = useState(false)

    return (
        <>
            <div className="container">
                <div className="row">
                    {!taskEdit
                    ? <TaskShow
                            task={task}
                            taskStatus={taskStatus}
                            id={id}
                            setTaskEdit={setTaskEdit}
                        />
                    : <TaskEditor
                            task={task}
                            id={id}
                            setTaskEdit={setTaskEdit}
                        />}

                </div>
            </div>
        </>
    )
}