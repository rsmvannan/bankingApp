import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./Components/Login/LoginComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import WelcomeComponent from "./Components/User/WelcomeComponent";
import UserRegistration from "./Components/Registration/UserRegistration";
import LoanDetailsComponent from "./Components/User/LoanDetailsComponent";
import PersonalDetailsComponents from "./Components/User/PersonalDetailsComponent";
import LogoutComponent from "./Components/Logout/LogoutComponent";

const RouterComponent = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={HeaderComponent} />
        <Route path="/" exact component={LoginComponent} />
        <Route path="/welcome/" exact component={WelcomeComponent} />
        <Route path="/register" component={UserRegistration} />
        <Route path="/welcome/loan" component={LoanDetailsComponent} />
        <Route path="/welcome/personal" component={PersonalDetailsComponents} />
        <Route path="/logout" component={LogoutComponent} />
        {/* <Route path="" exact component={ErrorComponent} /> */}
      </Router>
    </div>
  );
};

export default RouterComponent;
