import React, {useState} from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"





/* function isTouchDevice() {
    return navigator.maxTouchPoints > 0;
  } */
  
  

const Header =()=>{
    
const[navList, setNavList]= useState(false)
    /* const navItems = [
        { path: "/home", text: "Home" },
        { path: "/about", text: "About" },
        { path: "/contact", text: "Contact" },
      ];
 */
      // Check if the device supports touch
  //const touchDevice = isTouchDevice();  
  
    
    return(
        <>
        <header>
            <div className="container flex">
                <div className="logo">
                <img src="./images/logo.png" alt="" />
                </div>
             <div className= "nav">
                <ul className={navList ? "small" :"flex"}>
                    {nav.map((list, index ) =>(
                    <li key={index}>
                        <Link to ={list.path}> {list.text}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div className="button flex">
                        <button className="btn1">Sign In</button>
            </div>
            
             <div className="toggle">
                <button onClick={() => setNavList(!navList)}> 
                    {navList? <i className="fa fa-times"></i>: <i className="fa fa-bars"></i>}</button>
            </div>
            </div>
        </header>
        </>
    )
}
export default Header
