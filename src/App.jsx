import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearningRoutes from "../Learning/Routes";
// import App from "./App.css";

function App() {
  return (
    <Router>
      <div>
        <LearningRoutes />
        {/* {data} */}
        {/* <h1>hello</h1> */}
        {/* <NormalComponent name="Normal" />
        <UpdatedComponent name="Update" /> */}
        {/* <NormalUser />
        <PremiumUser /> */}
      </div>
    </Router>
  );
}

export default App;
