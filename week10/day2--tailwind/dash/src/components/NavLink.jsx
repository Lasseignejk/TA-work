import React from 'react'

const NavLink = ({link, customers, setCustomers, dashboard, setDashboard}) => {
  return (
    <li className={`cursor-pointer ${
        link.state ? " bg-gray-100 text-blue-500" : ""
    }`} onClick={() => link.setState(true) }>{link.name}</li>
  )
}

export default NavLink