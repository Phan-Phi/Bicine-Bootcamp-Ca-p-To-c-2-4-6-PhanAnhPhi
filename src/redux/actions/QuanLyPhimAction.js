import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      console.log("resultresultresultresultresult", result);

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const themPhimUpLoadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themPhimUpLoadHinh(formData);
      alert("thành công");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
