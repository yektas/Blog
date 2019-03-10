import React, { useState } from 'react';
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import ReactQuill from 'react-quill';
import { Button } from "antd";
import { MainLayout } from '../components/Layout';
import CommentAntd from '../components/Comment/CommentAntd';
import "../components/Editor/editor.css";

const GET_POST = gql`
    query Post($slug: String!) {
        post(slug: $slug){
            id
            title
            content
            image
            slug
        }
    }
`;

const UPDATE_POST = gql`
    mutation updatePost($post: PostCreateInput!) {
        createPost(post: $post) {
            newPost {
                id
                title
                author {
                    username
                }
            }
        }
    }
`

const renderPost = (delta, readOnly) => {
    const deltaOps = JSON.parse(delta);
    return <ReactQuill
        theme="bubble"
        defaultValue={deltaOps}
        readOnly={readOnly}
        modules={{ syntax: true }}
    />
}


class Post extends React.Component {
    state = {
        readOnly: true,
        postId : null
    }

    updatePost = async () => {
/*         const { data } = await this.props.newPostMutation({
            variables: {
                post: {
                    content: postStore.content,
                }
            }
        }); */
        console.log("gh", null, 4)
    }
    render(){
        const slug = this.props.match.params.slug;
        return(
            <MainLayout>
                <Button onClick={() => this.setState({ readOnly: false })}>Edit post</Button>
                <Button type="primary" onClick={() => this.updatePost}>Save</Button>
                <Query query={GET_POST}
                    variables={{ slug }}>
                    {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return `Error!: ${error}`;
                        const imageSrc = "http://localhost:8000/media/" + data.post.image;
                        this.setState({ postId: data.post.id});
                        return (
                            <div>
                                <img width="100%" height="100%" src={imageSrc} alt="cover"/>
                                <h1>{data.post.title}</h1>
                                {renderPost(data.post.content, this.state.readOnly)}
                                <CommentAntd />
                            </div>
                        );
                    }}
                    </Query>
            </MainLayout>
    );
    }
};

export default graphql(UPDATE_POST, { name: 'updateMutation' })(Post);