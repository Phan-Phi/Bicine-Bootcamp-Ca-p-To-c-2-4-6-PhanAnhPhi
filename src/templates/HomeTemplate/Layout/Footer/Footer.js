import React from "react";
import "./Footer.tyle.scss";

export default function Footer() {
  return (
    <div className="footer-tong ">
      <div className="footer row">
        <div className="footer-left col-sm-4 ">
          <img
            src="./img/BiCINE-03-02.png"
            alt=""
            onError={(e) => {
              e.target.onError = null;
              e.target.src =
                "https://lh3.googleusercontent.com/UJjxLzLrxgn1774cydHEWOlWFtaV0QfpZdWLesvYc0p7MBottjmjowqNT5bFxfx_JHD-lQHHIGs0LOeu9fY5CJlvv3B93Gz-CzOYVCCDWJbFUrYg__5_Bpr1XR3rNltSwqmNoAU0PehjObfm1MEyZV3zL9a1Ce0DhGZC9qewmhgl77LJXyaCCB0UF9d2CiLrMpgaAcIMrLhO4vxWHUbZjFB9gXxLEdehi-QxILo-cqJmuk6CTN8ShvdzNV_W70LbE3uUJfg7NgT4iCBbV5g84HETiw63k9B7RzftEceaKnPS2v1CWv0Tyn_EzlDjAf57xY_Hu_7rSbeGY8e1gLUTN6uzQjYiyV-Zj0sZAkjx_A2CdjYvBucZ6IlSsKwLtKw86b_9TrjROZnXIwYJBEZwJjiPs3ZpODZsdgIp3P5Yff4OrsHyC4rC7m3N3awJfHSJx_uRcNJCU7EK7Py3lhU2VOYHXm4a5ZgyGPPhRj-466W4shguQFHRlQvuKd7aOK7JKaVdYdeMSHc_GdsXMnjrCLX7aFRrp2D5PdwyqscAp6qsIITd0TS6e0_4iYZheNBPkACMiLHl1a8ygIj1CTveiRWPCr6NykZ8_cv4PqCJrsYnz6Y-mY2JxLTzvDJNICRvlubo7FSnnu1B2g_MxQNtdV4V3VgtjVvpO-xAM_GJiOvSXAmn4ssXaUw4YLyTVlBVlzL0GrMAvOp97v1cgtrefig=w199-h66-no?authuser=0";
            }}
          />
          <div className="footer-left-text row">
            <div className="col-6">
              <p>FAQ</p>
            </div>
            <div className="col-6">
              <p>Thoả thuận sử dụng</p>
            </div>
          </div>
          <div className="footer-left-text row">
            <div className="col-6">
              <p>Brand Guideline</p>
            </div>
            <div className="col-6">
              <p>Chính sách bảo mật</p>
            </div>
          </div>
        </div>
        <div className="footer-center col-sm-4">
          <p>Đối tác:</p>
          <div className="footer-center-logo row">
            <div className="col-3">
              <img
                src="./img/logomovie-01.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "https://tix.vn/app/assets/img/icons/bhd.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-02.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "https://tix.vn/app/assets/img/icons/cgv.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-03.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://tix.vn/app/assets/img/icons/galaxycine.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-04.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://tix.vn/app/assets/img/icons/cinestar.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-05.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-06.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://tix.vn/app/assets/img/icons/megags.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-07.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://tix.vn/app/assets/img/icons/zalopay_icon.png";
                }}
              />
            </div>
            <div className="col-3">
              <img
                src="./img/logomovie-08.png"
                width="45"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "https://tix.vn/app/assets/img/icons/VCB.png";
                }}
              />
            </div>
          </div>
        </div>
        <div className="footer-right col-sm-4">
          <img
            src="./img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
            width="50%"
            onError={(e) => {
              e.target.onError = null;
              e.target.src =
                "https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png";
            }}
          />
        </div>
        <div className="footer-cuoi">
          <p>Bản Quyền Thuộc Về Phan Anh Phi - 0398.813.369</p>
        </div>
      </div>
    </div>
  );
}
