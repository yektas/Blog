import React, {Component} from 'react'

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import { Star } from '@material-ui/icons'

// This is the ReactJS component which you can find below this snippet
import SyntaxHighlighter from './SyntaxHighlighter'

export default {
  Component: SyntaxHighlighter,
  IconComponent: <Star />,
  name: 'Code Syntax Highlighter',
  version: '0.0.1',
  text: 'Code Syntax Highlighter'
}