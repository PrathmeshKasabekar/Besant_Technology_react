import react, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Counter</button>
    </>
  );
}
export default Counter;
