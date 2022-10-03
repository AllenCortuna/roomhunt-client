import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import RegisterClient from "./component/RegisterClient";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerClient" element={<RegisterClient/>} />
      </Routes>
    </Router>
  );
};

export default App;
