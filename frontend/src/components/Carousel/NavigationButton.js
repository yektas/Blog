import React from 'react'
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Icon } from 'antd';

const Button = styled.button`
    background: transparent;
    width: 55px;
    height: 45px;
    cursor: pointer;
    margin-right: 10px;
    border: 1px solid #ffffff73;

    :focus {
        outline: none;
    }
    :hover {
      background: #e94828;
      color: #fff;
      border-color: #e94828;
    }
`;

export default function NavigationButton(props) {
  return (
    <IconContext.Provider value={{ color: "b5b5b5" }}>
    <Button onClick={props.onClick}>
      {
          props.direction === 'left' ?
          <FaLongArrowAltLeft color="#fff" size="20" /> :
          <FaLongArrowAltRight color="#fff" size="20"/>
      }
    </Button>
    </IconContext.Provider>
  )
}
