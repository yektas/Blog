import React from 'react'
import postStore from "../../store/PostStore";
import { Button } from 'antd';

const PostSummary = (props) => {
  return (
    <div>
      <h1>{postStore.title}</h1>
      {postStore.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}

      <Button type="primary" htmlType="submit" onClick={props.onPublish} > Publish Now! </Button>
    </div>
  )
}

export default PostSummary
