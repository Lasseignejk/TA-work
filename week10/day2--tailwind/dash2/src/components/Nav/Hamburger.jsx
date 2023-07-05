import React from 'react'

const Hamburger = ({openNav, setOpenNav}) => {

    const handleToggle = () => {
        setOpenNav(!openNav)
    }
  return (

			<div className={`hamburger m-3 ${openNav ? 'active' : ''}`} onClick={handleToggle}> 
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

  );
}

export default Hamburger