import React from 'react'
import postStore from "../../store/PostStore";

const PostSummary = () => {
  return (
    <div>
      <h1>{postStore.title}</h1>
      {postStore.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
  )
}

export default PostSummary
