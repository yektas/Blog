import React from 'react';
import './highlight.js';
import ReactQuill, { Quill } from 'react-quill';
import { observer } from "mobx-react";
import { Button } from 'antd';
import BlotFormatter from "quill-blot-formatter";
import { ImageDrop } from "quill-image-drop-module";
import '../assets/css/monokai-sublime.css';
import PostStore from "../store/PostStore";
import initDelta from "./editor/initDelta";


/*
function MyModule(quill, options){
    quill.on('selection-change', function(range, oldRange, source) {
        if (range) {
          if (range.length !== 0) {
            var text = quill.getText(range.index, range.length);
            console.log('User has highlighted', text);
          }
        } else {
          console.log('Cursor not in the editor');
        }
      });
    var range = quill.getSelection();
    if (range) {
        if (range.length === 0) {
          console.log('User cursor is at index', range.index);
        } else {
          var text = quill.getText(range.index, range.length);
          console.log('User has highlighted: ', text);
        }
      } else {
        console.log('User cursor is not in editor');
      }
}*/

Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageDrop', ImageDrop);
/*Quill.register('modules/myModule', MyModule);*/

const modules = {
    syntax: true,
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean'],
        ['code-block']
    ],
    blotFormatter: {},
    imageDrop: true
    
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'code-block'
  ]

class PostEditor extends React.Component {
  constructor(props) {
      super(props)
      this.state = { text: initDelta }  // Placeholder delta text for testing..
      
      this.handleChange = this.handleChange.bind(this)
      this.exportContent = this.exportContent.bind(this)
      this.quillRef = null;      // Quill instance
      this.reactQuillRef = null; // ReactQuill component
      
    }

  componentDidMount() {
    this.attachQuillRefs()
    this.quillRef.root.spellcheck = false
    PostStore.setContent(this.quillRef.getContents()); // Placeholder delta text for testing for mobx store..
  }
  
  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs = () => {
    if (typeof this.reactQuillRef.getEditor !== 'function') return;
    this.quillRef = this.reactQuillRef.getEditor();
    }

  handleChange(value) {
    this.setState({ text: value }, () =>{
      PostStore.setContent(this.quillRef.getContents()); // Export as Delta format and update mobx store 
    });
  }

  exportContent(){
    return this.quillRef.getContents(); // 
  }

  

  render() {
    return (
      <div>
        <ReactQuill 
            theme="bubble"
            ref={(el) => { this.reactQuillRef = el }}
            defaultValue={this.state.text}
            onChange={this.handleChange}
            modules={modules}
            formats={formats}
          >
        </ReactQuill>
        </div>
    );
  }
}

export default observer(PostEditor);