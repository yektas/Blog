import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon, Menu} from "./HoverMenuComponents";
import styled from "react-emotion";


const StyledMenu = styled(Menu)`
  padding: 8px 7px 6px;
  position: absolute;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  background-color: #222;
  border-radius: 4px;
  transition: opacity 0.75s;
`

const DEFAULT_NODE = 'paragraph';

class HoverMenu extends React.Component {

    renderBlockButton = (type) => {
        let isActive = this.hasBlock(type)

        if (['numbered-list', 'bulleted-list'].includes(type)) {
            const {value: {document, blocks}} = this.state

            if (blocks.size > 0) {
                const parent = document.getParent(blocks.first().key)
                isActive = this.hasBlock('list-item') && parent && parent.type === type
            }
        }
        return (
            <Button
                active={isActive}
                onMouseDown={event => this.onClickBlock(event, type)}
            >
                <Icon icon={type}/>
            </Button>
        )
    }
    hasBlock = type => {
        const {editor} = this.props
        return editor.value.blocks.some(node => node.type == type)
    }

    render() {
        const {className, innerRef} = this.props
        const root = window.document.getElementById('root')

        return ReactDOM.createPortal(
            <StyledMenu className={className} innerRef={innerRef}>
                {this.renderMarkButton('bold', 'bold')}
                {this.renderMarkButton('italic', 'italic')}
                {this.renderMarkButton('underlined', 'underlined')}
                {this.renderMarkButton('code', 'code')}
                {this.renderBlockButton('code_block')}
                {this.renderBlockButton('left')}
                {this.renderBlockButton('center')}
                {this.renderBlockButton('right')}
            </StyledMenu>,
            root
        )
    }

    onClickBlock(event, type) {
        event.preventDefault()

        const {editor} = this.props
        const {value} = editor
        const {document} = value

        // Handle everything but list buttons.
        if (type != 'bulleted-list' && type != 'numbered-list') {
            const isActive = this.hasBlock(type)
            const isList = this.hasBlock('list-item')

            if (isList) {
                editor
                    .setBlocks(isActive ? DEFAULT_NODE : type)
                    .unwrapBlock('bulleted-list')
                    .unwrapBlock('numbered-list')
            } else if (type !== 'code_block') {
                editor.setBlocks({
                    data: {align: type},
                    type: DEFAULT_NODE
                })
            } else {
                editor.setBlocks({
                    data: {syntax: 'javascript'},
                    type: isActive ? DEFAULT_NODE : type
                })
            }
        } else {
            // Handle the extra wrapping required for list buttons.
            const isList = this.hasBlock('list-item')
            const isType = value.blocks.some(block => {
                return !!document.getClosest(block.key, parent => parent.type == type)
            })

            if (isList && isType) {
                editor
                    .setBlocks(DEFAULT_NODE)
                    .unwrapBlock('bulleted-list')
                    .unwrapBlock('numbered-list')
            } else if (isList) {
                editor
                    .unwrapBlock(
                        type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
                    )
                    .wrapBlock(type)
            } else {
                editor.setBlocks('list-item').wrapBlock(type)
            }
        }
    }

    renderMarkButton(type, icon) {
        const {editor} = this.props
        const {value} = editor
        const isActive = value.activeMarks.some(mark => mark.type == type)
        return (
            <Button
                reversed
                active={isActive}
                onMouseDown={event => this.onClickMark(event, type)}
            >
                <Icon icon={icon}/>
            </Button>
        )
    }

    onClickMark(event, type) {
        const {editor} = this.props
        event.preventDefault()
        editor.toggleMark(type)
    }
}

export default HoverMenu;