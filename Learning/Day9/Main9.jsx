import React, { useState } from "react";
import IPL from "./IPL";

const Main9 = () => {
  const [message, setMessage] = useState("");

  const goForTrophy = (value) => {
    setMessage(value); // 👈 this updates UI
  };

  return (
    <div>
      <IPL name="MI fans" handle={goForTrophy} />

      {/* 👇 This prints on page */}
      <h2>{message}</h2>
    </div>
  );
};

export default Main9;
