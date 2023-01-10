import React from 'react'
import { useNavigate } from 'react-router';
import {scada} from '../../assets'
import styles from '../../style';
import Home from '../Home/Home';

const Demo = () => {
  console.log("In Demo");
  const history = useNavigate();
  const Home = () => {
    history("/home");
  }
  return (
    <div className='grid h-screen w-full'>
      
      <img src={scada} alt="demo" className='w-full h-full object-cover' />
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} onClick={Home}>Go Back</button>
      </div>
  )
}

export default Demo
