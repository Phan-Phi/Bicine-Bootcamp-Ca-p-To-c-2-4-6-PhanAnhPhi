import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.style.scss";
import { history } from "../../../../App";
import _ from "lodash";
import { useSelector } from "react-redux";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
export default function Header() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // const userLogin = {
  //   taiKhoan: "anhphi",
  //   soDT: "0398811487",
  //   maNhom: "gp03",
  //   maLoaiNguoiDung: "KhachHang",
  //   hoTen: "anhphi",
  //   email: "anhphi@gmail.com",
  // };
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="nav-DK"
          >
            Đăng Ký
          </button>

          <button
            onClick={() => {
              history.push("/login");
            }}
            className="nav-DN"
          >
            Đăng Nhập
          </button>
        </Fragment>
      );
    }

    return (
      <div>
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <a className="navbar-brand" href="#">
          <img
            src="./img/Bản sao BiCINE-03-02.jpeg"
            alt="asdasd"
            onError={(e) => {
              e.target.onError = null;
              e.target.src =
                "https://lh3.googleusercontent.com/UJjxLzLrxgn1774cydHEWOlWFtaV0QfpZdWLesvYc0p7MBottjmjowqNT5bFxfx_JHD-lQHHIGs0LOeu9fY5CJlvv3B93Gz-CzOYVCCDWJbFUrYg__5_Bpr1XR3rNltSwqmNoAU0PehjObfm1MEyZV3zL9a1Ce0DhGZC9qewmhgl77LJXyaCCB0UF9d2CiLrMpgaAcIMrLhO4vxWHUbZjFB9gXxLEdehi-QxILo-cqJmuk6CTN8ShvdzNV_W70LbE3uUJfg7NgT4iCBbV5g84HETiw63k9B7RzftEceaKnPS2v1CWv0Tyn_EzlDjAf57xY_Hu_7rSbeGY8e1gLUTN6uzQjYiyV-Zj0sZAkjx_A2CdjYvBucZ6IlSsKwLtKw86b_9TrjROZnXIwYJBEZwJjiPs3ZpODZsdgIp3P5Yff4OrsHyC4rC7m3N3awJfHSJx_uRcNJCU7EK7Py3lhU2VOYHXm4a5ZgyGPPhRj-466W4shguQFHRlQvuKd7aOK7JKaVdYdeMSHc_GdsXMnjrCLX7aFRrp2D5PdwyqscAp6qsIITd0TS6e0_4iYZheNBPkACMiLHl1a8ygIj1CTveiRWPCr6NykZ8_cv4PqCJrsYnz6Y-mY2JxLTzvDJNICRvlubo7FSnnu1B2g_MxQNtdV4V3VgtjVvpO-xAM_GJiOvSXAmn4ssXaUw4YLyTVlBVlzL0GrMAvOp97v1cgtrefig=w199-h66-no?authuser=0";
            }}
          />
        </a>
        <button
          className="navbar-toggler nav-bar-3cham"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact={true}
                activeClassName="nav-link-active"
                className="nav-link"
                to="/"
              >
                Trang Chủ <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="#lichChieu"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#cumRap"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                Cụm Rạp
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tinTuc"
                activeClassName="nav-link-active"
                className="nav-link"
              >
                Tin Tức
              </a>
            </li>

            {/* <NavLink href=""></NavLink> */}
          </ul>

          {renderLogin()}
          {/* <button
            onClick={() => {
              history.push("/register");
            }}
            className="nav-DK"
          >
            Đăng Ký
          </button>

          <button
            onClick={() => {
              history.push("/login");
            }}
            className="nav-DN"
          >
            Đăng Nhập
          </button> */}
        </div>

        <div className="nav-button">
          {/* {renderLogin()} */}
          {/* <button className="nav-DK">Đăng Ký</button>

          <button
            onClick={() => {
              history.push("/login");
            }}
            className="nav-DN"
          >
            Đăng Nhập
          </button> */}
        </div>
      </nav>
    </div>
  );
}
