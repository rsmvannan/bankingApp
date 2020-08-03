import React, { useState } from "react";
// import { Form, Button, Card } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const LogoutComponent = (props) => {
  return (
    <>
      Thanks for using the Application!!!
      <Redirect to="/"></Redirect>
    </>
  );
};

export default LogoutComponent;
