import React from "react";
import { Tabs, Radio, Space } from "antd";
import "./HomeMenu2.style.scss";
import { NavLink } from "react-router-dom";
import moment from "moment";
// import "./HomeMenu2.css";

const { TabPane } = Tabs;

export default class HomeMenu2 extends React.PureComponent {
  state = {
    tabPosition: "top",
    tabPositionleft: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPositionleft } = this.state;
      return (
        <TabPane
          tab={
            <div id="cumRap" className="imgLogoRap">
              <img src={heThongRap.logo} width="50" />
            </div>
          }
          key={index}
        >
          <div className="tabPositionleft">
            <Tabs tabPosition={tabPositionleft} className="tabPositionleft">
              {heThongRap.lstCumRap?.map((cumRap, index) => {
                return (
                  <TabPane
                    tab={
                      <div className="rapPhim-rap row">
                        <div className="rapPhim-rap-logo">
                          <img
                            src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
                            width="50"
                          />
                        </div>
                        <div className="rapPhim-rap-text">
                          <h6>{cumRap.tenCumRap}</h6>
                          <p>
                            {cumRap.diaChi.length > 40
                              ? cumRap.diaChi.substr(0, 40) + "..."
                              : cumRap.diaChi}{" "}
                          </p>
                        </div>
                      </div>
                    }
                    key={index}
                  >
                    {/* //load danh sach phim cua cum rap */}
                    {cumRap.danhSachPhim?.map((phim, index) => {
                      const time = Math.floor(Math.random() * 150) + 70;

                      return (
                        <div className="rapPhim-danhSachPhim" key={index}>
                          <div className="danhSachPhim row">
                            <div className="danhSachPhim-img">
                              <img src={phim.hinhAnh} width="80" height="80" />
                            </div>
                            <div className="danhSachPhim-text">
                              <h6>{phim.tenPhim}</h6>
                              <p id="Meo">{time} Phút</p>
                            </div>
                          </div>

                          <div className="timePhim row">
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 10)
                              .map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    key={index}
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    className="timeChieu col-sm-2"
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </TabPane>
      );
    });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <div className="rapPhim">
          <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
        </div>
      </>
    );
  }
}
