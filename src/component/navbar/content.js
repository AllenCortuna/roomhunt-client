import { Link } from "react-router-dom";
import roomhunt_logo from "../img/roomhunt_logo.png";
// import romhunt_text from "../img/romhunt_text.png";
// <img src={romhunt_text} alt="logo" className=" w-20" />;
export const logo = (
  <Link to="/">
    <span className="flex flex-wrap flex-rows items-center gap-2">
      <img src={roomhunt_logo} alt="logo" className=" w-8 my-auto" />
      <h3 className="text-white uppercase text-xl font-[800] hidden md:block my-auto">roomhunt</h3>
    </span>
  </Link>
);
