import { Movie, Reaction } from '../types/movie'
import MovieItem from './MovieItem'

interface MovieListProps {
  movies: Movie[]
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
  onReaction: (id: number, value: Reaction) => void
}

function MovieList({
  movies,
  onDelete,
  onToggleWatched,
  onReaction
}: MovieListProps) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
          onReaction={onReaction}
        />
      ))}
    </ul>
  )
}

export default MovieList