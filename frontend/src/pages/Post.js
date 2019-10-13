import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import styled from 'styled-components';
import { MainLayout, HomeLayout } from '../components/Layout';
import { SecondaryText } from '../components/common';
import CommentAntd from '../components/Comment/CommentAntd';
import { HTMLRenderer } from '@react-page/renderer';
import { imagePlugin } from '@react-page/plugins-image';
import spacer from '@react-page/plugins-spacer';
import native from '@react-page/plugins-default-native';
import slate from '@yektas/plugins-slate';
import video from '@react-page/plugins-video';
import divider from '@react-page/plugins-divider';
import highlightPlugin from '../components/Editor/highlight/HighlightPlugin';
import '@react-page/core/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import '../components/Editor/editor.css';
import PostLayout from '../components/Layout/PostLayout';
import { Image } from '../components/Post/components';

const GET_POST = gql`
	query Post($slug: String!) {
		post(slug: $slug) {
			id
			title
			content
			publishedOn
			image
			slug
			author {
				firstName
				lastName
			}
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

const renderPost = (content) => {
	const editorContent = JSON.parse(content);
	const editorPlugins = {
		content: [slate(), imagePlugin(), video, spacer, divider, highlightPlugin],
		native
	};
	return <HTMLRenderer state={editorContent} plugins={editorPlugins} />;
};

const PostWrapper = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`;

class Post extends React.Component {
	render() {
		const slug = this.props.match.params.slug;
		return (
			<Query query={GET_POST} variables={{ slug }}>
				{({ loading, error, data }) => {
					if (loading) return null;
					if (error) return `Error!: ${error}`;
					return (
						<HomeLayout>
							<PostLayout>
								<h1>{data.post.title}</h1>
								<SecondaryText>
									by
									<SecondaryText bold>
										{data.post.author.firstName} {data.post.author.lastName}
									</SecondaryText>{' '}
									on {format(data.post.publishedOn, 'MMM DD, YYYY')}
								</SecondaryText>
								<Image image={data.post.image} tag="Javascript" />
								{/* <div style={{ textAlign: 'center', marginBottom: 30 }}>
									<img
										style={{ maxWidth: 800 }}
										src={data.post.image}
										alt="cover"
									/>
								</div> */}
								{renderPost(data.post.content)}
								<CommentAntd />
							</PostLayout>
						</HomeLayout>
					);
				}}
			</Query>
		);
	}
}

export default Post;
