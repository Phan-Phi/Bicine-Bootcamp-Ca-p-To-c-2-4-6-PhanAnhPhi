import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Header from "../HomeTemplate/Layout/Header/Header";

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
