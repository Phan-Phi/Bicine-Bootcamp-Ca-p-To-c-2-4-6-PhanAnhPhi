import React, { useState } from "react";
import "./ThemFilms.style.scss";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { themPhimUpLoadHinhAction } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../util/settings/config";

const ThemFilms = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;

      let formData = new FormData();

      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      dispatch(themPhimUpLoadHinhAction(formData));
      console.log("formData", formData.get("File"));
    },
  });

  const [componentSize, setComponentSize] = useState("default");

  const handleChangeDatePicker = (value) => {
    console.log("datepickerChange");
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInphutNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //lấy file ra
    let file = e.target.files[0];
    console.log("file", file);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item label="Tên Phim:">
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer:">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô Tả:">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Ngày Khởi Chiếu:">
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item label="Đang Chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp Chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>

        <Form.Item label="Phim Hot">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>

        <Form.Item label="Số Sao">
          <InputNumber
            onChange={handleChangeInphutNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Hình Ảnh">
          <input type="file" onChange={handleChangeFile} />
        </Form.Item>

        <Form.Item label="Thêm Phim:">
          <button type="submit">Chấp Nhận</button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ThemFilms;
