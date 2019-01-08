import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from "quill-blot-formatter";
import { ImageDrop } from "quill-image-drop-module";

Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageDrop', ImageDrop);

const styles = {
    editor: {
        
    }
};

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
      blotFormatter: {},
      imageDrop: true
  }

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

class PostEditor2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
      }


    render() {
        return (
            <ReactQuill 
                theme="bubble"
                style={styles.editor}
                value={this.state.text}
                modules={modules}
                formats={formats}
                 >
                 </ReactQuill>
        );
    }
}

export default PostEditor2;