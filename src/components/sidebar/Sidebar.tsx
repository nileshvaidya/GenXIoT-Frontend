import React, { useState } from 'react'
import {MdLocationPin,MdDevices,MdDashboard,MdAccessAlarms,MdSettings,MdSubscriptions } from 'react-icons/md';
import {HiUserCircle, HiMenuAlt3 } from 'react-icons/hi';
import { FaHouseUser, FaUsers } from 'react-icons/fa';
import { TbReportAnalytics } from 'react-icons/tb';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import styles from '../../style';
const Sidebar = () => {
  const menus = [
    { name: "Tenants", link: "/", icon: FaHouseUser },
    { name: "Customers", link: "/", icon: HiUserCircle },
    { name: "Locations", link: "/", icon: MdLocationPin, margin: true },
    { name: "Devices", link: "/", icon: MdDevices },
    { name: "Dashboards", link: "/", icon: MdDashboard },
    { name: "Alarms", link: "/", icon: MdAccessAlarms },
    { name: "Users", link: "/", icon: FaUsers, margin: true },
    { name: "Settings", link: "/", icon: MdSettings },
    { name: "Reports", link: "/", icon: TbReportAnalytics },
    { name: "Subscription", link: "/", icon: MdSubscriptions }
  ];
  const [open, setOpen] = useState(true);
  return (
    // <BrowserRouter> className={`${styles.boxWidth}`}min-h-screen ${styles.sidebarHeight}
    <section className="flex position-absolute gap-1 mt-5 ml-5">
        <div className={`bg-[#0e0e0e] min-h-screen   ${open ? 'w-72' : 'w-16' } duration-500 text-gray-100 px-4`}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3 size={26} className = 'cursor-pointer' onClick={() => setOpen(!open)} />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative' >
       
          {
            menus?.map((menu,i) => (
              <Link to={menu?.link} key={i}
                className={` ${menu?.margin && "mt-5"} 
                group flex items-center text-sm gap-3.5 font - medium p - 6 hover:bg-blue-gray-500 rounded-md`}>
              <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                <h2
                  style={{
                    transitionDelay:`${i+3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                <h2
                  className={`${
                    open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg
                  px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                  group-hover:w-fit `}>
                  {menu?.name}
                </h2>
              </Link>
              ))
          }
        </div>
      </div>
      </section>
      // </BrowserRouter>
  )
}
 
export default Sidebar