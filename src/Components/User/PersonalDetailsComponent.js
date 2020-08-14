import React, { useState, useEffect } from "react";
import "./User.css";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PersonalDetailsComponents = (props) => {
  const selector = useSelector((state) => state.loggedUser);

  const [state, setState] = useState({
    name: "",
    userName: "",
    password: "",
    address: "",
    zip: "",
    state: "",
    country: "",
    email: "",
    pan: "",
    contactNumber: "",
    dob: "",
    accountType: "",
  });
  let history = useHistory();

  useEffect(() => {
    console.log("use effect");
    // event.preventDefault();
    // console.log(selector);
    axios.get("http://localhost:8001/user").then((result) => {
      console.log(result.data);
      assignValues(result.data[0]);
      // setState({
      //   ...state,
      //   name: result.data[0].name,
      // });
      // changeHandler(result);
      // dispatch(apply_loan(result.data));
    });
  }, []);

  function assignValues(userData) {
    console.log(userData);
    setState({
      // ...state,
      name: userData.name,
      address: userData.address,
      zip: userData.zip,
      state: userData.state,
      country: userData.country,
      email: userData.email,
      pan: userData.pan,
      contactNumber: userData.contactNumber,
      dob: userData.dob.toString().slice(0, 10),
      accountType: userData.accountType,
    });
  }

  const changeHandler = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Profile Updated...");
    history.push("/welcome");
  };

  const clickHandler = () => {
    history.push("/welcome");
  };

  return (
    <div className="col-md-12">
      <Card>
        <Card.Header as="h5">
          <p className="card-button" onClick={clickHandler}>
            Back
          </p>
          Personal Details
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="name">
                <Form.Label> Name </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={state.name}
                  // placeholder="Enter Name"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="address">
                <Form.Label> Address </Form.Label>
                <Form.Control
                  type="textarea"
                  name="address"
                  value={state.address}
                  // placeholder="Enter Address"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="zip">
                <Form.Label> ZIP CODE </Form.Label>
                <Form.Control
                  type="text"
                  value={state.zip}
                  // placeholder="Enter ZIP"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="state">
                <Form.Label> State </Form.Label>
                <Form.Control as="select" name="state" value={state.state}>
                  <option>Andrapradesh</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>TamilNadu</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-md-4" controlId="country">
                <Form.Label> Country </Form.Label>
                <Form.Control as="select">
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="col-md-4" controlId="email">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  // type="email"
                  name="email"
                  value={state.email}
                  // placeholder="Enter Email"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="pan">
                <Form.Label> PAN </Form.Label>
                <Form.Control
                  type="text"
                  value={state.pan}
                  // placeholder="Enter PAN Number"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="contactNumber">
                <Form.Label> Contact Number </Form.Label>
                <Form.Control
                  type="number"
                  value={state.contactNumber}
                  // placeholder="Enter Contact Number"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="dob">
                <Form.Label> DOB </Form.Label>
                <Form.Control
                  type="text"
                  value={state.dob}
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="accountType">
                <Form.Label> Account Type </Form.Label>
                <Form.Control
                  as="select"
                  name="accountType"
                  value={state.accountType}
                >
                  <option> Savings</option>
                  <option> Salary</option>
                  <option>Current</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <div>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                onClick={submitHandler}
              >
                Update
              </Button>
              {/* <Button className="reset" variant="secondary" size="sm">
                Cancel
              </Button> */}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalDetailsComponents;
