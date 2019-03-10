import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Avatar, Typography } from 'antd';

const { Text, Title } = Typography;

const AuthorCard = (props) => {
    const { name, time, readTime } = props;
    return (
        <Row type="flex" justify="start" align="middle">
            <Col span={3}>
                <Avatar src="http://i.pravatar.cc/150" size={50} style={{ fontSize: "20px" }} />
            </Col>
            <Col span={8}>
                <Text>by {name}</Text>
                <br />
                <Text>{time} - {readTime} min read</Text>
            </Col>
        </Row>
    )
}

AuthorCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default AuthorCard

