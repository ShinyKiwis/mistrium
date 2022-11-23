import React from 'react'
import NavbarStyle from "./Navbar.module.css"

const Navbar:React.FC = () => {
  const icons = ["person", "search", "union"]
  return (
    <nav className={NavbarStyle.navbar}>
      <img src="logo.svg" alt="logo image"/>
      <div className={NavbarStyle.nav_container}>
        <span>home</span>
        <span>about us</span>
        <span>products</span>
        <span>faqs</span>
        <span>contact us</span>
      </div>
      <div className={NavbarStyle.nav_activities}>
        {icons.map(icon =>
          <img src={`/${icon}.svg`} alt="icon" key={icon}/>
        )}
      </div>
    </nav>
  )
}

export default Navbar
