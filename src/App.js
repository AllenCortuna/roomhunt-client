import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Search from "./component/search/Search";
import Notfound from "./component/NotFound";
import RegisterAcc from "./component/register/RegisterAcc";
import Otp from "./component/register/Otp";
import AccDashboard from "./component/dashboard/AccDashboard";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import LoginAcc from "./component/login/LoginAcc";
import LoginClient from "./component/login/LoginClient";
import Logout from "./component/Logout";
import Upload from "./component/upload/Upload";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path="/register/client" element={<Client />} /> */}
        <Route path="/dashboard" element={<AccDashboard />} />
        {/* register */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/acc" element={<RegisterAcc />} />
        <Route path="register/verify-email" element={<Otp />} />
{/* utility */}
        <Route path="/upload" element={<Upload />} />
        {/* login */}
        <Route path="/login/" element={<Login />} />
        <Route path="/login/acc" element={<LoginAcc />} />
        <Route path="/login/client" element={<LoginClient />} />
  
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
