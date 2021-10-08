import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Profile.style.scss";
export default function Profile() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);

  return (
    <div className="Profile">
      <div className="Profile-trang">
        <div className="Profile-mau">
          <img
            src="https://noidangsong.vn/files/uploads/fb1735058496563345/1526444239-tt_avatar_small.jpg"
            alt=""
          />
          <h1>
            Xin Chào! <span>{userLogin.taiKhoan}</span>
          </h1>
          <div className="Profile-tttk">
            <p>
              Tài Khoản: <span>{userLogin.taiKhoan}</span>
            </p>
            <p>
              Họ Tên:{" "}
              <span>
                {userLogin.hoTen} {userLogin.hoTen} {userLogin.hoTen}
              </span>
            </p>

            <hr />
            <p>
              Số Điện Thoại: <span>{userLogin.soDT}87 555</span>
            </p>
            <p>
              Email: <span>{userLogin.email}@gmail.com</span>
            </p>
            <hr />
            <p>
              Người Dùng: <span>{userLogin.maLoaiNguoiDung}</span>
            </p>
            <p>
              Mã Nhóm: <span>*******{userLogin.maNhom}</span>
            </p>

            <h5>
              Chuyển Sang Trang <NavLink to="/admin">Admin</NavLink>
              <br /> (Lưu ý sử dụng Desktop để có trải nghiệm tốt nhất)
            </h5>
          </div>
        </div>
      </div>
      <div className="gach">
        <hr />
      </div>
    </div>
  );
}
