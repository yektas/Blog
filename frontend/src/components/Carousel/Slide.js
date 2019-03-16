import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import AuthorCard from './AuthorCard';

const { Title, Text, Paragraph } = Typography;

const Slide = props => {
    const { index, title, subtitle } = props;
    return (
        <div index={index} >
            <div className='slider' style={{ display: 'flex'}}>
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        marginRight: '20px'
                        //background: '#00ffb8'
                    }}
                >
                    
                        <div style={{ marginTop: "50px", marginBottom: "20px" }}>
                            <AuthorCard name="A.Sercan Yektaş" time="Mar 8" readTime="7" />
                        </div>
                        
                            <Title style={{ color:"initial",    fontSize: "60px"}}>
                            <Link to="/">{title}</Link>
                            </Title>
                            
                        <Title ellipsis={{ rows: 3 }} level={4} style={{ fontWeight: "500"}}>
                            {subtitle}
                        </Title>
                         </div>
                <div style={{ flex: 1 }}>
                    <div className="slider__cover-image"
                        style={{backgroundImage: "url('https://codeless.co/thype/blog/wp-content/uploads/2018/12/Depositphotos_200162996_xl-2015.jpg)"}}>
                    </div>
                </div>
            </div>
        </div>
    );
}

Slide.propTypes = {

}

export default Slide
