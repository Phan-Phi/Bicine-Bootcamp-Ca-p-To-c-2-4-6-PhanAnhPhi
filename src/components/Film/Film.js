import React from "react";
import { NavLink } from "react-router-dom";
import "./Film.style.scss";

export default function Film(props) {
  const { phim } = props;

  return (
    <div className="movieItemFull">
      <div className="movieItem">
        <div className="overley">
          <img src={phim.hinhAnh} />
        </div>
        <a href="#">
          <span>P</span>
          {phim.tenPhim.length > 18
            ? phim.tenPhim.substr(0, 18) + "..."
            : phim.tenPhim}{" "}
        </a>
        <br />

        <NavLink className="button" to={`/detail/${phim.maPhim}`}>
          Đặt Vé
        </NavLink>
      </div>
    </div>
  );
}
