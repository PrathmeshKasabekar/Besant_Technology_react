import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearningRoutes from "../Learning/Routes";

function App() {
  return (
    <Router>
      <div>
        <LearningRoutes />
        {/* {data} */}
        {/* <h1>hello</h1> */}
      </div>
    </Router>
  );
}

export default App;
