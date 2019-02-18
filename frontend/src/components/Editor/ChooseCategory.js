import React from 'react'
import { Card, Icon, Avatar, Row, Col } from 'antd';

const { Meta } = Card;

const categories = ["Javascript", "Python", "Java", "UI/UX"]


const ChooseCategory = () => {
  return (
    <Row>
        {categories.map((category) => (
            <Col span={6}>
                <Card
                    style={{ width: 150 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <Meta
                    title={category}
                    />
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default ChooseCategory
