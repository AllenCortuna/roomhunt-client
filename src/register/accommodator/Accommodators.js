import React, { useState } from "react";
import { container, img, header } from "../style";
import profile from "../../component/img/profile.svg";
import Acc1 from "./Acc1";
import Acc2 from "./Acc2";
import Acc3 from "./Acc3";

const Accommodators = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    contact: "",
    image: "",
    owner: "",
    category: "",
    street: "",
    brgy: "",
    
  });
  const handlePage = (n) => {
    setPage(n);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImg = (img) => {
    setData({ ...data, image: img });
  };
  const handleOpt = (cat) => {
    setData({ ...data, category: cat });
    console.log(data.category);
  };

  return (
    <div className={container}>
      <img src={profile} alt="login" className={img} />
      {page === 1 && (
        <>
          <h1 className={header}>Register</h1>
        <hr className="w-full text-gray-400 drop-shadow-sm"/>
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
          <h1 className={header}>Accommodation Info</h1>
        <hr className="w-full text-gray-400 drop-shadow-sm"/>
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
          <h1 className={header}>Verify Email</h1>
          <Acc3 setPage={handlePage} page={page} handleChange={handleChange} />
        </>
      )}
    </div>
  );
};

export default Accommodators;
