import { useState } from 'react'
import { Movie, Reaction } from './types/movie'
import './App.css'

function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [showWatched, setShowWatched] = useState<boolean>(false)

  const addMovie = (name: string) => {
    const newMovie: Movie = {
      id: Date.now(),
      name,
      watched: false,
      reaction: null
    }

    setMovies(prev => [...prev, newMovie])
  }

  const deleteMovie = (id: number) => {
    setMovies(prev => prev.filter(movie => movie.id !== id))
  }

  const toggleWatched = (id: number) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, watched: !movie.watched, reaction: null }
          : movie
      )
    )
  }

  const setReaction = (id: number, value: Reaction) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, reaction: value } : movie
      )
    )
  }

  return <div className="container"></div>
}

export default App