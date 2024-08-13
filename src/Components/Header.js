import Logo from "../assets/permanent logo.png"
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header(){

    const [Toggle , SetToggle] = useState(false);

    return(

        <header className="flex justify-between items-center px-5 py-2 bg-primary">
        <a href=""><img src={Logo} style={{width: "50px", height:"50px"}} alt=""/></a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/#about"}>About</a></li>
            <li><a href={"/#projects"}>Projects</a></li>
            <li><a href={"/#contact"}>Contacts</a></li>
        </ul>
        </nav>
        {Toggle &&
        <nav className="block md:hidden ">
        <ul className=" text-white mobile-nav">
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/#about"}>About</a></li>
            <li><a href={"/#projects"}>Projects</a></li>
            <li><a href={"/#contact"}>Contacts</a></li>
        </ul>
        </nav> }
        <button onClick={()=> SetToggle(!Toggle)} className="block md:hidden"><Bars3Icon className="text-white h-5"/></button>
        </header>
    )
}