class Authentication {
  storeUser(user) {
    sessionStorage.setItem("autheticatedUser", user);
  }

  getUser() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    }
    return true;
  }

  removeuser = () => {
    sessionStorage.removeItem("authenticatedUser");
  };
}

export default new Authentication();
