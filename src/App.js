import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
// import Client from "./register/client/Client";
import Notfound from "./component/NotFound";
import RegisterAcc from "./component/register/RegisterAcc";
import AccDashboard from "./component/dashboard/AccDashboard";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import LoginAcc from "./component/login/LoginAcc";
import Logout from "./component/Logout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register/client" element={<Client />} /> */}
        <Route path="/dashboard" element={<AccDashboard />} />
        {/* register */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/accommodator" element={<RegisterAcc />} />
        {/* login */}
        <Route path="/login/" element={<Login />} />
        <Route path="/login/accommodator" element={<LoginAcc />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
