import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      console.log("dadasdasdasdasdadadad", result);

      dispatch({
        type: DANG_NHAP_ACTION,
        thongTinDangNhap: result.data,
      });

      history.goBack();
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      console.log("dadasdasdasdasdadadad", result);

      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinDangNhap: result.data,
      });
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
