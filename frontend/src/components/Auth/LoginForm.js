import { Button, Icon } from 'antd';
import { Field, Form as FormikForm, Formik } from 'formik';
import gql from 'graphql-tag';
import React from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import styled from 'styled-components';
import * as Yup from 'yup';
import FormInput from '../common/FormInput';
import userStore from '../../store/UserStore';

const LOGIN_MUTATION = gql`
	mutation login($username: String!, $password: String!) {
		tokenAuth(username: $username, password: $password) {
			token
		}
	}
`;

const GET_ME = gql`
	{
		me {
			id
			email
			username
		}
	}
`;

const validationSchema = Yup.object({
	username: Yup.string('Username').required('Username is required')
});

const Form = styled(FormikForm)`
	max-width: 400px;
	margin: auto;
`;

class LoginForm extends React.Component {
	handleSubmit = async (values, actions) => {
		actions.setSubmitting(false);
		const { data } = await this.props.loginMutation({
			variables: {
				username: values.username,
				password: values.password
			}
		});
		localStorage.setItem('token', data.tokenAuth.token);
		const { client } = this.props;
		const res = await client.query({ query: GET_ME });
		userStore.setUser({
			username: res.data.me.username,
			email: res.data.me.email
		});
	};

	render() {
		return (
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
				render={(formProps) => (
					<Form>
						<Field
							component={FormInput}
							name="username"
							type="text"
							placeholder="Username"
							prefix={
								<Icon
									type="user"
									style={{
										color: 'rgba(0,0,0,.25)'
									}}
								/>
							}
							hasFeedback
						/>
						<Field
							component={FormInput}
							name="password"
							type="password"
							placeholder="Password"
							prefix={
								<Icon
									type="lock"
									style={{
										color: 'rgba(0,0,0,.25)'
									}}
								/>
							}
						/>
						<Button
							type="primary"
							htmlType="submit"
							loading={formProps.isSubmitting}
						>
							Login
						</Button>
					</Form>
				)}
			/>
		);
	}
}

export default compose(
	withApollo,
	graphql(LOGIN_MUTATION, { name: 'loginMutation' })
)(LoginForm);
