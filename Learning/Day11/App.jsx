import React from "react";
import SecondComponent from "./SecondConponent";

export const UserContext = React.createContext();

function App() {
  const user = "David";

  return (
    <UserContext.Provider value={user}>
      <h1>App Component</h1>
      <SecondComponent />
    </UserContext.Provider>
  );
}

export default App;
