import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import RegisterClient from "./component/RegisterClient";
import Notfound from "./component/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/client" element={<RegisterClient />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
