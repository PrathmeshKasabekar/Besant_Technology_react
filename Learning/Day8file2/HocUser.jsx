import React from "react";
import logo from "./logo.svg";
function HocUser(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc-user">
        <Wrapper {...props} />
        <h1>You are Premium Customer</h1>
        <imgs rc={logo} className="hoc-logo" /> Faster Delivery is available for
        you
      </div>
    );
  };
}
export default HocUser;
