import React, { Component } from 'react'
import Carousel from "../components/Carousel/Carousel";
import { MainLayout } from '../components/Layout';

export default class Test extends Component {
  render() {
    return (
        <MainLayout>
          <Carousel />
        </MainLayout>
    )
  }
}
