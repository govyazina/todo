export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            const newTask = action.payload
            return {... state, taskList: [...state.taskList, newTask]}
        }
        case 'CHANGE_TASK_STATUS': {
            const id = action.payload
            const newList = state.taskList.map(el => {
                if(el.id === id) {
                    return {...el, taskStatus: !el.taskStatus}
                }
                return {...el}
            }).sort((a, b) => a.taskStatus - b.taskStatus)

            return {...state, taskList: newList}
        }
        case 'DELETE_TASK': {
            const id = action.payload
            const newList = state.taskList.filter(el => el.id !== id)
            return {...state, taskList: newList}
        }
        default: {
            return state
        }
    }
}