import React from 'react';
import { Layout, Menu, Col, Row, Button } from 'antd';
import { Formik, Form, Field } from "formik";
import PostEditor from "../components/PostEditor";
import PostTitle from "../components/common/PostTitle";
const { Header, Content, Footer } = Layout;

class NewPost extends React.Component {

    handleSubmit(values){
        console.log(values);
      }
    
    render() {
        return (
            <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content  style={{padding: '0 50px', minHeight: 1080}}>
                <Row style={{marginTop: 50}}>
                    <Col style={{ height: 500, textAlign: "center"}} md={7}>
                        Empty Area
                    </Col>
                    <Col style={{ height: 500, textAlign: "center"}} md={10}>
                    
                    <Formik
                        onSubmit={(values, actions) => {
                            this.handleSubmit(values);
                            actions.setSubmitting(false);   
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form>
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={isSubmitting}>
                                    Publish
                                </Button>
                                <Field name="title" component={PostTitle} />
                            </Form>
                        )}
                        </Formik>
                            <PostEditor />
                    </Col>
                    <Col style={{ height: 500, textAlign: "center"}} md={7}>
                        Empty Area
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
        );
    }
}

export default NewPost;