import React, { useState } from "react";
// import IPL from "./IPL";
import GetApiData from "./GetApiData";
import PostDataApi from "./PostApiData";

const Main9 = () => {
  const [message, setMessage] = useState("");

  const goForTrophy = (value) => {
    setMessage(value);
  };

  return (
    <div>
      {/* <IPL name="MI fans" handle={goForTrophy} /> */}

      {/* <h2>{message}</h2> */}
      <PostDataApi />
    </div>
  );
};

export default Main9;
