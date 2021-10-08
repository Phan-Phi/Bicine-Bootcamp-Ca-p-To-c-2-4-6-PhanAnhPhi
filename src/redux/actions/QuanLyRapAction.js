import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      //   console.log("resultresultresultresultresult", result);

      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      console.log("meomeomeo", result);

      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
