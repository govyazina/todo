import { useEffect, useReducer} from "react";
import {reducer} from "../reducers/reducer";

export const useLocalStorage = (key, value) => {
  const [state, dispatch] = useReducer(
      reducer,
      value,
      () => {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value
  })
    useEffect(() => {
        const item = JSON.stringify(state)
        window.localStorage.setItem(key, item)
    }, [key, state])

    return [state, dispatch]
}