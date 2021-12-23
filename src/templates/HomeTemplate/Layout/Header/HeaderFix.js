import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFix.style.scss";
import { history } from "../../../../App";
import _ from "lodash";
import { useSelector } from "react-redux";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";

export default function HeaderFix() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  //Đóng mở menu bar
  let bar = true;

  //hien scroll to top
  useEffect(() => {
    const scrollToTop = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
      scrollToTop.classList.add("ative");
    });
  }, []);

  //Ẩn hiện đăng nhập
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
          className="nav-TK"
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
          className="nav-DK"
        >
          Đăng Xuất
        </button>
      </div>
    );
  };

  //Đóng mở menu bar
  const handleBar = () => {
    const overlay = document.querySelector(".header-overlay");
    const headerMobile = document.querySelector(".headerFix-mobile");
    overlay.style.display = "block";
    headerMobile.style.transform = "translateX(0)";
    headerMobile.style.opacity = "1";
  };
  const handleBarOff = () => {
    const overlay = document.querySelector(".header-overlay");
    const headerMobile = document.querySelector(".headerFix-mobile");
    headerMobile.style.transform = "translateX(-100%)";

    overlay.style.display = "none";
  };

  return (
    <div className="headerFix">
      <div className="headerFix-container">
        <img
          className="headerFix-logo"
          src="./img/BiCINE-03-02.jpeg"
          alt="logoBicine"
        />
        <ul className="headerFix-content">
          <li className="headerFix-content-item">
            <NavLink to="/" className="nav-link">
              Trang Chủ
            </NavLink>
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

        <div className="headerFix-Bar">
          <i onClick={handleBar} className="fas fa-align-right" />
          <div onClick={handleBarOff} className="header-overlay"></div>
          <div className="headerFix-mobile">
            <img
              className="headerFix-logo"
              src="./img/BiCINE-03-02.jpeg"
              alt="logoBicine"
            />
            <hr />
            <ul className="headerFix-content-mobile">
              <li className="headerFix-content-item">
                <NavLink to="/" className="nav-link">
                  Trang Chủ
                </NavLink>
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
            <hr />
          </div>
        </div>

        {/* phần scroll to top */}
        <div className="header-scrollToTop" id="scrollToTop">
          <a href="#">
            <i class="fas fa-chevron-up"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
