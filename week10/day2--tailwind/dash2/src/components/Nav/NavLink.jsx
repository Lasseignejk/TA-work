import React from 'react'
import { useState } from 'react';
const NavLink = ({link, openNav, setOpenNav, isSelected, setIsSelected, handleItemClick}) => {

  return (
		<div
			className={`text-white flex items-center rounded-l-full hover:cursor-pointer hover:font-bold gap-3 hover:bg-white hover:text-regalBlue ease-in duration-200 ${
				isSelected === link.name ? "selected" : ""
			} `}>
			<span className="m-2 w-6 text-2xl">{link.icon}</span>
			<p
				className={`text-white  w-full flex items-center pl-4 gap-3 h-10 hover:text-regalBlue ${
					isSelected === link.name ? "selected" : ""
				} ${openNav ? "flex h-10" : "hidden"}`}
				onClick={() => handleItemClick(link.name)}>
				{link.name}
			</p>
		</div>
  );
}

export default NavLink