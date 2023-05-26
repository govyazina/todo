import {useEffect, useReducer} from "react";
import {reducer} from "../reducers/reducer";

export const useLocalStorage = (key, value) => {
    const [state, dispatch] = useReducer(
        reducer,
        value,
        () => {
            const item = window.localStorage.getItem(key)
            try {
                const state = item ? JSON.parse(item) : value
                if (Array.isArray(state.taskList)){
                    return state
                }
                else {
                    return value
                }
            } catch {
                return value
            }

        })
    useEffect(() => {
        const item = JSON.stringify(state)
        window.localStorage.setItem(key, item)
    }, [key, state])

    return [state, dispatch]
}