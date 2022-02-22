import React from "react";
import "./Login.style.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { useSelector } from "react-redux";

export default function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("useLoginuseLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      console.log("action", action);

      dispatch(action);
      console.log("value", values);
    },
  });

  return (
    <div className="asdasdasdadasdasd">
      <div className="pppppp">.</div>
      <div className="login">
        <form onSubmit={formik.handleSubmit}>
          <h3>Đăng Nhập</h3>
          <p>Đăng nhập để truy cập vào tài khoản của bạn</p>
          <div className="form-group">
            <p>Tài Khoản:</p>
            <input
              type="text"
              name="taiKhoan"
              onChange={formik.handleChange}
              placeholder="Nhập string "
            />
          </div>
          <div className="form-group">
            <p htmlFor="exampleInputPassword1">Mật Khẩu:</p>
            <input
              name="matKhau"
              type="password"
              onChange={formik.handleChange}
              placeholder="Nhập string "
            />
          </div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">Ghi Nhớ Đăng Nhập</label>

          <button type="submit" className="btn btn-primary">
            Đăng Nhập
          </button>
          <p>
            Bạn Chưa Có Tài Khoản? <a href="/register">Đăng Ký</a>
          </p>
          <p>
            Quay về <a href="/home">Trang Chủ</a>
          </p>
        </form>
      </div>
    </div>
  );
}
