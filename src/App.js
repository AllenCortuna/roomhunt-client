import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Search from "./component/search/Search";
import Notfound from "./component/NotFound";
import Register from "./component/register/Register";
import RegisterAcc from "./component/register/RegisterAcc";
import Otp from "./component/register/Otp";
import RegisterClient from "./component/register/RegisterClient";
import ClientOtp from "./component/register/ClientOtp";
import AccDashboard from "./component/dashboard/AccDashboard";
import ClientDashboard from "./component/dashboard/ClientDashboard";
import Login from "./component/login/Login";
import LoginAcc from "./component/login/LoginAcc";
import LoginClient from "./component/login/LoginClient";
import Logout from "./component/Logout";
import Upload from "./component/upload/Upload";
import RoomSearch from "./component/room/RoomSearch";
import RoomInfo from "./component/room/RoomInfo";
import Menu from "./component/menu/Menu";
import AccRoomList from "./component/dashboard/AccRoomList";
import About from "./component/About";
import BusinessInfo from "./component/accinfo/BusinessInfo";
import Reset from "./component/resetPassword/Reset";
import Message from "./component/message/Mesagge";
import SendMessage from "./component/message/SendMessage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/accinfo/:id" element={<BusinessInfo />} />
        <Route path="/rooms" element={<RoomSearch />} />
        <Route path="/rooms/:id" element={<RoomInfo />} />

        <Route path="/reset/:id" element={<Reset />} />
        <Route path="/acc/dashboard" element={<AccDashboard />} />
        <Route path="/acc/roomlist" element={<AccRoomList />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />

        {/* register */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/acc" element={<RegisterAcc />} />
        <Route path="/register/acc/verify-email" element={<Otp />} />
        <Route path="/register/client" element={<RegisterClient />} />
        <Route path="/register/client/verify-email" element={<ClientOtp />} />

        {/* login */}
        <Route path="/login/" element={<Login />} />
        <Route path="/login/acc" element={<LoginAcc />} />
        <Route path="/login/client" element={<LoginClient />} />

        <Route path="/client/menu" element={<Menu />} />
        <Route path="/acc/menu" element={<Menu />} />

        <Route path="/message" element={<Message />} />
        <Route path="/messageSend" element={<SendMessage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
