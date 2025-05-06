import { useEffect } from 'react'
export const useKey = function (key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action()
        }
      }

      document.addEventListener('keydown', callback)

      // cleanup function
      return function () {
        document.addEventListener('keydown', callback)
      }
    },
    [key, action]
  )
}
