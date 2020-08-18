import React from "react";
// import componentDidMount from "redux";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Loans = () => {
  const selector = useSelector((state) => state.loanDetails);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th> Loan Type</th>
          <th> Loan Amount</th>
          <th> Rate of Interest</th>
          <th> Loan Date</th>
          <th> Loan Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>1</td> */}
          <td> {selector.loanType}</td>
          <td> {selector.loanAmount}</td>
          <td> {selector.rateOfInterest}</td>
          <td> {selector.loanDate}</td>
          <td> {selector.loanDuration}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Loans;
