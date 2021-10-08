import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResponsiveSlick from "../../components/RSlick/ResponsiveSlick";
import ResponsiveSlick2 from "../../components/RSlick/ResponsiveSlick2";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import "./Home.style.scss";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeMenu2 from "./HomeMenu/HomeMenu2";
import News from "../News/News";
import DKEmail from "../../components/DKEmail/DKEmail";
import CarouselNew from "../../templates/HomeTemplate/Layout/HomeCarousel/CarouselNew";
import TimKiem from "../../pages/TimKiem/TimKiem";
import "./Home.style.css";
export default function Home() {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  console.log("heThongRapChieu", heThongRapChieu);
  console.log("arrFilmarrFilmarrFilmarrFilm", arrFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
    <div className="nav-home">
      <CarouselNew />
      <TimKiem />
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item nav-item-text" role="presentation">
          <h1 id="lichChieu">
            Danh Sách <span>Phim</span>
          </h1>
        </li>
        <li className="nav-item nav-item-left" role="presentation">
          <a
            className="nav-link chieu active "
            id="pills-home-tab l"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Sắp Chiếu
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <ResponsiveSlick arrFilm={arrFilm} />
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <ResponsiveSlick2 arrFilm={arrFilm} />
        </div>
      </div>

      <HomeMenu2 heThongRapChieu={heThongRapChieu} />

      <News />
      <DKEmail />
    </div>
  );
}
