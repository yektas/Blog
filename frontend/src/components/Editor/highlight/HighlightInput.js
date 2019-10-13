import React, { Component } from "react";
import { Input, Select } from "antd";
import styled from 'styled-components';

const { TextArea } = Input;
const { Option } = Select;

const CustomTextArea = styled(TextArea)`
	background: rgb(35, 36, 31);
	min-height: 100px !important;
	font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
	padding: 0.5em;
	color: rgb(248, 248, 242);
	font-size: 16px;
	resize: none;
	color: white;
	width: 100%;
	padding: 5px;
    border: none;
    overflow: hidden;
    box-shadow: none;
`

const availableLanguages = [
	{"name": "Javascript", "value": "javascript"},
	{"name": "Java", "value": "java"},
	{"name": "Python", "value": "python"},
	{"name": "HTML", "value": "html"}
]

class HighlightInput extends Component {
  render() {
    const {
      text,
      language,
      lineNumbers,
	  handleValueChange,
	  handleLanguageChange,
      handleCodeChange
    } = this.props;

    return (
        <div>
          <CustomTextArea
            autosize
            spellCheck="false"
            name="text"
            defaultValue={text}
            onChange={handleValueChange}
          />
        
          <Select
        	defaultValue="javascript"
            style={{position: "absolute", zIndex: 1, top: "10px", right: "10px", width: 120 }}
			onChange={handleLanguageChange}
			placeholder="Language"
          >
            {availableLanguages.map(language => (
				<Option value={language.value}>{language.name}</Option>
			))}
          </Select>
        <span>
          <input
            id="lineNumbers"
            type="checkbox"
            checked={lineNumbers}
            name="lineNumbers"
            onChange={handleValueChange}
          />
          <label htmlFor="lineNumbers" style={{ fontWeight: "normal" }}>
            Show line numbers
          </label>
        </span>
		</div>
    );
  }
}

export default HighlightInput;
