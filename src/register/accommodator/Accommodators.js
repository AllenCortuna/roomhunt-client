import React,{useState} from 'react'
import { container,img,header } from '../../style/register'
import profile from '../../component/img/profile.svg'
import Acc1 from './Acc1'
import Acc2 from './Acc2'
import Acc3 from './Acc3'

const Accommodators = () => {
  const [page, setPage] = useState(1)
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
  })
  const handlePage = (n) => {
    setPage(n)
    console.log(data)
  }


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  };


  return (
      <div className={container}>
        <img src={profile} alt="login" className={img} />
        <h1 className={header}>Register</h1>
        <h1 className={header}>Accommodators</h1>
        {page === 1 && <Acc1 setPage={handlePage} page={page} handleChange={handleChange} data={data}/>}
        {page === 2 && <Acc2 setPage={handlePage} page={page} handleChange={handleChange} data={data}/>}
        {page === 3 && <Acc3 setPage={handlePage} page={page} handleChange={handleChange} />}
      </div>


  )
}

export default Accommodators
