import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from "antd";
import styled from "styled-components";

const { Title: AntTitle } = Typography;


const Title = styled(AntTitle)`
    line-height: 28px;
    text-transform: uppercase;
`


const SectionTitle = props => {
  return (
        <Title {...props} level={4}>
            {props.children}
        </Title>
  )
}

SectionTitle.propTypes = {

}

export default SectionTitle
