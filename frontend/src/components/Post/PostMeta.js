import React from 'react'
import { Col, Row, Typography } from "antd";
import PropTypes from 'prop-types'
import { FaEye, FaComment } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const { Text } = Typography;

const PostMeta = props => {
    const { date, commentCount, views } = props.metaData
  return (
    <Row type="flex" justify="start">
        <Col span={8}>
            <Text>{date}</Text>
        </Col>
        <Col span={1}>
            <Text> | </Text>
        </Col>
        <Col span={8}>
            <IconContext.Provider value={{ size: 16, style:{ marginLeft: 3, marginRight: 3 }}}>
                <Text>{commentCount} <FaComment /> {views} <FaEye /></Text>
            </IconContext.Provider>
        </Col>
    </Row>
  )
}

PostMeta.propTypes = {

}

export default PostMeta
