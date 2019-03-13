import React from 'react'
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Page404 = () => {
  return (
    <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Title level={1}> Page Not Found, Sorry Bruh!</Title>
        
        <Title level={4}>
          <Link to="/" >Go to homepage</Link>
        </Title>
    </div>
  )
}

export default Page404
