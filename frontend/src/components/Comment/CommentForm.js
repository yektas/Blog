import React from 'react';
import { Button } from 'antd';
import { Field, Form, Formik } from 'formik';
import { CommentInput } from './CommentInput';
import CommentContainer from './CommentContainer';

class CommentForm extends React.Component {
	handleSubmit = (values, actions) => {
		setTimeout(() => {
			actions.setSubmitting(false);
			console.log('Comment: ', values);
		}, 1000);
	};

	render() {
		return (
			<Formik
				onSubmit={this.handleSubmit}
				render={props => (
					<CommentContainer>
						<Form>
							<Field
								placeholder="Write a comment..."
								name="comment"
								component={CommentInput}
							/>
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
								loading={props.isSubmitting}>
								Comment
							</Button>
						</Form>
					</CommentContainer>
				)}
			/>
		);
	}
}

export default CommentForm;
