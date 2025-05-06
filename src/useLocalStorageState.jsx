import { useState, useEffect } from 'react'

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState // check if the value is in local storage, if not, set it to the initial state
  })

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value)) // save the value movies to local storage
    },
    [value, key]
  )

  return [value, setValue] // return the value and the setValue function to update the value in local storage
}
