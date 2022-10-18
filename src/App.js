import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
// import Client from "./register/client/Client";
import Notfound from "./component/NotFound";
import Accommodators from "./component/register/Accommodators";
import AccDashboard from "./component/dashboard/AccDashboard";
import Register from "./component/register/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register/client" element={<Client />} /> */}
        <Route path="/dashboard" element={<AccDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/accommodator" element={<Accommodators />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
