import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';
import styled from 'styled-components';
import Header from "../common/Header";


const { Content, Footer } = Layout;

const CustomLayout = styled(Layout)`
    padding: 10px
    background: #141e43
    color: #fae9d0
`
class EditorLayout extends Component {
    render() {
        return (
            <CustomLayout>
                <Header/>
                <Content  style={{padding: '0 50px', marginTop: 110, minHeight: 1080}}>
                    <Row style={{marginTop: 50}}>
                        <Col style={{ height: 500, textAlign: "center"}} md={7}>
                            Left Empty Area
                        </Col>
                        <Col style={{ height: 500, textAlign: "center"}} md={10}>
                            {this.props.children}
                        </Col>
                        <Col style={{ height: 500, textAlign: "center"}} md={7}>
                            Right Empty Area
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
                </Footer>
            </CustomLayout>
        );
    }
}

export default EditorLayout;