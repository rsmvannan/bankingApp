import reducer from "./reducer";
import * as actionTypes from "./actions";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeaderComponent from "../Components/Header/HeaderComponent";

configure({ adapter: new Adapter() });

const initialState = {
  loggedUser: "",
  isLogin: null,
  loanDetails: {
    loanType: "",
    loanAmount: "",
    rateOfInterest: "",
    loanDate: "",
    loanDuration: "",
  },
};

describe("add user", () => {
  it("return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("return user state", () => {
    expect(
      reducer(initialState, { type: actionTypes.ADD_USER, name: "test" })
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

  // it("Header Should be rendered", () => {
  //   const component = shallow(<HeaderComponent />);
  //   const wrapper = component.find(".header");
  //   expect(wrapper.length).toBe(1);
  // });
});
