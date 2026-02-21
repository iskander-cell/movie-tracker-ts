export type Reaction = 'like' | 'dislike' | null

export interface Movie {
  id: number
  name: string
  watched: boolean
  reaction: Reaction
}