import React from 'react';
import { Input, Tooltip  } from "antd";
import styled from 'styled-components';

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

const PostTitleInput = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <Tooltip placement="leftTop" title="Your awesome title is here.">
      <CustomTextArea autosize {...field} {...props} />
    </Tooltip>
  );

export default PostTitleInput;