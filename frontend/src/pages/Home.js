import React, {Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "antd";


const graphql = axios.create({
    baseURL: 'http://localhost:8000/graphql',
});

const GET_POSTS = `
  {
  allPosts {
    id
    title
    content
  }
}
`;

class Home extends Component {
    state = {
        posts: null,
        errors: null
    };


    fetchPosts = () => {
        graphql
            .post('', {query: GET_POSTS})
            .then(result => {
                console.log(result);
                    this.setState(() => ({
                        posts: result.data.data.allPosts,
                        errors: result.data.errors,
                    }))
                }
            );
    };


    render() {
        return (
            <div>
                <Link to="/new-post">Create a new post</Link>
                <h1> Home Page </h1>
                
                <Button type="primary" onClick={this.fetchPosts}> Get posts </Button>
                <ul>
                    {this.state.posts &&
                    this.state.posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;