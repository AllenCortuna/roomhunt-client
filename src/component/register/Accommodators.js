import React,{useState} from 'react'
import { container,img,header } from '../style/register'
import profile from '../img/profile.svg'
import Acc1 from './Acc1'

const Accommodators = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState({
    owner: "",
    name: "",
    location: "",
    email: "",
    contact: "",
    image: "",
    validID: "",
    businessPermit: "",
    category: "",
    password: "",
    confirmPassword: "",
  })
  const handlePage = (n) => {
    setPage(n)
  }

  return (
      <div className={container}>
        <img src={profile} alt="login" className={img} />
        <h1 className={header}>Register</h1>
        <h1 className={header}>Accommodators</h1>
        {page === 1 && <Acc1 data={data} setData={setData} setPage={handlePage} page={page}/>}
      </div>


  )
}

export default Accommodators
