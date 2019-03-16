import React, { Component } from 'react';
import { Card as AntCard, Row, Col, Typography } from "antd";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import { FaEye, FaComment } from 'react-icons/fa';

const { Title, Text  } = Typography;
const { Meta } = AntCard;


const CardHeader = styled.div`
    min-height: 300px;
    max-height: calc(80vh - 126px);
    background-size: cover;
    background-position: 48% 42% !important;
    width: 100%;
    background-image: url("${props => props.image}");

    :before {
        content: '';
        background-color: rgba(0,0,0,0.4);
        display: block;
        position: absolute;
        min-height: 300px;
        max-height: calc(80vh - 126px);
        width: 100%;

    }
`

const Card = styled(AntCard)`
    background: transparent
`

const BGWrapper = styled.div`

`

const CardHeaderWrapper = styled.div`
    box-shadow: 0px 0px 23px -8px rgba(0,0,0,0.71);
`

const ContentWrapper = styled.div`
    padding: 14px 0px 0px 0px;
    background: transparent;
`

const CardHeaderCategory = styled.h4`
      color: #fff !important;
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
    const { post } = this.props;
    return (
        <Card
                bordered={false}
                bodyStyle={{ padding: 0}}
                style={{ marginRight: 20 }}
                cover={<CardHeaderWrapper>
                        <CardHeaderCategory>
                            {post.category}
                        </CardHeaderCategory>
                        <BGWrapper>
                            <CardHeader image={post.image}/>
                        </BGWrapper>
                    </CardHeaderWrapper>}
        >
            <ContentWrapper>
                <Title level={3}>{post.title}</Title>
                <div>
                    <Text>December 7,2018 | 0 <FaComment /> 10 <FaEye /> </Text>
                </div>
            </ContentWrapper>
        </Card>
    )
  }
}


export default PostCard;