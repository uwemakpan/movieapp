import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import Stars from './StarRating'
// import StarRating from './StarRating'
// import TextExpander from './TextExpander'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
    {/* <TextExpander /> */}
  </React.StrictMode>
)

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating
//         maxStars={8}
//         color='maroon'
//         size={42}
//         onSetMovieRating={setMovieRating}
//         defaultRating={movieRating}
//       />
//       <p>
//         The movie was rated with {movieRating} star{movieRating > 1 ? 's' : ''}
//       </p>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <StarRating maxStars={10} />
//     <StarRating
//       maxStars={5}
//       color='lightgreen'
//       messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}
//     />
//     <StarRating maxStars={7} color='red' size={64} />

//     <Test />
//     {/* <TextExpander /> */}
//   </React.StrictMode>
// )
