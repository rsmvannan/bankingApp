import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeaderComponent from "./HeaderComponent";

configure({ adapter: new Adapter() });

describe("Header Component should be rendered", () => {
  it("Should be rendered", () => {
    const component = shallow(<HeaderComponent />);
    const wrapper = component.find(".header");
    expect(wrapper.length).toBe(1);
  });
});
