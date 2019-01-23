import React, {Component} from 'react';
import axios from "axios";



const graphql = axios.create({
    baseURL: 'http://localhost:8000/graphql',
});

const GET_POSTS = `
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

class Posts extends Component {
    state = {
        posts: null,
        errors: null,
    };

    fetchPosts = () => {
        graphql
            .post('', {query: GET_POSTS})
            .then(result => {
                console.log(result);
                    this.setState(() => ({
                        posts: result.data.data.allPosts.edges,
                        errors: result.data.errors,
                    }))
                }
            );
    };

    componentDidMount(){
        this.fetchPosts();
    }


    render() {
        return (
            <div>
                {this.state.posts &&
                        this.state.posts.map(post => (
                            <h5>{post.node.excerpt}</h5>
                        ))}
        </div>
    );
    }
}

export default Posts;