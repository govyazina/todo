export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {... state, taskList: [...state.taskList, newTask]}
        }
        case 'CHANGE_TASK_STATUS': {
            const newList = action.payload
            return {...state, taskList: newList}
        }
        default: {
            return state
        }
    }
}