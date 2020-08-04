import reducer from "./reducer";
import * as actionTypes from "./actions";

describe("add user", () => {
  it("return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loggedUser: "",
      isLogin: null,
      loanDetails: {
        loanType: "",
        loanAmount: "",
        rateOfInterest: "",
        loanDate: "",
        loanDuration: "",
      },
    });
  });

  it("return initial state", () => {
    expect(
      reducer(
        {
          loggedUser: "",
          isLogin: null,
          loanDetails: {
            loanType: "",
            loanAmount: "",
            rateOfInterest: "",
            loanDate: "",
            loanDuration: "",
          },
        },
        { type: actionTypes.ADD_USER, name: "test" }
      )
    ).toEqual({
      loggedUser: "test",
      isLogin: true,
      loanDetails: {
        loanType: "",
        loanAmount: "",
        rateOfInterest: "",
        loanDate: "",
        loanDuration: "",
      },
    });
  });
});
