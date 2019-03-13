import React, { Component } from 'react';
import { Card, Row, Col } from "antd";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

const CardHeader = styled.div`
    min-height: 300px;
    max-height: calc(80vh - 126px);
    background-size: cover;
    background-position: 48% 42% !important;
    width: 100%;
    background-image: url("https://codeless.co/thype/blog/wp-content/uploads/2018/12/Depositphotos_74897491_xl-2015-1-744x620.jpg")
`

const CardHeaderWrapper = styled.div`
    box-shadow: 0px 0px 23px -8px rgba(0,0,0,0.71);
`

const CardHeaderCategory = styled.h4`
      position: absolute;
      top: 15px;
      left: 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      z-index: 999;
`


class PostCard extends Component {
    

  render() {
    const { image } = this.props;
    return (
        <Row style={{ marginTop: 20 }}>
            <Fade bottom cascade>
                <div>
                    <Col span={8}>
                        <Card
                                hoverable
                                bordered={false}
                                style={{ marginRight: 20 }}
                                cover={<CardHeaderWrapper>
                                        <CardHeaderCategory>
                                            CULTURE
                                        </CardHeaderCategory>
                                        <CardHeader />
                                    </CardHeaderWrapper>}
                        >               
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                                hoverable
                                bordered={false}
                                style={{ marginRight: 20 }}
                                cover={<CardHeaderWrapper>
                                        <CardHeaderCategory>
                                            CULTURE
                                        </CardHeaderCategory>
                                        <CardHeader />
                                    </CardHeaderWrapper>}
                        >               
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                                hoverable
                                bordered={false}
                                style={{ marginRight: 20 }}
                                cover={<CardHeaderWrapper>
                                        <CardHeaderCategory>
                                            CULTURE
                                        </CardHeaderCategory>
                                        <CardHeader />
                                    </CardHeaderWrapper>}
                        >               
                        </Card>
                    </Col>
                </div>
            </Fade>
        </Row>
    )
  }
}


export default PostCard;