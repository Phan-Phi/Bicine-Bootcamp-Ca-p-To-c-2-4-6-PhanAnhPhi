import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";
import Header from "..//HomeTemplate/Layout/Header/Header";
import HeaderFix from "../HomeTemplate/Layout/Header/HeaderFix";

const CheckoutTemplate = (props) => {
  const { Component, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (!localStorage.getItem(USER_LOGIN)) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <HeaderFix {...propsRoute} />

            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};

export default CheckoutTemplate;
