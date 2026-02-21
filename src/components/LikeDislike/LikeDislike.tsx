import { Reaction } from '../types/movie'

interface LikeDislikeProps {
  reaction: Reaction
  onLike: () => void
  onDislike: () => void
}

function LikeDislike({
  reaction,
  onLike,
  onDislike
}: LikeDislikeProps) {
  return (
    <div className="btn-group">
      <button
        onClick={onLike}
        style={{ fontWeight: reaction === 'like' ? 'bold' : 'normal' }}
      >
        👍
      </button>

      <button
        onClick={onDislike}
        style={{ fontWeight: reaction === 'dislike' ? 'bold' : 'normal' }}
      >
        👎
      </button>
    </div>
  )
}

export default LikeDislike