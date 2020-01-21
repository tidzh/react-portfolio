import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      return props.auth.isAuth == true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);
export default PrivateRoute;
