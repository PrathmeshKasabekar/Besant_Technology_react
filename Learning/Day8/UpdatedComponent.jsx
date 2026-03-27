import React from "react";
import NormalComponent from "./NormalComponent";
import HocComponent from "./HocComponent";

function UpadatedComponent(props) {
  return (
    <>
      <NormalComponent name={props.name} />
    </>
  );
}

export default HocComponent(UpadatedComponent);
