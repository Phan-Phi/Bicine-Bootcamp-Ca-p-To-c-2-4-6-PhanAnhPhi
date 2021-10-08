import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import "./Checkout.style.scss";
import "./Checkou.style.css";
import { DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Tabs, Radio, Space } from "antd";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  // console.log({ chiTietPhongVe });\\
  const dispatch = useDispatch();
  console.log("danhSachGheDangDat", userLogin);
  useEffect(() => {
    const action = layChiTietPhongVeAction(props.match.params.id);
    dispatch(action);
  }, []);

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  // console.log("thongTinPhim", thongTinPhim);
  // console.log("danhSachGhe", danhSachGhe);

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`}
            key={index}
          >
            {ghe.daDat ? <p>X</p> : <p>{ghe.stt}</p>}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="Checkout">
      <div className="Checkout-tong row">
        <div className="Checkout-phong col-sm-md-9  col-xl-9">
          <div className="Checkout-phong-rap">
            <div className="Checkout-phong-rap-TTR row">
              <div className="Checkout-phong-rap-img col-sm-md-lg-2">
                <img
                  src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
                  width="100"
                />
              </div>
              <div className="Checkout-phong-rap-text col-sm-md-lg-10">
                <p>{thongTinPhim?.tenCumRap}</p>
                <span>{thongTinPhim?.diaChi}</span>
              </div>
            </div>
            <div className="Checkout-phong-rap-ghe">
              <div className="manhinh">
                <img
                  src="https://img.freepik.com/free-vector/movie-theater-with-three-sided-panoramic-screen-rows-red-seats_107791-4847.jpg?size=626&ext=jpg"
                  width="100%"
                  height="150px"
                />
              </div>

              <div className="ghengoi">
                <div className="ghengoi-xxxx">{renderSeats()}</div>
              </div>
              <div className="ghengoi-mota row">
                <div className="ghengoi-text clo-3">
                  <span className="gthuong"></span>
                  <span>Ghế Thường</span>
                  <span className="gvip"></span>
                  <span>Ghế Vip</span>
                  <span className="gdadat">X</span>
                  <span>Ghế Đã Đặt</span>
                  <span className="gdangdat"></span>
                  <span>Ghế Đang Đặt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Checkout-ve col-sm-md-3  col-xl-3">
          <h4>{thongTinPhim?.tenPhim}</h4>
          <hr />

          <p>
            Ngày Chiếu: <span>{thongTinPhim?.ngayChieu}</span>
          </p>

          <hr />
          <p>
            Giờ Chiếu: <span>{thongTinPhim?.gioChieu}</span>
          </p>

          <hr />
          <h6>
            Ghế:{" "}
            <span className="soghe">
              {danhSachGheDangDat.map((gheDD, index) => {
                return <span key={index}>{gheDD.stt}-</span>;
              })}
            </span>
            <br />
          </h6>

          <hr />

          <p>
            Rạp: <span>{thongTinPhim?.tenRap}</span>
          </p>

          <hr />

          <p>Khuyến Mãi:</p>
          <input type="text" placeholder="Nhập Mã Khuyến Mãi" />
          <hr />

          <p>
            Tổng Tiền:{" "}
            <span className="tien">
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
            </span>
          </p>

          <hr />
          <p>Thanh toán trực tuyến:</p>
          <select name="cars" id="cars">
            <option value="volvo">Zalo Pay</option>
            <option value="saab">ACB</option>
          </select>
          <hr />
          <div className="datVe">
            <button
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                console.log(thongTinDatVe);
                dispatch(datVeAction(thongTinDatVe));
              }}
            >
              Đặt Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function (props) {
  return (
    <div className="checkoutfullllll">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="1-Chọn Ghế Và Đặt Vé" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="2-Lịch Sử Đặt Vé" key="2">
          <LSDatVe {...props} />
        </TabPane>
      </Tabs>
    </div>
  );
}

function LSDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("thongTinNguoiDungthongTinNguoiDung", thongTinNguoiDung);
  useEffect(() => {
    const action = layChiTietPhongVeAction();
    dispatch(action);
  }, []);

  return (
    <div className="Checkout-ttdv">
      <div className="Checkout-trang">
        <div className="Checkout-mau">
          <img
            src="https://noidangsong.vn/files/uploads/fb1735058496563345/1526444239-tt_avatar_small.jpg"
            alt=""
          />
          <h1>
            Xin Chào! <span>{userLogin.taiKhoan}</span>
          </h1>
          <h3>Thông Tin Lịch Sử Đặt Vé</h3>
          <div className="Checkout-tttk">
            <div className="Checkout-tttk-2 row">
              <div className="Checkout-tttk-2 col-sm-6">
                <div className="Checkout-tungve row">
                  <div className="Checkout-img col-3">
                    <img
                      src="https://movie0706.cybersoft.edu.vn/hinhanh/trainwreck-113_gp03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Checkout-text col-9">
                    <h4>Trainwreck 113</h4>
                    <p>BHD Star Cineplex - Bitexco</p>
                    <p>Ghế 03-04</p>
                  </div>
                </div>
              </div>
              <div className="Checkout-tttk-2 col-sm-6">
                <div className="Checkout-tungve row">
                  <div className="Checkout-img col-3">
                    <img
                      src="http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Checkout-text col-9">
                    <h4>Avengers: Infinity War</h4>
                    <p>GLX - Kinh Dương Vương</p>
                    <p>Ghế 97-98</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Checkout-tttk-2 row">
              <div className="Checkout-tttk-2 col-sm-6">
                <div className="Checkout-tungve row">
                  <div className="Checkout-img col-3">
                    <img
                      src="http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Checkout-text col-9">
                    <h4>The Longest Ride</h4>
                    <p>MegaGS - Cao Thắng</p>
                    <p>Ghế 07-09</p>
                  </div>
                </div>
              </div>
              <div className="Checkout-tttk-2 col-sm-6">
                <div className="Checkout-tungve row">
                  <div className="Checkout-img col-3">
                    <img
                      src="http://movie0706.cybersoft.edu.vn/hinhanh/extreme-job-nghe-sieu-kho_gp03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="Checkout-text col-9">
                    <h4>Extreme Job - Nghề Siêu Khó</h4>
                    <p>Lotte - Cantavil</p>
                    <p>Ghế 67-68</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gach">
        <hr />
      </div>
    </div>
  );
}
