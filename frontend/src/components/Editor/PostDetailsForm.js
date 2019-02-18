import React from 'react';
import { Modal, Steps, Col, Icon } from 'antd';
import styled from "styled-components";
import './editor.css';
import EditableTagGroup from './TagSelector';
import CoverImageUpload from './CoverImageUpload';
import PostSummary from "./PostSummary";

const Step = styled(Steps.Step)` 
    :hover {
        cursor: pointer
    }
`

class PostDetailsForm extends React.Component {
    state = {
        current: 0
    };

    steps = [
        {
            key: 0,
            title: 'Cover Image',
            description: 'Select a cover image',
            icon: 'picture',
            content: <CoverImageUpload />
        },
        {
            key: 1,
            title: 'Tags',
            description: 'Choose your tags',
            icon: 'tags',
            content: <EditableTagGroup />
        },
        {
            key: 2,
            title: 'Submit',
            description: 'Preview your post',
            icon: 'check',
            content: <PostSummary />
        }
    ];

    render() {
        const { visible, onCancel } = this.props;
        const { current } = this.state;
        return (
            <Modal visible={visible} footer={null} className='full-page-modal' onCancel={onCancel}>
                <Col span={6}>
                    <Steps direction='vertical'  current={current}>
                        {this.steps.map((item) => (
                            <Step
                                key={item.key}
                                title={item.title}
                                description={item.description}
                                onClick={() => current !== item.key && this.setState({ current: item.key })}
                                icon={<Icon type={item.icon} />}
                            />
                        ))}
                    </Steps>
                </Col>
                <Col span={18} className='steps-content'>
                    {this.steps[current].content}
                </Col>
            </Modal>
        );
    }
}

export default PostDetailsForm;
