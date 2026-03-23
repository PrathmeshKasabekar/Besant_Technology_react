import React, { useEffect, useState } from "react";

function SideEffect() {
  const [value, setValue] = useState(0);
  const [Dep, setDep] = useState(false);

  const handleClick = () => {
    setDep(!Dep); // change dependency
  };

  useEffect(() => {
    setValue((prev) => prev + 1);
  }, [Dep]); // runs when Dep changes

  return (
    <div>
      <h1>Value is {value}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default SideEffect;
