import React from 'react';
import './Header.css';
import { BsList } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <BsList className="icon" />
        <FaYoutube className="tube" />
        <h1>YouTube</h1>
        <h4>IN</h4>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" className="searchInput"/>  <MdKeyboardVoice className='voice'/>
        <RiVideoAddLine className='video' />
        <FaRegBell className='bell'/>
        <FaRegUserCircle className='user' />
      </div>
      <div className="header__right">
      </div>
    </div>
  );
}

export default Header;

