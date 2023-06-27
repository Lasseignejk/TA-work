import { useState } from 'react'
import './App.css'
import Customers from './components/Customers'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'

function App() {
  const [dashboard, setDashboard] = useState(true)
  const [customers, setCustomers] = useState(false)
  const [openNav, setOpenNav] = useState(true)

  return (
   <div className='flex'>
    <Nav dashboard={dashboard} setDashboard={setDashboard} customers={customers} setCustomers={setCustomers} openNav={openNav} setOpenNav={setOpenNav} />
    {dashboard && <Dashboard />}
    {customers && <Customers />}
   </div>
  )
}

export default App
