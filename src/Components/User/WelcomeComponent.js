import React, { useState } from "react";
import { Form, Button, Card, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import UserRegistration from "./UserRegistration";

const WelcomeComponent = (props) => {
  const submitHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="/welcome/personal"> Personal Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/welcome/loan"> Loan Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout"> Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>Click on the tab to get the details...</Card.Body>
      </Card>
    </div>
  );
};

export default WelcomeComponent;
