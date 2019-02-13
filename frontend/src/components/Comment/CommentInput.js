import React from 'react';

import { Input } from "antd";
import styled from 'styled-components';

const { TextArea: AntTextArea } = Input;

const TextArea = styled(AntTextArea)`
  background: transparent
  border: none;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  resize: none;
  overflow: hidden;
  box-shadow: none;
  border-radius: 0;

  :focus {
    border: none;
    outline: 0;
    box-shadow: none;
  }
`



const CommentInput = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
      <TextArea 
              spellcheck="false"
              autosize {...field} {...props}
              value="Ben size savaşmayı değil ölmeyi emrediyorum..." />
  );

export { CommentInput };