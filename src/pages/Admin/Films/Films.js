import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Button } from "antd/lib/radio";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyPhimAction";
import { history } from "../../../App";
import { NavLink } from "react-router-dom";

export default function Films() {
  //phần lấy dữ liệu trong reducer
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  console.log({ arrFilm });

  //phần biến của layout
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img src={film.hinhAnh} alt={film.tenPhim} width="200" />
          </Fragment>
        );
      },
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
    },
    {
      title: "Thay Đổi",
      dataIndex: "thayDoi",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink className="edit" to="/">
              Edit
            </NavLink>
            <NavLink className="xoa bg-danger text-white" to="/">
              Xoá
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const data = arrFilm;

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  return (
    <div className="films">
      <h1>Quản Lý Danh Sách Phim</h1>

      <Search
        placeholder="Nhập mã phim - tên phim"
        enterButton="Tìm Phim"
        size="large"
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
