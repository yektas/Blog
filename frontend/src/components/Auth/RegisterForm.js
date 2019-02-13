import React from 'react';
import { Formik, Field } from 'formik';
import { Button, Form as AntdForm, Icon } from 'antd';
import * as Yup from 'yup';
import styled from 'styled-components';
import { AntInput } from '../common/FormFields';

const validationSchema = Yup.object({
	username: Yup.string('Username').required('Username is required')
});

const Form = styled(AntdForm)`
	max-width: 400px;
	margin: auto;
`;

const SubmitButton = styled(Button)``;

class RegisterForm extends React.Component {
	state = {};
	render() {
		return (
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
				render={formProps => {
					return (
						<Form>
							<Field
								component={AntInput}
								name="email"
								type="email"
								placeholder="Email"
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
								component={AntInput}
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
								hasFeedback
							/>
							<Form.Item>
								<SubmitButton type="primary">
									Login
								</SubmitButton>
							</Form.Item>
						</Form>
					);
				}}
			/>
		);
	}
}

export default RegisterForm;
