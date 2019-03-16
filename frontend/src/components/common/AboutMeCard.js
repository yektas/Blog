import React from 'react'
import { Card } from "antd"
import Logo from '../../assets/sy.png';

const AboutMeCard = (props) => {
  return (
    <Card>
        <img src="http://i.pravatar.cc/160" style={{ borderRadius: 80}} width="160" alt="me" />
        <p>Hi, I am Sercan a software engineer based in Istanbul, Full Stack Development is my passion</p>
        <img src={Logo} width="160" alt="hello" />
    </Card>
  )
}

export default AboutMeCard;
