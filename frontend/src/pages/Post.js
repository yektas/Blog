import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ReactQuill from 'react-quill';
import { EditorLayout } from '../components/Layout';
import CommentAntd from '../components/Comment/CommentAntd';
import "../components/Editor/quillEditor.css";

const GET_POST = gql`
    query Post($slug: String!) {
        post(slug: $slug){
            id
            title
            content
            slug
        }
    }
`;

const renderPost = (delta) => {
    const deltaOps = JSON.parse(delta);
    return <ReactQuill
        theme="bubble"
        defaultValue={deltaOps}
        readOnly={true}
        modules={{ syntax: true }}
    />
}

const Post = ({ match }) => {
    const slug = match.params.slug;
    return(
        <EditorLayout>
            <Query query={GET_POST}
                variables={{ slug }}>
                {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return `Error!: ${error}`;
            
                    return (
                        <div>
                            <h1>{data.post.title}</h1>
                            {renderPost(data.post.content)}
                            <CommentAntd />
                        </div>
                    );
                }}
                </Query>
                
        </EditorLayout>
    );
    
};

export default Post;