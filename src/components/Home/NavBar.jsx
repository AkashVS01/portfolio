import React, { useState } from "react";
import ScrollIntoView from 'react-scroll-into-view'
import Hamburger from 'hamburger-react'
import "./index.scss";

const navOptions = [
    {
        name: "About",
        selectorDiv: "#about"
    },
    {
        name: "Work",
        selectorDiv: "#work"
    },
    {
        name: "Skills",
        selectorDiv: "#skills"
    },
    {
        name: "Projects",
        selectorDiv: "#projects"
    },
    {
        name: "Contact",
        selectorDiv: "#contact"
    }
]

const NavBar = () => {

    const [colorChange, setColorChange] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const changeNavbarColor = () => {
        if(window.scrollY >= 80){
            setColorChange(true);
          }
          else{
            setColorChange(false);
          }
    }

    const handleToggle = () => {
        setOpen(!isOpen);
    }

    const handleSideNav = () => {
        if(isOpen) {
            setOpen(false);
        }
    }

   window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <nav className={`nav-flexbox ${colorChange && "colorChange"}`}>
            <div className="logo">
                AKASH VS
            </div>
            <ul className={isOpen ? "nav-items" : ""}>
                {navOptions.map((navItem) => (
                    <li key={`link-${navItem.name}`}>
                        <ScrollIntoView selector={navItem.selectorDiv}>
                            <a onClick={() => handleSideNav()}>{navItem.name}</a>
                        </ScrollIntoView>
                    </li>
                ))}
            </ul>
            <div className="menu-btn">
                <Hamburger toggled={isOpen} toggle={() => handleToggle()} className="size"/>
            </div>
        </nav>
    )
};

export default NavBar;