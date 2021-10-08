import React from "react";
import "./Register.style.scss";
import { history } from "../../App";

export default function Register() {
  return (
    <div className="Register-tong">
      <div className="rrrrr">.</div>
      <div className="Register">
        <form>
          <h3>Đăng Ký Tài Khoản</h3>
          <p>Đăng ký để truy cập vào tài khoản của bạn</p>
          <div className="form-group">
            <p>Tên Khoản:</p>
            <input type="text" name="taiKhoan" placeholder="Nhập string" />
          </div>
          <div className="form-group">
            <p>Email:</p>
            <input name="matKhau" type="email" placeholder="Nhập email" />
          </div>
          <div className="form-group">
            <p>Số Điện Thoại:</p>
            <input name="matKhau" type="text" placeholder="Nhập SĐT" />
          </div>
          <div className="form-group">
            <p>Mật Khẩu:</p>
            <input name="matKhau" type="password" placeholder="Nhập string " />
          </div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Vui lòng xác thực thông tin</label>

          <button
            onClick={() => {
              alert("Đăng Ký Tài Khoản Thành Công");
            }}
            type="submit"
            className="btn btn-primary"
          >
            Đăng Ký
          </button>
          <p>
            Đã Có Tài Khoản? <a href="/login">Đăng Nhập</a>
          </p>
          <p>
            Quay về <a href="/home">Trang Chủ</a>
          </p>
        </form>
      </div>
      <div className="pppppp"></div>
    </div>
  );
}
