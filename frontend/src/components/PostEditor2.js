import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from "quill-blot-formatter";
import { ImageDrop } from "quill-image-drop-module";

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
}

Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/myModule', MyModule);

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean'],
        ['code-block']
    ],
    syntax: true,
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'code-block'
  ]

class PostEditor2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
      }


    render() {
        return (
            <ReactQuill 
                theme="snow"
                value={this.state.text}
                modules={modules}
                formats={formats}
                 >
                 </ReactQuill>
        );
    }
}

export default PostEditor2;