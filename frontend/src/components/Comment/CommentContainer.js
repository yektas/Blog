import React from 'react';
import { Card as AntCard, Col, Icon, Avatar,} from "antd";
import styled from "styled-components";

const { Meta } = AntCard;

const Card = styled(AntCard)`
    background: #e6dbc9
`

class CommentContainer extends React.Component {
    
    render() { 
        return (
            <Col span={24}>
                <Card bordered={false}>
                    <Meta 
                        style={{ marginBottom: 10 }}
                        avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
                        title="Neal van der Valk"
                        description="Nov 14, 2018"/>
                    {this.props.children}
                </Card>
            </Col>
        );
    }
}
export default CommentContainer;