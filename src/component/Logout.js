import { useNavigate } from "react-router-dom";
import { useRegisterState } from "../state/register";
import Button from "./btn/Button";

const Logout = () => {
  const navigate = useNavigate();

  const logOut = useRegisterState((state) => state.logOut);
  return (
    <div className="grid grid-cols-2 place-items-center p-4 mt-40 md:mt-28 gap-5 min-w-[18rem] max-w-[24rem] mx-auto">
      <span className="col-span-2 text-center">
        <h1 className="font-bold uppercase text-cyan-800 text-xl drop-shadow-md ">
          logout
        </h1>
        <p className="text-sm text-gray-400 rale">Logout and clear Account info ?</p>
      </span>
      <Button
        color={
          "bg-none border-2 border-gray-500 text-gray-400 shadow-none mt-5 mr-0 ml-auto"
        }
        loading={false}
        text={"cancel"}
        onClick={() => {
          navigate(-1);
        }}
      />

      <Button
        color={
          "border-2 border-error bg-error shad mt-5 ml-0 mr-auto"
        }
        loading={false}
        text={<p className="text-white">Logout</p>}
        onClick={() => {
          logOut(navigate);
        }}
      />
    </div>
  );
};

export default Logout;
