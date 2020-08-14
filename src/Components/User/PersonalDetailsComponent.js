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
    // event.preventDefault();
    // console.log(selector);
    axios.get("http://localhost:8001/user").then((result) => {
      console.log(result.data);
      // dispatch(apply_loan(result.data));
    });
  }, []);

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
                  placeholder="Enter Name"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="userName">
                <Form.Label> User Name </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="address">
                <Form.Label> Address </Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Enter Address"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="zip">
                <Form.Label> ZIP CODE </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ZIP"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="state">
                <Form.Label> State </Form.Label>
                <Form.Control as="select">
                  <option>Andrapradesh</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>TamilNadu</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
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
                  type="email"
                  placeholder="Enter Email"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="pan">
                <Form.Label> PAN </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PAN Number"
                  onChange={changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="contactNumber">
                <Form.Label> Contact Number </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="dob">
                <Form.Label> DOB </Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="accountType">
                <Form.Label> Account Type </Form.Label>
                <Form.Control as="select">
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
              <Button className="reset" variant="secondary" size="sm">
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalDetailsComponents;
