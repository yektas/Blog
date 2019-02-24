import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Card, Icon, Avatar, Row, Col } from 'antd';
import classnames from 'classnames';
import postStore from '../../store/PostStore';

const { Meta } = Card;

const categories = [
    'Javascript',
    'Python',
    'Java',
    'UI/UX'
];

const ChooseCategory = observer(() => {
    return (
        <Row gutter={16}>
            {categories.map((category) => (
                <Col span={6}>
                    <Card
                        className={classnames(postStore.category === category && 'ant-card-grid-selected')}
                        size='small'
                        style={{ width: 'fit-content' }}
                        cover={
                            <img
                                alt='example'
                                width='80'
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
                            />
                        }
                        onClick={() => postStore.setCategory(category)}
                    >
                        <Meta title={category} />
                    </Card>
                </Col>
            ))}
        </Row>
    );
});

export default ChooseCategory;
