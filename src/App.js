import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
// import Client from "./register/client/Client";
import Notfound from "./component/NotFound";
import Accommodators from "./register/accommodator/Accommodators.js";
import Dashboard from "./dashboard/acc/Dashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register/client" element={<Client />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register/accommodator" element={<Accommodators />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
