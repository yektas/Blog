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
import userStore from '../store/UserStore';

const NEW_POST_MUTATION = gql`
    mutation newPost($post: PostCreateInput!) {
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

    class NewPost extends React.Component {
        state = {
            detailFormVisible: false
        };

        replaceParagraphType = (contentToFix) => {
            const json = JSON.stringify(contentToFix);
            const search = '"type":"paragraph"';
            const fix = '"type":"PARAGRAPH/PARAGRAPH"';
            const content = json.replace(new RegExp(search, 'g'), fix);
            postStore.setContent(JSON.parse(content));
            return content;
        }

        handleSubmit = async (values, actions) => {
            postStore.setTitle(values.title);
            const user = { email: "admin@admin.com"};
            userStore.setUser(user)
            actions.setSubmitting(false);

            //Fix paragraph serialization issue before posting #https://github.com/react-page/react-page/issues/498
            const content = this.replaceParagraphType(postStore.content);
            
            const response = await this.props.newPostMutation({
                variables: {
                    post: {
                        title: postStore.title,
                        excerpt: postStore.excerpt,
                        content: content,
                        categoryName: postStore.category,
                        author: userStore.user.email,
                        image: postStore.coverImage
                    }
                }
            });
            console.log(response);
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
                                        type='primary'
                                        onClick={() => this.handlePublish(props.values.title)}
                                    >
                                        Ready to publish
                                    </OutlineButton>
                                </Col>
                                <Field style={{marginLeft: 50, marginRight: 50}} placeholder='Title' name='title' spellCheck='false' component={PostTitleInput} />
                                <PostEditor />
                            </Form>
                        </EditorLayout>
                    )}
                />
        );
    }
}

export default compose(observer, graphql(NEW_POST_MUTATION, { name: 'newPostMutation' }))(NewPost);
