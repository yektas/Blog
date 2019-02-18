import React from 'react';
import { compose } from 'redux';
import { Col } from 'antd';
import { Field, Form, Formik } from 'formik';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { observer } from 'mobx-react';
import { PostEditor, PostTitleInput } from '../components/Editor';
import { EditorLayout } from '../components/Layout';
import OutlineButton from '../components/common/OutlineButton';
import postStore from '../store/PostStore';
import PostDetailsForm from '../components/Editor/PostDetailsForm';

const NEW_POST_MUTATION = gql`
    mutation newPost($post: PostCreateInput!) {
        createPost(post: $post) {
            newPost {
                id
                title
                author {
                    username
                    password
                }
            }
        }
    }
`;

class NewPost extends React.Component {
    state = {
        detailFormVisible: false
    };

    handleSubmit = async (values, actions) => {
        postStore.setTitle(values.title);
        actions.setSubmitting(false);
        console.log('PostStore values: ', JSON.stringify(postStore, null, 4));
        // const { data } = await this.props.newPostMutation({
        //     variables: {
        //         post: {
        //             title: 'TESTTTTTTT',
        //             excerpt: 'Hımm',
        //             content: '{Bu benim öyküm}',
        //             categoryName: 'Javascript',
        //             authorId: 1
        //         }
        //     }
        // });
    };

    handlePublish = (title) => {
        postStore.setTitle(title);
        this.setState({ detailFormVisible: true });
    };

    render() {
        return (
                <Formik
                    onSubmit={this.handleSubmit}
                    render={(props) => (
                        <EditorLayout>
                            <Form onSubmit={this.handleSubmit}>
                                <PostDetailsForm
                                    visible={this.state.detailFormVisible}
                                    onCancel={() => this.setState({ detailFormVisible: false })}
                                    onPublish={props.submitForm}
                                />
                                <Col span={2} offset={16}>
                                    <OutlineButton
                                        ghost
                                        type='primary'
                                        onClick={() => this.handlePublish(props.values.title)}
                                    >
                                        Ready to publish
                                    </OutlineButton>
                                </Col>
                                <Field placeholder='Title' name='title' spellCheck='false' component={PostTitleInput} />
                                <PostEditor />
                            </Form>
                        </EditorLayout>
                    )}
                />
        );
    }
}

export default compose(observer, graphql(NEW_POST_MUTATION, { name: 'newPostMutation' }))(NewPost);
