import React, { Component } from 'react';
import { Card as AntCard, Typography } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaEye, FaComment } from 'react-icons/fa';
import PostMeta from './PostMeta';

const { Title, Text  } = Typography;


const CardHeader = styled.div`
    min-height: 300px;
    max-height: calc(80vh - 126px);
    background-size: cover;
    background-position: 48% 42% !important;
    width: 100%;
    background-image: url("${props => props.image}");

    :before {
        content: '';
        background-color: rgba(0,0,0,0.2);
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


class RegularPostCard extends Component {
    

  render() {
    const { post } = this.props;
    return (
        <Card
                bordered={false}
                bodyStyle={{ padding: 0}}
                style={{ marginRight: 20 }}
                cover={<CardHeaderWrapper>
                        <CardHeader image={post.image}/>
                    </CardHeaderWrapper>}
        >
            <ContentWrapper>
                <CardHeaderCategory>
                    {post.category}
                </CardHeaderCategory>
                <Title level={3}>
                    <Link to={`/blog/post/${post.slug}`}>{post.title}</Link>
                </Title>
                <PostMeta metaData={post.metaData} />
                <Text ellipsis={{rows: 4 }}>{post.content}</Text>
            </ContentWrapper>
        </Card>
    )
  }
}


export default RegularPostCard;