import React, { Component } from 'react';
import Slider from 'react-slick';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Test from '../../pages/Test';
import NavigationButton from './NavigationButton';
import './carousel.css';
import Slide from './Slide';


const slides = [
    { index: 1, title: 'How to be an expert in Python in 2019', subtitle: 'Hello 1' },
    { index: 2, title: 'Blog Can Be Everything Nowadays',
     subtitle: 'Engineers, medical people, scientific people, \
      have an obsession with solving the problems of reality, \
       once you reach a basic level \
       the problems of reality, once you reach a basic level'
    },
    { index: 3, title: 'How to be an expert in Python in 2019', subtitle: 'Hello 1' },
    { index: 4, title: 'Blog Can Be Everything Nowadays',
     subtitle: 'Engineers, medical people, scientific people, \
      have an obsession with solving the problems of reality, \
       once you reach a basic level \
       the problems of reality, once you reach a basic level'
    }
];

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            fade: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: (index) => {
                this.setState({ currentSlide: index });
            }
        };
        return (
            <Fade top>
                <div>
                    <Slider ref={(c) => (this.slider = c)} {...settings}>
                        {slides.map((slide) => (
                            <Slide title={slide.title} subtitle={slide.subtitle} key={slide.index} index={slide.index} />
                        ))}
                    </Slider>
                    <div style={{ textAlign: 'left', marginTop: '5px' }}>
                        <NavigationButton onClick={this.previous} direction='left' />
                        <NavigationButton onClick={this.next} direction='right' />
                    </div>
                </div>
            </Fade>
        );
    }
}
