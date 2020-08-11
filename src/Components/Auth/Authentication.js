// const authentication = () => {
function storeUser(user) {
  sessionStorage.setItem("autheticatedUser", user);
}

function getUser() {
  let user = sessionStorage.getItem("authenticatedUser");
  if (user === null) {
    return false;
  }
  return true;
}

function removeuser() {
  sessionStorage.removeItem("authenticatedUser");
}
// };

export { storeUser };
