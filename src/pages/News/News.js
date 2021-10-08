import React from "react";
import "./News-style.scss";

export default function News() {
  return (
    <div id="tinTuc" className="News">
      <h1>
        Tin Tức <span>Phim</span>
      </h1>
      <div className="News-top row">
        <div className="News-hot col-sm-8 row">
          <div className="News-hot-img col-6">
            <img src="./img/chia-khoa-tram-ti_gp01.jpeg" alt="" />
          </div>
          <div className="News-hot-text col-6">
            <h4>Chìa Khoá Trăm Tỷ - 30/07/2021</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam
              accusamus reiciendis hic nam, cumque esse quibusdam architecto
              impedit officiis et velit nemo obcaecati. <br />
              <br />
              Facere pariatur reiciendis optio aliquid minus consequuntur, nulla
              fuga accusantium unde veritatis cumque delectus, architecto
              deleniti sit! Deleniti velit nam ipsa tenetur repellendus, fuga
              odit labore. In quamIn quam accusamus reiciendis hic nam accusamus
              reiciendis hic nam.
            </p>
            <button>Chi Tiết</button>
          </div>
        </div>
        <div className="News-5cot col-sm-4">
          <div className="News-5cot-item row">
            <div className="News-5cot-item-img col-3">
              <img src="./img/cot1.png" alt="" />
            </div>
            <div className="News-5cot-item-text col-9">
              <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn.</p>
            </div>
          </div>
          <div className="News-5cot-item row">
            <div className="News-5cot-item-img col-3">
              <img src="./img/cot2.jpeg" alt="" />
            </div>
            <div className="News-5cot-item-text col-9">
              <p>
                [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                Trai...
              </p>
            </div>
          </div>
          <div className="News-5cot-item row">
            <div className="News-5cot-item-img col-3">
              <img src="./img/cot3.jpeg" alt="" />
            </div>
            <div className="News-5cot-item-text col-9">
              <p>
                [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp...
              </p>
            </div>
          </div>
          <div className="News-5cot-item row">
            <div className="News-5cot-item-img col-3">
              <img src="./img/cot4.jpeg" alt="" />
            </div>
            <div className="News-5cot-item-text col-9">
              <p>[Mega GS] Một đoá hoa thay ngàn lời yêu.</p>
            </div>
          </div>
          <div className="News-5cot-item row">
            <div className="News-5cot-item-img col-3">
              <img src="./img/cot5.png" alt="" />
            </div>
            <div className="News-5cot-item-text col-9">
              <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="News-duoi row">
        <div className="News-ngang col-sm-3">
          <img src="./img/new-ngang.jpeg" alt="" />
          <p>BHD 59K/VÉ CẢ TUẦN !!!</p>
          <span>
            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
            khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
          </span>
          <br />
        </div>
        <div className="News-ngang col-sm-3">
          <img src="./img/new-ngang2.png" alt="" />
          <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
          <span>
            ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với
            1k cả tuần + nhận thêm 02 voucher khi đặt...
          </span>
          <br />
        </div>
        <div className="News-ngang col-sm-3">
          <img src="./img/new-ngang3.png" alt="" />
          <p>Ấn định chắc nịch ngày khởi chiếu 16.04...</p>
          <span>
            Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi
            gay cấn thót tim fans hâm mộ.
          </span>
          <br />
        </div>
        <div className="News-ngang col-sm-3">
          <img src="./img/new-ngang4.png" alt="" />
          <p>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế...</p>
          <span>
            Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám.
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
