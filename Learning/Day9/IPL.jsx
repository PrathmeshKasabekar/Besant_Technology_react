import React from "react";

function IPL({ name, handle }) {
  return (
    <>
      <h1>Hello : {name}</h1>
      <button onClick={() => handle("6TH Trophy is loading")}>Click Me</button>
    </>
  );
}

export default IPL;
