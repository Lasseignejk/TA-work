import NavLink from "./NavLink"
import customers from "../assets/icons/customers.png"
import help from "../assets/icons/help.png"
import home from "../assets/icons/home.png"
import message from "../assets/icons/message.png"
import settings from "../assets/icons/settings.png"
import signout from "../assets/icons/signout.png"
import password from "../assets/icons/password.png"
import Hamburger from "./Hamburger"
import logo from "../assets/icons/logo.png"
import { useState } from "react"


const Nav = ({openNav, setOpenNav, isSelected, setIsSelected}) => {


        const handleItemClick = (itemName) => {
            setIsSelected(itemName)
        }
    const links = [
        {name: "Dashboard", icon: home},
        {name: "Customers", icon: customers},
        {name: "Message", icon: message},
        {name: "Help", icon: help},
        {name: "Settings", icon: settings},
        {name: "Password", icon: password},
        {name: "Sign Out", icon: signout},
    ]
  return (
		<nav
			className={`w-[80px] h-screen bg-regalBlue pl-3 duration-200 ease-in ${
				openNav ? "active" : ""
			}`}>
			<div className="flex flex-col gap-5">
				<div className="flex gap-5 pt-3">
					<img src={logo} alt="" className="w-10" />
					<h1
						className={`text-white text-2xl ${
							openNav ? "" : "hidden"
						}`}>
						Konoha
					</h1>
				</div>
				<div className="flex flex-col gap-5">
					{links.map((link, index) => (
						<NavLink
							link={link}
							key={index}
							openNav={openNav}
							setOpenNav={setOpenNav}
                            isSelected={isSelected}
                            setIsSelected={setIsSelected}
                            handleItemClick={handleItemClick}
						/>
					))}
				</div>
			</div>
		</nav>
  );
}

export default Nav