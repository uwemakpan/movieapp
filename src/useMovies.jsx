import { useEffect, useState } from 'react'

const KEY = '3c8eb52' // API key from IMDB

export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(
    function () {
      // callback?.() // callback function to close the movie details when a new search is made

      // native browser API to cancel fetch requests
      const controller = new AbortController() // abort controller to cancel fetch request when component unmounts or when a new search is made in the input field (cleanup function) => prevent memory leaks
      async function fectchMovies() {
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal } // connecting the abort controlelr to the fetch request
          )

          if (!res.ok)
            throw new Error('Something went wrong with fetching movies')

          const data = await res.json()
          if (data.Response === 'False') throw new Error('Movie not found!')

          setMovies(data.Search) // set the movies state to the data.Search array
          setError('')
          // console.log(data.Search)
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      // restrict the searcing of movies with two letters only
      if (query.length < 3) {
        setMovies([])
        setError('')
        return // return to prevent the fetchMovies function from running
      }

      // handleCloseMovie() // close the movie details when a new search is made
      fectchMovies() // calling the fetchMovies function

      // cleanup function to prevent multiple firing off of requests
      return function () {
        controller.abort()
      }
    },
    [query] // dependency array
  )

  return { movies, isLoading, error }
}
