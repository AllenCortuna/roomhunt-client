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
import Terms from "./component/Terms";
import Home from "./component/home/Home";
import UpdateInfo from "./component/updateInfo/UpdateInfo";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accinfo/:id" element={<BusinessInfo />} />
        <Route path="/rooms" element={<RoomSearch />} />
        <Route path="/rooms/:id" element={<RoomInfo />} />

        <Route path="/reset/:id" element={<Reset />} />

        {/* register */}
        <Route path="/register" element={<Register />} />
        <Route path="/register/acc" element={<RegisterAcc />} />
        <Route path="/register/acc/verify-email" element={<Otp />} />
        <Route path="/register/client" element={<RegisterClient />} />
        <Route path="/register/client/verify-email" element={<ClientOtp />} />

        {/* Acc acc routes  */}
        <Route
          path="/acc/dashboard"
          element={
            <Acc>
              <AccDashboard />
            </Acc>
          }
        />
        <Route
          path="/acc/roomlist"
          element={
            <Acc>
              <AccRoomList />
            </Acc>
          }
        />
        <Route
          path="/upload"
          element={
            <Acc>
              <Upload />
            </Acc>
          }
        />
        <Route
          path="/client/dashboard"
          element={
            <Client>
              <ClientDashboard />
            </Client>
          }
        />
        <Route
          path="/client/menu"
          element={
            <Client>
              <Menu />
            </Client>
          }
        />
        <Route
          path="/acc/menu"
          element={
            <Acc>
              <Menu />
            </Acc>
          }
        />
        <Route
          path="/acc/updateInfo"
          element={
            <Acc>
              <UpdateInfo />
            </Acc>
          }
        />
        <Route
          path="/message"
          element={
            <Secure>
              <Message />
            </Secure>
          }
        />
        <Route
          path="/messageSend"
          element={
            <Secure>
              <SendMessage />
            </Secure>
          }
        />

        {/*:login */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/acc" element={<LoginAcc />} />
        <Route path="/login/client" element={<LoginClient />} />

        <Route path="/terms" element={<Terms />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;

export function Acc({children}){
  if (localStorage.getItem("acc")) {
    return children;
  } else {
    return <Navigate to="/login/acc" />;
  }
};

export function Client({children}){
  if (localStorage.getItem("client")) {
    return children;
  } else {
    return <Navigate to="/login/client" />;
  }
};

export function Secure({children}){
  if (localStorage.getItem("client") || localStorage.getItem("acc")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
