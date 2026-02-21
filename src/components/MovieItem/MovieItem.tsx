import { Movie, Reaction } from '../types/movie'

interface MovieItemProps {
  movie: Movie
  onDelete: (id: number) => void
  onToggleWatched: (id: number) => void
  onReaction: (id: number, value: Reaction) => void
}

function MovieItem({
  movie,
  onDelete,
  onToggleWatched,
  onReaction
}: MovieItemProps) {
  return (
    <li className="movie-item">
      <span>
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggleWatched(movie.id)}
        />
        {movie.name}
      </span>

      {movie.watched && (
        <div className="btn-group">
          <button onClick={() => onReaction(movie.id, 'like')}>
            👍
          </button>
          <button onClick={() => onReaction(movie.id, 'dislike')}>
            👎
          </button>
        </div>
      )}

      <button onClick={() => onDelete(movie.id)}>Удалить</button>
    </li>
  )
}

export default MovieItem