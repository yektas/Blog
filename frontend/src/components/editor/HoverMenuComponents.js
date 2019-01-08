import React from 'react'
import styled from 'react-emotion'
import {
    MdCode,
    MdFormatAlignCenter,
    MdFormatAlignLeft,
    MdFormatAlignRight,
    MdFormatBold,
    MdFormatItalic,
    MdFormatUnderlined
} from "react-icons/md";

export const Button = styled('span')`
  cursor: pointer;
  color: ${props =>
    props.reversed
        ? props.active ? 'white' : '#aaa'
        : props.active ? 'black' : '#ccc'};
`

export const Icon = (props) => {
    const size = "22px";
    switch (props.icon) {
        case 'bold':
            return <MdFormatBold size={size}/>;
        case 'code':
            return <MdCode size={size}/>;
        case 'italic':
            return <MdFormatItalic size={size}/>;
        case 'underlined':
            return <MdFormatUnderlined size={size}/>;
        case 'left':
            return <MdFormatAlignLeft size={size}/>;
        case 'center':
            return <MdFormatAlignCenter size={size}/>;
        case 'right':
            return <MdFormatAlignRight size={size}/>;
        case 'code_block':
            return <MdCode size={size}/>;
        default:
            return;
    }
}

export const Menu = styled('div')`
& > * {
  display: inline-block;
}
& > * + * {
  margin-left: 15px;
}
`