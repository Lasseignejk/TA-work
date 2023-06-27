import React from 'react'
import NavLink from './NavLink'

const Nav = ({dashboard, setDashboard, customers, setCustomers, openNav, setOpenNav}) => {
    const navLinks = [
        {name: "Dashboard", state:dashboard, setState:setDashboard},
        {name: "Customers", state:customers, setState: setCustomers},
        {name: "Message"},
        {name: "Help"},
        {name: "Settings"},
        {name: "Password"},
        {name: "Sign Out"},
    ]
  return (
    <nav className='bg-blue-500 text-gray-100 w-[300px] min-h-screen flex flex-col pl-5 gap-3 relative'>
        <h1 className='font-bold py-5'>Brand Name</h1>
        <button className='absolute'>X</button>
        <ul className='flex flex-col gap-5'>
            {navLinks?.map((link) => (
                <NavLink link={link} dashboard={dashboard} setDashboard={setDashboard} customers={customers} setCustomers={setCustomers} />
            ))}
        </ul>
    </nav>
  )
}

export default Nav