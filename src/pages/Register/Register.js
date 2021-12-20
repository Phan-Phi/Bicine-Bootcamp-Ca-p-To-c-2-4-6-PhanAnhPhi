import React from "react";
import { useFormik } from "formik";
import "./Register.style.scss";
import { history } from "../../App";
import axios from "axios";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    },
    onSubmit: (values) => {
      // const action = dangNhapAction(values);
      // dispatch(action);
      console.log("value", values);

      axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: values,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="Register-tong">
      <div className="rrrrr">.</div>
      <div className="Register">
        <form onSubmit={formik.handleSubmit}>
          <h3>Đăng Ký Tài Khoản</h3>
          <p>Đăng ký để truy cập vào tài khoản của bạn</p>
          <div className="form-group">
            <p>Tên Tài Khoản:</p>
            <input
              type="text"
              name="taiKhoan"
              placeholder="Tên tài khoản"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Email:</p>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Số Điện Thoại:</p>
            <input
              name="soDt"
              type="text"
              placeholder="Số điện thoại "
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mã Nhóm:</p>
            <input
              name="maNhom"
              type="text"
              placeholder="Mã nhóm"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mã Loại Người Dùng:</p>
            <input
              name="maLoaiNguoiDung"
              type="text"
              placeholder="Mã loại người dùng"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Họ Tên:</p>
            <input
              name="hoTen"
              type="text"
              placeholder="Họ tên"
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mật Khẩu:</p>
            <input
              name="matKhau"
              type="text"
              placeholder="Mật Khẩu"
              onChange={formik.handleChange}
            />
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
