import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./Detail.style.scss";
import { Tabs, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  console.log("filmDetail", filmDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let { id } = props.match.params;
    // console.log("id", id);
    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      className="detail-tong"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "90%",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        effectColor="#1c0a42" // required
        color="#fff" // default color is white
        blur={9} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="detail row">
          <div className="detail-tren col-sm-4">
            <img src={filmDetail.hinhAnh} alt="" />
          </div>
          <div className="detail-tren-text col-sm-8">
            <h1>{filmDetail.tenPhim}</h1>
            <p className="theP">
              <span className="ngaychieu">Ngày Chiếu:</span>{" "}
              {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
            </p>
            <p className="theP">
              <span className="C3">C3</span> 110 Phút
            </p>
            <p className="theP">
              <span className="danhgia">{filmDetail.danhGia} IMDb</span> -
              2D/Digitals - <span className="dutuoi">18+</span>
            </p>
            <p className="theP">
              Mô Tả: <span className="mota">{filmDetail.moTa}</span>
            </p>
          </div>
        </div>

        {/* phan ở duói video va he thong rap */}
        <div className="video-htr">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Xem Trailer
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
                Hệ Thống Rạp
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
              <iframe
                width={900}
                height={416}
                src={filmDetail.trailer}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="htrlogo">
                          <img src={htr.logo} width={50} height={50} />
                          {/* <p>{htr.tenHeThongRap}</p> */}
                        </div>
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="cumRap-tong">
                            <div className="cumRap row" key={index}>
                              <div className="cumRap-img col-sm-md-2">
                                <img
                                  src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
                                  width="100"
                                />
                              </div>
                              <div className="cumRap-ten col-sm-md-10">
                                <p>{cumRap.tenCumRap}</p>
                                <div className="cumRap-time row">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to={`/checkout/${lichChieu.maLichChieu}`}
                                          className="cumRap-gio col-sm-2"
                                          key={index}
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                            {/* <div className="cumRap-time row">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to="/"
                                      className="cumRap-gio col-2"
                                      key={index}
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div> */}
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>

        <div className="detail-duoi"></div>
      </CustomCard>
    </div>
  );
}
