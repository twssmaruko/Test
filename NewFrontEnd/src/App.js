import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "./style.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/profile" element= {<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
