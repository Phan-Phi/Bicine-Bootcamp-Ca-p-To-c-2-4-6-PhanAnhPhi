import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFix.style.scss";
import { history } from "../../../../App";
import _ from "lodash";
import { useSelector } from "react-redux";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";

export default function HeaderFix() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <div className="header-DK">
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="nav-DN"
            >
              Đăng Nhập
            </button>

            <button
              onClick={() => {
                history.push("/register");
              }}
              className="nav-DK"
            >
              Đăng Ký
            </button>
          </div>
        </Fragment>
      );
    }

    return (
      <div className="header-DK">
        <button
          onClick={() => {
            history.push("/profile");
          }}
          className="nav-DN"
        >
          Xin Chào! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push("/home");
            window.location.reload();
          }}
          className="nav-DN"
        >
          Đăng Xuất
        </button>
      </div>
    );
  };
  return (
    <div className="headerFix">
      <div className="headerFix-container">
        <i className="fas fa-bars" />

        <img
          className="headerFix-logo"
          src="./img/Bản sao BiCINE-03-02.jpeg"
          alt="logoBicine"
        />
        <ul className="headerFix-content">
          <li className="headerFix-content-item">
            <a href="#lichChieu" className="nav-link">
              <i className="fas fa-bars" />
              Trang Chủ
            </a>
          </li>
          <li className="headerFix-content-item">
            <a href="#lichChieu" className="nav-link">
              Lịch Chiếu
            </a>
          </li>
          <li className="headerFix-content-item">
            <a href="#lichChieu" className="nav-link">
              Cụm Rạp
            </a>
          </li>
          <li className="headerFix-content-item">
            <a href="#lichChieu" className="nav-link">
              Tin Tức
            </a>
          </li>
        </ul>
        {renderLogin()}
      </div>
    </div>
  );
}
