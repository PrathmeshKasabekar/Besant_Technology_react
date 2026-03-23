import React, { useState } from "react";

function Atm() {
  const [Balance, setBalance] = useState(10000);
  const [Amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAdd = () => {
    setBalance(Balance + Number(Amount));
  };

  const handleWith = () => {
    setBalance(Balance - Number(Amount));
  };

  return (
    <>
      <h1>My Account Balance: {Balance}</h1>

      <p>Enter Amount</p>

      <input type="number" value={Amount} onChange={handleChange} />

      <br />
      <br />

      <button onClick={handleAdd}>Add Money</button>
      <button onClick={handleWith}>Withdraw Money</button>
    </>
  );
}

export default Atm;
