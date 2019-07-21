import React from 'react'
import { Col, Row, Typography } from "antd";
import PropTypes from 'prop-types'
import styled from "styled-components"
import { FaEye, FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const { Text } = Typography;

const SecondaryText = styled(Text)`
    font-size: var(--secondary-text-size);
    color: var(--secondary-text-color);
`

const PostMeta = props => {
    const { date, commentCount, views } = props.metaData
  return (
    <Row type="flex" justify="start">
        <Col span={8}>
            <SecondaryText>{date}</SecondaryText>
        </Col>
        <Col span={1}>
            <SecondaryText> | </SecondaryText>
        </Col>
        <Col span={8}>
            <IconContext.Provider value={{ size: 16, style:{ marginLeft: 3, marginRight: 3 }}}>
                <SecondaryText>{commentCount} <FaComment /> {views} <FaEye /></SecondaryText>
            </IconContext.Provider>
        </Col>
    </Row>
  )
}

PostMeta.propTypes = {

}

export default PostMeta
