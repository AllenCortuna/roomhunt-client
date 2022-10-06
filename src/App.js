import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Client from "./component/register/Client";
import Notfound from "./component/NotFound";
import Accommodators from "./component/register/Accommodators";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/client" element={<Client />} />
        <Route path="/register/accommodator" element={<Accommodators />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
