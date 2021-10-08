import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import "./AdminTemplate.style.scss";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useStore } from "react-redux";
import { USER_LOGIN } from "../../util/settings/config";
import { NavLink } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { collapsed, setCollapsed } = useStore(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập trang này");
    return <Redirect to="/" />;
  }
  if (userLogin.maLoaiNguoiDung !== "KhachHang") {
    alert("Bạn không có quyền truy cập trang này");
    return <Redirect to="/" />;
  }

  //   if (userLogin.maLoaiNguoiDung === "KhachHang") {
  //     alert("Bạn có quyền truy cập trang này");
  //     // return <Redirect to="/" />;
  //   }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <img
                  src="./img/Bản sao BiCINE-03-02.jpeg"
                  alt="asdasd"
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src =
                      "https://lh3.googleusercontent.com/UJjxLzLrxgn1774cydHEWOlWFtaV0QfpZdWLesvYc0p7MBottjmjowqNT5bFxfx_JHD-lQHHIGs0LOeu9fY5CJlvv3B93Gz-CzOYVCCDWJbFUrYg__5_Bpr1XR3rNltSwqmNoAU0PehjObfm1MEyZV3zL9a1Ce0DhGZC9qewmhgl77LJXyaCCB0UF9d2CiLrMpgaAcIMrLhO4vxWHUbZjFB9gXxLEdehi-QxILo-cqJmuk6CTN8ShvdzNV_W70LbE3uUJfg7NgT4iCBbV5g84HETiw63k9B7RzftEceaKnPS2v1CWv0Tyn_EzlDjAf57xY_Hu_7rSbeGY8e1gLUTN6uzQjYiyV-Zj0sZAkjx_A2CdjYvBucZ6IlSsKwLtKw86b_9TrjROZnXIwYJBEZwJjiPs3ZpODZsdgIp3P5Yff4OrsHyC4rC7m3N3awJfHSJx_uRcNJCU7EK7Py3lhU2VOYHXm4a5ZgyGPPhRj-466W4shguQFHRlQvuKd7aOK7JKaVdYdeMSHc_GdsXMnjrCLX7aFRrp2D5PdwyqscAp6qsIITd0TS6e0_4iYZheNBPkACMiLHl1a8ygIj1CTveiRWPCr6NykZ8_cv4PqCJrsYnz6Y-mY2JxLTzvDJNICRvlubo7FSnnu1B2g_MxQNtdV4V3VgtjVvpO-xAM_GJiOvSXAmn4ssXaUw4YLyTVlBVlzL0GrMAvOp97v1cgtrefig=w199-h66-no?authuser=0";
                  }}
                />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <NavLink to="/admin/user">Người Dùng</NavLink>
                  </Menu.Item>

                  <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/showtime">ShowTime</NavLink>
                  </Menu.Item>

                  <SubMenu key="sub1" icon={<DesktopOutlined />} title="User">
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                      <NavLink to="/admin/films">Films</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                      <NavLink to="/admin/themfilms">Thêm Phim</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                />
                <div className="omlai">
                  <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: 360 }}
                    >
                      <Component {...propsRoute} />
                    </div>
                  </Content>
                  <Footer style={{ textAlign: "center" }}>
                    BiCINE ©2021 Tạo bởi Anh Phi
                  </Footer>
                </div>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
