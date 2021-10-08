import React from "react";
import "./DKEmail.style.scss";

export default function DKEmail() {
  return (
    <div className="DKEmail">
      <h4>ĐĂNG KÝ BiCINE</h4>
      <h3>ĐỂ NHẬN THÊM NHIỀU QUYỀN LỢI</h3>
      <div className="DKEmail-btn">
        <input type="text" placeholder="Vui lòng nhập email" />
        <button>Nhận Ưu Đãi</button>
      </div>
    </div>
  );
}
