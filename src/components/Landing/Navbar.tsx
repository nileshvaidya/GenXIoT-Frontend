import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { close, logo,logo1, menu } from '../../assets/';


import { navLinks } from '../../constants';
import styles from '../../style';
console.log(logo);
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const history = useNavigate();
  const login = () => {
    
    history("/login");
  }
    return (
      <nav className='w-full flex py-6 justify-between items-center navbar'>
       <div> <img src={logo1} alt = "GenXIoT" className='w-[124px] h-[32px]'/></div>
      

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
          <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[14px] text-primary outline-none ${styles} rounded-[10px]`} onClick={login}>
      Log in
    </button>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
            alt="menu" className='w-[28px] n-[28px] object-contain' onClick={() => setToggle((prev) => (!prev))} />
          <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-1 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index ===navLinks.length-1 ? 'mr-0' : 'mb-4'} text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar