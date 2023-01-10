import React from 'react'

import styles from '../../style'
import { useCookies } from 'react-cookie';
import { actionTypes, useStateValue } from '../../store';
import { useNavigate } from 'react-router';
import DigitalCard from '../../components/cards/DigitalCard';
import GuageCard from '../../components/cards/GuageCard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Logout from '../../components/logout/Logout';
const Home = () => {
  const [, , removeCookie] = useCookies(["jwt"]);
  const [, dispatch] = useStateValue();
  const history = useNavigate();
  const logout = () => {
    removeCookie('jwt');
    dispatch({ type: actionTypes.SET_TOKEN, value: null });
   
    history("/");
  }
  const demo = () => {
    history("/demo");
  }
  return (

    <body className='min-h-screen px-4 py-1 bg-gray-900 grid grid-cols-5 gap-24'>
       <div className='h-32'>
        <Header />
       
        <Sidebar />
       
    </div>
    {/* <div className='m-3 text-xl text-gray-100 font-semibold'>
      GenXIoT
    </div> */}
      <div className='width-80 mt-40  flex flex-row flex-wrap gap-12 ' >
      <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} onClick={demo}>
      Show Demo
    </button>
    <GuageCard value={220} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 1"}/>
    <GuageCard value={170} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 2"}/>
    <GuageCard value={198} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 3"}/>
    {/* <GuageCard value={211} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 4"}/> */}
    {/* <GuageCard value={235} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 5"}/> */}
    <GuageCard value={252} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 6"}/>
    <GuageCard value={290} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 7"}/>
    {/* <GuageCard value={218} minValue={0} lowlow={160} low={190} high={250} highhigh={270} maxValue={400} title={"Param 8"}/> */}
    <DigitalCard value= {true} title={"Param 9"}/>
    <DigitalCard value={false} title={"Param 10"}/>
      <DigitalCard value={true} title={"Param 11"} />
      {/* <div className='p-10'> */}
    {/* <div> */}
   
  
    </div>
  
  </body>
    
  )
}

export default Home
