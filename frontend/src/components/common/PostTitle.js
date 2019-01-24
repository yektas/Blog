import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input, Tooltip  } from "antd";

const { TextArea } = Input;

const CustomTextArea = styled(TextArea)`
    background: transparent
    border: none;
    font-size: 3em;
    color: rgba(0, 0, 0, 0.84);
    resize: none;
    font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman',
        Times, serif;
    overflow: hidden;
    box-shadow: none;
    border-left: 1px solid;
    border-color: transparent;
    border-radius: 0;
    

    :focus {
        box-shadow: none;
        border-left: 2px solid;
        border-color: #3c9be3e6;
    }
    :hover{
        border-left: 2px solid;
        border-color: #3c9be3e6;
    }
`
class PostTitle extends React.Component {

    render(){
        const { placeholder, onChange} = this.props;
        return (
            <Tooltip placement="leftTop" title="Your awesome title is here.">
                <CustomTextArea onChange={onChange} value="50+ Data Structure and Algorithms Interview Questions for Programmers" autosize placeholder={placeholder}/>
            </Tooltip>

            );

    }

}

PostTitle.propTypes = {
    placeholder: PropTypes.string
};

export default PostTitle;
