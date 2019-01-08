/*
    This editor is based on Slate JS
*/


import {Editor} from 'slate-react'
import {Value} from 'slate'
import React from 'react'
import initialValue from './value.json'
import HoverMenu from "./editor/HoverMenu"
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import CardHeader from "./Card/CardHeader";
import InsertImages from 'slate-drop-or-paste-images'


const styles = {
    editor: {
        "font-weight": "400",
        "font-style": "normal",
        "font-size": "21px",
        "line-height": "1.58",
        "letter-spacing": "-.003em"
    }
};

const plugins = [
    InsertImages({
        extensions: ['png'],
        insertImage: (change, file) => {
          return change.insertBlock({
            type: 'image',
            isVoid: true,
            data: { file }
          })
        }
      })
];

class PostEditor1 extends React.Component {

    state = {
        value: Value.fromJSON(initialValue),
    };

    componentDidMount = () => {
        this.updateMenu()
    };

    componentDidUpdate = () => {
        this.updateMenu()
    };

    updateMenu = () => {
        const menu = this.menu;
        if (!menu) return;

        const {value} = this.state
        const {fragment, selection} = value

        if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
            menu.removeAttribute('style');
            return
        }

        const native = window.getSelection();
        const range = native.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        menu.style.opacity = 1;
        menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`;

        menu.style.left = `${rect.left +
        window.pageXOffset -
        menu.offsetWidth / 2 +
        rect.width / 2}px`
    };

    renderNode = (props, editor, next) => {
        const { attributes, children, node } = props
        switch (node.type) {
            case 'paragraph':
                const align = node.data.get('align');
                return <p {...attributes} style={{"text-align": align}}>{children}</p>;
            case 'h1':
                return <h1 {...attributes}>{children}</h1>
            default:
                return next()
        }
    }

    render() {
        return (
            <Card>
                <CardHeader color="primary">
                    <h4>DENEME</h4>
                </CardHeader>
                <CardBody>
                    <Editor
                        placeholder="What do you want to say..? 😍👋🎉"
                        value={this.state.value}
                        plugins={plugins}
                        onChange={this.onChange}
                        renderEditor={this.renderEditor}
                        style={styles.editor}
                        renderNode={this.renderNode}
                        renderMark={this.renderMark}
                    />
                </CardBody>
            </Card>
        )
    }

    renderEditor = (props, editor, next) => {
        const children = next();
        return (
            <React.Fragment>
                {children}
                <HoverMenu innerRef={menu => (this.menu = menu)} editor={editor}/>
            </React.Fragment>
        )
    };

    renderMark = (props, editor, next) => {
        const {children, mark, attributes} = props;

        switch (mark.type) {
            case 'bold':
                return <strong {...attributes}>{children}</strong>;
            case 'code':
                return <code {...attributes}>{children}</code>;
            case 'italic':
                return <em {...attributes}>{children}</em>;
            case 'underlined':
                return <u {...attributes}>{children}</u>;
            default:
                return next()
        }
    };

    onChange = ({value}) => {
        this.setState({value})
    }
}

export default PostEditor1;