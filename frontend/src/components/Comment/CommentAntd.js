import React from 'react';
import { Comment, Avatar, Form, Button, List, Input } from "antd";

const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={item => (
        <Comment
          content={item}
        />
      )}
    />
  );


const Editor = ({
    onChange, onSubmit, submitting, value,
  }) => (
    <div>
      <Form.Item>
        <Input.TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );

class CommentAntd extends React.Component {

    state = {
        comments: [],
        submitting: false,
        value: '',
      }
    
      handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
    
        this.setState({
          submitting: true,
        });
    
        setTimeout(() => {
          this.setState({
            submitting: false,
            value: '',
            comments: [
                ...this.state.comments,
                this.state.value
            ],
          });
        }, 1000);
      }
    
      handleChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      }

    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                avatar={(
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                )}
                content={(
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                )}
            />
            </div>
        );
    }
}

export default CommentAntd;