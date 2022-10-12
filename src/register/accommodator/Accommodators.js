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
    location: "",
    contact: "",
    image: "",
    owner: "",
    category: "",
  });
  const handlePage = (n) => {
    setPage(n);
    console.log(data);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={container}>
      <img src={profile} alt="login" className={img} />
      {page === 1 && (
        <>
          <h1 className={header}>Register</h1>
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
          <Acc2
            setPage={handlePage}
            page={page}
            handleChange={handleChange}
            data={data}
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
