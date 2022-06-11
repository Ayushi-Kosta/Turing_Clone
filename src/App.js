import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
