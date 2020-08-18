import React, { useState } from "react";
import "./User.css";
import { useHistory, Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loans from "./Loans";
// import axios from "axios";
// import * as actionTypes from "../../store/actions/actions";
import { apply_loan } from "../../store/actions/actions";

const LoanDetailsComponent = (props) => {
  const [state, setState] = useState({
    loanType: "",
    loanAmount: "",
    rateOfInterest: "",
    loanDate: "",
    loanDuration: "",
  });

  let history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.loanDetails);

  const changeHandler = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(apply_loan(state));
    // testing
    // await axios
    //   .post("http://localhost:8001/applyloan", { state })
    //   .then((result) => {
    //     console.log(result.data);
    //     dispatch(apply_loan(result.data));
    //     alert("Loan Applied !!!");
    //   });
    // testing
    // dispatch(apply_loan(state));
    // const test = state.loanType;
    // console.log(state);
    // const apply = await axios.get("http://localhost:8001/loan").then((res) => {
    //   console.log(res.data);
    // });
  };

  const clickHandler = () => {
    history.push("/welcome");
  };

  return (
    <div>
      <div className="col-md-12 class-loan">
        <Card>
          <Card.Header as="h5">
            <p className="card-button" onClick={clickHandler}>
              Back
            </p>
            New Loan
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group className="col-md-2" controlId="loantype">
                  <Form.Label>Loan Type </Form.Label>
                  <Form.Control
                    as="select"
                    name="loanType"
                    className="loanType"
                    onChange={changeHandler}
                  >
                    <option>Personal</option>
                    <option>Housing</option>
                    <option>Mortgage</option>
                    <option>Gold</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="col-md-2" controlId="loanamount">
                  <Form.Label>Loan Amount </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=" Loan Amount"
                    name="loanAmount"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="col-md-2">
                  <Form.Label>Rate of Interest</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={changeHandler}
                    name="rateOfInterest"
                  >
                    <option>8.1</option>
                    <option>7.8</option>
                    <option>8.2</option>
                    <option>9.5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="col-md-2" controlId="date">
                  <Form.Label>Loan Date </Form.Label>
                  <Form.Control
                    type="date"
                    name="loanDate"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="col-md-2">
                  <Form.Label>Loan Duration(in Months)</Form.Label>
                  <Form.Control
                    as="select"
                    name="loanDuration"
                    onChange={changeHandler}
                  >
                    <option>12</option>
                    <option>18</option>
                    <option>24</option>
                    <option>36</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  type="submit"
                  className="newloan"
                  variant="primary"
                  size="sm"
                  onClick={submitHandler}
                >
                  Apply
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Outstanding Loan Details</Card.Header>
        </Card>
        {/* <p> */}

        {/* {selector.loanAmount} */}
        <Loans />
        {/* </p> */}
      </div>
    </div>
  );
};

export default LoanDetailsComponent;
