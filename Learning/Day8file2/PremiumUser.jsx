import React from "react";
import HocUser from "./HocUser";
import NormalUser from "./NormalUser";
function PremiumUser() {
  return (
    <>
      <NormalUser />
    </>
  );
}
export default HocUser(PremiumUser);
