import React from 'react';
import { Button } from 'antd';
import { Field, Form, Formik } from "formik";
import { observer } from "mobx-react";
import PostEditor from "../components/PostEditor";
import PostTitleInput from "../components/common/PostTitleInput";
import EditorLayout from "../components/common/EditorLayout";
import PostStore from "../store/PostStore";

class NewPost extends React.Component {

    handleSubmit(values, actions){
        PostStore.setTitle(values.title);
        setTimeout(() => {
            actions.setSubmitting(false);
            console.log("PostStore values: ", PostStore);
        }, 1500)
        
    }
    
    render() {
        return (
            <EditorLayout>
                <Formik
                        onSubmit={this.handleSubmit}
                        render={(props) => (
                            <Form>
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={props.isSubmitting}>Publish</Button>
                                <Field placeholder="Title" name="title" spellCheck="false" component={PostTitleInput}/>
                                <PostEditor />
                            </Form>
                        )}
                />
            </EditorLayout>         
        );
    }
}



export default  observer(NewPost);