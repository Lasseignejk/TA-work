import './App.css'
import Dashboard from './components/Dashboard'
import Nav from './components/Nav'
import Customers from './components/Customers'
import Message from './components/Message'
import Help from './components/Help'
import Settings from './components/Settings'
import Password from './components/Password'
import SignOut from './components/SignOut'
import { useState } from 'react'
import Hamburger from './components/Hamburger'

function App() {
  const [openNav, setOpenNav] = useState(false)
          const [isSelected, setIsSelected] = useState("Dashboard");

  return (
		<div className="flex">
			<div className='flex'>
				<Nav openNav={openNav} setOpenNav={setOpenNav} isSelected={isSelected} setIsSelected={setIsSelected} />
				<Hamburger openNav={openNav} setOpenNav={setOpenNav} />
			</div>
			<Dashboard />
			<Customers />
			<Message />
			<Help />
			<Settings />
			<Password />
			<SignOut />
		</div>
  );
}

export default App
