import React, { useState } from "react";
import "./User.css";
import { useHistory, Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const LoanDetailsComponent = (props) => {
  const [state, setState] = useState({
    loanType: "",
    loanAmount: "",
    rateOfInterest: "",
    loanDate: "",
    loanDuration: "",
  });
  let history = useHistory();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    alert("Congratulations. Loan applied...");
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
                  <Form.Control as="select">
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="col-md-2">
                  <Form.Label>Rate of Interest</Form.Label>
                  <Form.Control as="select" onChange={changeHandler}>
                    <option>8.1</option>
                    <option>7.8</option>
                    <option>8.2</option>
                    <option>9.5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="col-md-2" controlId="date">
                  <Form.Label>Loan Date </Form.Label>
                  <Form.Control type="date" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="col-md-2">
                  <Form.Label>Loan Duration(in Months)</Form.Label>
                  <Form.Control as="select" onChange={changeHandler}>
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
        <p> Outstanding Loan Details...</p>
      </div>
    </div>
  );
};

export default LoanDetailsComponent;
