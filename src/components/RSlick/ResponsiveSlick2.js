import React, { Component } from "react";
import Slider from "react-slick";
import "./ResponsiveSlick2.style.scss";
import Film from "../Film/Film";
// let a = Math.floor(Math.random() * 150) + 90;
// console.log("a", a);
export default class ResponsiveSlick2 extends Component {
  // a = Math.floor(Math.random() * 150) + 90;

  renderPhim = () => {
    // this.a = Math.floor(Math.random() * 150) + 90;
    // console.log(this.a);
    return this.props.arrFilm.slice(27, 43).map((item, index) => {
      // this.a = Math.floor(Math.random() * 150) + 90;
      // console.log("object", this.a);
      return <Film key={index} phim={item} />;
    });
  };
  render() {
    var settings = {
      // dots: false,
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
            // dots: false,
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
      </div>
    );
  }
}
