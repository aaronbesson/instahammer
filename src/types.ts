export type ImageTag = {
  text: string
  pos: {
    x: number
    y: number
  }
}

export type PostTag = string

export type Post = {
  id: string
  imageTags: ImageTag[]
  title: string
  description: string
  createdAt: number
  postTags: PostTag[]
  image: string
}