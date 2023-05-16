import {useState, useEffect} from "react";

export const useLocalStorage = (key, value) => {
  const [localList, setLocalList] = useState(() => {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value
  })
    useEffect(() => {
        const item = JSON.stringify(localList)
        window.localStorage.setItem(key, item)
    }, [key, localList])

    return [localList, setLocalList]
}