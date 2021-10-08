// import axios from "axios";
// import { DOMAIN } from "../../util/settings/config";
// import { SET_CAROUSEL } from "../actions/types/CarouselType";
// import { quanLyPhimService } from "../../services/QuanLyPhimService";

// export const getCarouselAction = () => {
//   return async (dispatch) => {
//     try {
//       const result = await quanLyPhimService.layDanhSachBanner();
//       // console.log("hello", result);

//       dispatch({
//         type: SET_CAROUSEL,
//         arrImg: result.data,
//       });
//     } catch (errors) {
//       console.log("errors", errors);
//     }
//   };
// };
