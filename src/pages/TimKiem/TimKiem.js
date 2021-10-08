import React from "react";
import "./TimKiem.style.scss";

export default function TimKiem() {
  return (
    <div className="timkiem">
      <h3>Chào Mừng Bạn Đến Với BiCINE</h3>
      <h1>Hãy Tìm Bộ Phim Mà Bạn Muốn Xem</h1>
      <div className="timkiem-select">
        <select name="cars" id="cars">
          <option value="volvo">Phim</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="volvo">Rạp</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="volvo">Xuất Chiếu</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button>Mua Vé</button>
      </div>
    </div>
  );
}
