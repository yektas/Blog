import React, {Component} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReactQuill from 'react-quill';
import EditorLayout from "../components/common/EditorLayout";


const GET_POSTS = gql`
{
    allPosts {
      edges {
        node {
          id
          title
          content
          excerpt
          image
          comments {
            id
            author{
                username
              }
            content
            timestamp
          }
        }
      }
    }
  }
`;

const convertToHTML = (delta) => {
  const deltaOps = JSON.parse(delta);
  return <ReactQuill
            theme="bubble" 
            defaultValue={deltaOps}
			readOnly={true}
			modules={{syntax: true}}	
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
                	{data.allPosts.edges.map(post => (
                    	<div key={post.node.id}>
							<h1>{post.node.title}</h1>
							{convertToHTML(post.node.content)}
						</div>  
                    ))}
                </EditorLayout>
              )
            }}
          </Query>
        )
      }
}

export default Posts;