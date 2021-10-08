import React, { Component } from "react";
import Slider from "react-slick";
import "./ResponsiveSlick.style.scss";
import Film from "../Film/Film";
import { NavLink } from "react-router-dom";

export default class ResponsiveSlick extends Component {
  renderPhim = () => {
    return this.props.arrFilm.slice(10, 26).map((item, index) => {
      return <Film key={index} phim={item} />;
    });
  };
  render() {
    var settings = {
      // dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            // dots: true,
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
      ],
    };
    return (
      <div className="Slick">
        <Slider {...settings}>{this.renderPhim()}</Slider>
        {/* <NavLink href="">hasjdhajsdhajsdhajsdhajsdhajsdhajsdhajsdh</NavLink> */}
      </div>
    );
  }
}
