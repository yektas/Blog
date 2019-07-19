import React from "react";
import { Input } from "antd";
import Display from "./Display";
import HighlightInput from "./HighlightInput";

const { TextArea } = Input;

class SyntaxHighlighter extends React.Component {
  
  handleValueChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onChange({
      [name]: value
    })
  }

  handleLanguageChange(lang) {
    this.props.onChange({
      language: lang
    })
  }

/*   handleCodeChange(editor, data, value) {
    this.props.onChange({ value: data })
  } */

  render() {
    const { readOnly, state } = this.props
    const { text, language, lineNumbers } = state
    return (
      <div>
        {readOnly ? (
          <Display {...this.props} />
        ) : (
          <HighlightInput
            handleValueChange={this.handleValueChange.bind(this)}
            handleLanguageChange={this.handleLanguageChange.bind(this)}
            // handleCodeChange={this.handleCodeChange.bind(this)}
            text={text}
            language={language}
            lineNumbers={lineNumbers}
          />
        )}
      </div>
    )
  }
}

export default SyntaxHighlighter;
