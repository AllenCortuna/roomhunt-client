import React, { useState } from "react";
import { container, img, header } from "./style";
import login from "../img/accommodator.svg";
import Acc1 from "./Acc1";
import Acc2 from "./Acc2";
import Acc3 from "./Acc3";
import autoAnimate from "@formkit/auto-animate";

const RegisterAcc= () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    contact: "",
    image: "",
    category: "",
    owner: "",
    street: "",
    brgy: "",
    city: "",
    province: "",
  });

  const dom = React.useRef(null);
  React.useEffect(() => {
    dom.current && autoAnimate(dom.current);
  }, [dom]);

  const handlePage = (n) => {
    setPage(n);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImg = (img) => {
    setData({ ...data, image: img });
  };
  const handleOpt = (e) => {
    setData({ ...data, category: e.target.value });
    console.log("cat:", data.category);
  };

  return (
    <div className={container} ref={dom}>
      <img src={login} alt="login" className={img} />

      {page === 1 && (
        <>
          <h1 className={header}>Register</h1>
          <hr className="w-full text-gray-300 drop-shadow-sm" />
          <Acc1
            setPage={handlePage}
            page={page}
            handleChange={handleChange}
            data={data}
          />
        </>
      )}
      {page === 2 && (
        <>
          <h1 className={header}>Business Info</h1>
          <hr className="w-full text-gray-300 drop-shadow-sm" />
          <Acc2
            setPage={handlePage}
            page={page}
            handleChange={handleChange}
            data={data}
            handleImg={handleImg}
            handleOpt={handleOpt}
          />
        </>
      )}
      {page === 3 && (
        <>
          <h1 className={header}>Location</h1>
          <hr className="w-full text-gray-300 drop-shadow-sm" />
          <Acc3 handleChange={handleChange} data={data} />
        </>
      )}
    </div>
  );
};

export default RegisterAcc;
