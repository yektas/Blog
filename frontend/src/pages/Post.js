import React, { useState } from "react";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import { MainLayout } from "../components/Layout";
import CommentAntd from "../components/Comment/CommentAntd";
import { HTMLRenderer } from '@react-page/renderer';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import native from '@react-page/plugins-default-native';
import slate from '@yektas/plugins-slate';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import highlightPlugin from '../components/Editor/highlight/HighlightPlugin'
import '@react-page/core/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import "../components/Editor/editor.css";

const GET_POST = gql`
  query Post($slug: String!) {
    post(slug: $slug) {
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
`;

const renderPost = content => {
  const editorContent = JSON.parse(content);
  const editorPlugins = {
    content: [slate(), imagePlugin(), video, spacer, divider, highlightPlugin],
    native
  };
  return <HTMLRenderer state={editorContent} plugins={editorPlugins} />;
};

class Post extends React.Component {
  render() {
    const slug = this.props.match.params.slug;
    return (
      <MainLayout>
        <Query query={GET_POST} variables={{ slug }}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error!: ${error}`;
            const imageSrc = "http://localhost:8000/media/" + data.post.image;
            return (
              <div>
                <img width="100%" height="100%" src={imageSrc} alt="cover" />
                <h1>{data.post.title}</h1>
                {renderPost(data.post.content)}
                <CommentAntd />
              </div>
            );
          }}
        </Query>
      </MainLayout>
    );
  }
}

export default Post;
