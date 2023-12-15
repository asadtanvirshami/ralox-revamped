import React, { Component } from "react";
import Slider from "react-slick";

import ang from '../../../public/icons/tech/ang.png'
import react from '../../../public/icons/tech/react.png'
import py from '../../../public/icons/tech/py.png'
import mgdb from '../../../public/icons/tech/node.png'
import node from '../../../public/icons/tech/node.png'
import vue from '../../../public/icons/tech/vue.png'
import redis from '../../../public/icons/tech/redis.png'
import js from '../../../public/icons/tech/js.png'
import sql from '../../../public/icons/tech/sql.png'
import psql from '../../../public/icons/tech/psql.png'
import ts from '../../../public/icons/tech/ts.png'
import dart from '../../../public/icons/tech/dart.png'
import firebase from '../../../public/icons/tech/firebase.png'
import tsxc from '../../../public/icons/tech/ts.png'

import Image from "next/image";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      arrows: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1
          }
        }
      ]

    };
    return (
      <div className="text-center" >
        <div className="flle w-full" style={{alignSelf:'center', justifyContent:'center'}}>
        <Slider ref={slider => (this.slider = slider)} {...settings} style={{alignSelf:'center', justifyContent:'center'}}>
          <div className="sc">
            <Image src={vue}  className=''/>
          </div>
          <div className="sc">
            <Image src={ang}  className=''/>
          </div>
          <div className="sc">
            <Image src={react}  className=''/>
          </div>
          <div className="sc">
            <Image src={py}  className=''/>
          </div>
          <div className="sc">
            <Image src={mgdb}  className=''/>
          </div>
          <div className="sc">
            <Image src={node}  className=''/>
          </div>
          <div className="sc">
            <Image src={sql}  className=''/>
          </div>
          <div className="sc">
            <Image src={redis}  className=''/>
          </div>
          <div className="sc">
            <Image src={js}  className=''/>
          </div>
          <div className="sc">
            <Image src={psql}  className=''/>
          </div>
          <div className="sc">
            <Image src={tsxc}  className=''/>
          </div>
          <div className="sc">
            <Image src={firebase}  className=''/>
          </div>
          <div className="sc">
            <Image src={dart}  className=''/>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}