import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Display extends Component {
  render() {
    const { state } = this.props
    const { text, language, lineNumbers } = state

    return (
      <SyntaxHighlighter
        language={language || 'javascript'}
        showLineNumbers={lineNumbers || false}
        style={monokaiSublime}
      >
        {text || 'Switch into edit mode then paste your sourcecode here...'}
      </SyntaxHighlighter>
    )
  }
}

export default Display