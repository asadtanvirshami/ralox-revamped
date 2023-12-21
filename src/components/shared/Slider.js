import React, { Component } from "react";
import Slider from "react-slick";

import ang from "../../../public/icons/tech/ang.png";
import react from "../../../public/icons/tech/react.png";
import py from "../../../public/icons/tech/py.png";
import mgdb from "../../../public/icons/tech/node.png";
import node from "../../../public/icons/tech/node.png";
import vue from "../../../public/icons/tech/vue.png";
import redis from "../../../public/icons/tech/redis.png";
import js from "../../../public/icons/tech/js.png";
import sql from "../../../public/icons/tech/sql.png";
import psql from "../../../public/icons/tech/psql.png";
import azure from "../../../public/icons/tech/az.png";
import aws from "../../../public/icons/tech/aws.png";
import graph from "../../../public/icons/tech/graph.png";
import dart from "../../../public/icons/tech/dart.png";
import firebase from "../../../public/icons/tech/firebase.png";
import tsxc from "../../../public/icons/tech/ts.png";

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
      slidesToShow: 7,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const items = [
      { id: 0, icon: vue },
      { id: 1, icon: ang },
      { id: 2, icon: react },
      { id: 3, icon: py },
      { id: 4, icon: mgdb },
      { id: 5, icon: sql },
      { id: 6, icon: redis },
      { id: 7, icon: js },
      { id: 8, icon: psql },
      { id: 9, icon: firebase },
      { id: 10, icon: dart },
      { id: 11, icon: aws },
      { id: 12, icon: azure },
      { id: 13, icon: tsxc },
      { id: 14, icon: aws },
      { id: 15, icon: graph },
    ];

    return (
      <div className="text-center">
        <div
          className="flle w-full"
          style={{ alignSelf: "center", justifyContent: "center" }}
        >
          <Slider
            ref={(slider) => (this.slider = slider)}
            {...settings}
            style={{ alignSelf: "center", justifyContent: "center" }}
          >
            {items.map((item, i) => {
              return (
                <div key={item.id} className="sc">
                  <Image src={item.icon} className="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
