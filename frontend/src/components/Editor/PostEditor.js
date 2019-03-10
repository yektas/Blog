import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Icon } from 'antd';
import './highlight.js';
import ReactQuill, { Quill } from 'react-quill';
import { observer } from 'mobx-react';
import ImageResize from 'quill-image-resize-module-react';
import { ImageDrop } from 'quill-image-drop-module';
import PostStore from '../../store/PostStore';
import './editor.css';


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

Quill.register('modules/customModule', MyModule);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageDrop', ImageDrop);


let icons = Quill.import('ui/icons');
icons['bold'] = ReactDOMServer.renderToString(<Icon style={{ fontSize: '18px' }} type='bold' />);
icons['italic'] = ReactDOMServer.renderToString(<Icon style={{ fontSize: '18px' }} type='italic' />);
icons['underline'] = ReactDOMServer.renderToString(<Icon style={{ fontSize: '18px' }} type='underline' />);
icons['strike'] = ReactDOMServer.renderToString(<Icon style={{ fontSize: '18px' }} type='strike' />);

/*Quill.register('modules/myModule', MyModule);*/
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [ 'link', 'image', 'video', 'formula' ],          // add's image support
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];


const modules = {
    toolbar: toolbarOptions
/*     toolbar: [
        [
            {
                header: [
                    1,
                    2,
                    false
                ]
            }
        ],
        [
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote'
        ],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],
        [
            'link',
            'image'
        ],
        [
            'clean'
        ],
        [
            'code-block'
        ]
    ] */,
    imageResize: {
        parchment: Quill.import('parchment')
        // See optional "config" below
    },
    customModule: {},
    imageDrop: true,
    syntax: {
        highlight: (text) => window.hljs.highlightAuto(text).value
    }
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'code-block'
];

class PostEditorComponent extends React.Component {
    constructor(props) {
        super(props);
        const initialValue = props.initialText
        this.state = { text: initialValue ? initialValue : '' }; // Placeholder delta text for testing..

        this.handleChange = this.handleChange.bind(this);
        this.quillRef = null; // Quill instance
        this.reactQuillRef = null; // ReactQuill component
    }

    componentDidMount() {
        this.attachQuillRefs();
        this.quillRef.root.spellcheck = false;
        PostStore.setContent(this.quillRef.getContents()); // Placeholder delta text for testing for mobx store..
    }

    componentDidUpdate() {
        this.attachQuillRefs();
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    };

    handleChange(value) {
        this.setState({ text: value }, () => {
            PostStore.setContent(JSON.stringify(this.quillRef.getContents())); // Export as Delta format and update mobx store
        });
    }

    render() {
        return (
            <div>
                <ReactQuill
                    theme='bubble'
                    ref={(el) => {
                        this.reactQuillRef = el;
                    }}
                    placeholder='Tell your story...'
                    defaultValue={this.state.text}
                    onChange={this.handleChange}
                    modules={modules}
                    formats={formats}
                />
            </div>
        );
    }
}

const PostEditor = observer(PostEditorComponent);
export { PostEditor };
