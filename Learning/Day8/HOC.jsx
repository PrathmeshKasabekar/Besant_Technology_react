import React from "react";
import HocComponent from "./HocComponent";
import NormalComponent from "./NormalComponent";
import UpdatedComponent from "./UpdatedComponent";
const Day8 = () => {
  return (
    <div>
      <NormalComponent name="Normal" />
      <UpdatedComponent name="Update" />
    </div>
  );
};

export default Day8;
