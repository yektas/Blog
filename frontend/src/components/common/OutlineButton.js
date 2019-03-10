import React from "react";
import { Button as AntdButton} from "antd";
import styled from "styled-components";

const StyledButton = styled(AntdButton)`
    :hover {
        background: ${props => getBackgroundColor(props.type)} !important;
        color: ${props => getColor(props.type)} !important;
        border-color: ${props => getBorderColor(props.type)} !important;
    }
`

const getBackgroundColor = (type) => {
    switch(type){
        case "primary":
            return "#1890ff";
        default:
            return;
    }
}

const getColor = (type) => {
    switch(type){
        case "primary":
            return "#fff";
        default:
        return;
    }
}

const getBorderColor = (type) => {
    switch(type){
        case "primary":
            return "#1890ff";
        default:
        return;
    }
}


const OutlineButton = (props) => (
        <StyledButton ghost {...props} >
            {props.children}
        </StyledButton>
    )
export default OutlineButton;