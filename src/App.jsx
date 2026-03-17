import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "../Learning/Day1/Hello";
import LearningRoutes from "../Learning/Routes";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>

        {/* Other learning routes */}
        <LearningRoutes />
      </div>
    </Router>
  );
}

export default App;
