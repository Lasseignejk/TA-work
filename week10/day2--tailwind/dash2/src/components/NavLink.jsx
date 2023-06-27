import React from 'react'
import { useState } from 'react';
const NavLink = ({link, openNav, setOpenNav, isSelected, setIsSelected, handleItemClick}) => {

  return (
		<div className="text-white flex items-center rounded-l-full hover:cursor-pointer hover:font-bold gap-3">
			<img src={link.icon} alt="" className='w-6 m-2' />
			<p className={`text-white hover:bg-white hover:text-regalBlue ease-in duration-200 w-full flex items-center pl-4 rounded-l-full hover:cursor-pointer hover:font-bold gap-3 h-10 ${isSelected === link.name ? "bg-white text-black" : ""} ${openNav ? "flex h-10" : "hidden"}`} onClick={() => handleItemClick(link.name)}>{link.name}</p>
		</div>
  );
}

export default NavLink