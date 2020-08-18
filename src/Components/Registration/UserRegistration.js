import React, { useState } from "react";
import "./UserRegistration.css";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import * as actionTypes from "../../store/actions/actions";
import { add_user } from "../../store/actions/actions";

const UserRegistration = (props) => {
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
  const dispatch = useDispatch();
  // let history = useHistory();

  const changeHandler = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });

    // const { name, value } = event.target;
    // setState((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    // }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // testing
    dispatch(add_user(state));

    //testing
    // dispatch(add_user(state.userName));
    // console.log(state);
    // await axios
    //   .post("http://localhost:8001/registration", { state })
    //   .then((result) => {
    //     console.log(result.data);
    //   });
    alert("User Registration Successfull...");
    history.push("/");
  };

  return (
    <div className="col-md-12">
      <Card>
        <Card.Header as="h5"> User Details </Card.Header>
        <Card.Body>
          <Form>
            <Form.Row>
              <Form.Group className="col-md-4" controlId="name">
                <Form.Label> Name </Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="name"
                  placeholder="Enter Name"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="userName">
                <Form.Label> User Name </Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="userName"
                  placeholder="Enter User Name"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  type="password"
                  required
                  name="password"
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
                  required
                  name="address"
                  placeholder="Enter Address"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="zip">
                <Form.Label> ZIP CODE </Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="zip"
                  placeholder="Enter ZIP"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="state">
                <Form.Label> State </Form.Label>
                <Form.Control as="select" onChange={changeHandler} name="state">
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
                <Form.Control
                  as="select"
                  onChange={changeHandler}
                  name="country"
                >
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
                  required
                  name="email"
                  placeholder="Enter Email"
                  onChange={changeHandler}
                />
                {/* <Form.Control.Feedback type="invalid">
                  Please provide values
                </Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group className="col-md-4" controlId="pan">
                <Form.Label> PAN </Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="pan"
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
                  required
                  name="contactNumber"
                  placeholder="Enter Contact Number"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="dob">
                <Form.Label> DOB </Form.Label>
                <Form.Control
                  type="date"
                  required
                  name="dob"
                  placeholder=""
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="accountType">
                <Form.Label> Account Type </Form.Label>
                <Form.Control
                  as="select"
                  onChange={changeHandler}
                  name="accountType"
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
                Submit
              </Button>
              <Button className="reset" variant="secondary" size="sm">
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

// UserRegistration.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default UserRegistration;
