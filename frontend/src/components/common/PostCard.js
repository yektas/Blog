import React, { Component } from 'react';
import { Card, Row, Col } from "antd";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import "./common.css";

class PostCard extends Component {

  render() {
    return (
        <Row>
            
            <Col span={24}>
                <Reveal effect="fadeInUp">
                    <Card title="Hello world" style={{ width: 300, marginBottom: 100 }}>
                        <p>Card Content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Reveal>
            </Col>
            <Col span={24}>
            <Reveal effect="fadeInUp">
                 <Card title="Hello world" style={{ width: 300, marginBottom: 100 }}>
                    <p>Card Content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Reveal>
            </Col>
            <Col span={24}>
            <Reveal effect="fadeInUp">
                <Card title="Hello world" style={{ width: 300, marginBottom: 100 }}>
                    <p>Card Content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Reveal>
            </Col>
            <Col span={24}>
            <Reveal effect="fadeInUp">
                <Card title="Hello world" style={{ width: 300, marginBottom: 100 }}>
                    <p>Card Content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                </Reveal>
            </Col>
        </Row>
    )
  }
}


export default PostCard;