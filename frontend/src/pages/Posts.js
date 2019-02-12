import {Component} from 'react';
import {Query} from 'react-apollo';
import {Link} from "react-router-dom";
import gql from 'graphql-tag';
import ReactQuill from 'react-quill';
import {EditorLayout} from "../components/Layout";

const GET_POSTS = gql`
{
  allPosts {
        id
        title
        slug
  }
}
`;

const renderPost = (delta) => {
  const deltaOps = JSON.parse(delta);
  return <ReactQuill
            theme="bubble" 
            defaultValue={deltaOps}
    readOnly = {true}
    modules = {
    {
        syntax: true
    }
}
    />
}

class Posts extends Component {
    render() {
        return (
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>
              if (error) return <div>Error</div>
        
              return (
                <EditorLayout>
                  {data.allPosts.map(post => (
                      < div
            key = {post.id
        }>
        <
            h1 > < Link
            to = {`/blog/post/${post.slug}`
        }>
            {
                post.title
            }
        <
            /Link></
            h1 >

            < /div>
                    ))}
                </EditorLayout>
              )
            }}
          </Query>
        )
      }
}

export default Posts;