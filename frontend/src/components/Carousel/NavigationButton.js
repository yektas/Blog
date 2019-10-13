import React from 'react'
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Button = styled.button`
    background: transparent;
    width: 55px;
    height: 45px;
    cursor: pointer;
    margin-right: 10px;
    border: 1px solid var(--secondary-text-color);

    :focus {
        outline: none;
    }
    :hover {
      background: #e94828;
      color: #ffff;
      border-color: #e94828;
    }
`;

export default function NavigationButton(props) {
  return (
    <IconContext.Provider value={{ size: "20" }}>
    <Button onClick={props.onClick}>
      {
          props.direction === 'left' ?
          <FaLongArrowAltLeft /> :
          <FaLongArrowAltRight />
      }
    </Button>
    </IconContext.Provider>
  )
}
