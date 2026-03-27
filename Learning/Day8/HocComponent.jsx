import React from "react";

function HocComponent(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc">
        <Wrapper {...props} />
      </div>
    );
  };
}

export default HocComponent;
