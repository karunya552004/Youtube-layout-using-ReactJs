import React from 'react';
import './Sidebar.css';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { SiSemanticuireact } from "react-icons/si";
import { PiListDashes } from "react-icons/pi";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><IoMdHome className="icon"/>Home</li>
        <li><SiYoutubeshorts className="icon" />Shorts</li>
        <li><MdSubscriptions className="icon" />Subscriptions</li>
        <li id='subs'></li>
        <li>You  <FaAngleRight className='you' /></li>
        <li><GoHistory className='icon' />History </li>
        <li><MdPlaylistPlay className='icon'/>Playlists</li>
        <li><MdOutlineWatchLater className='icon'/>Watch Later</li>
        <li><BiLike className='icon'/>Liked videos</li>
        <li id='subs'></li>
        <li>Subscriptions</li>
        <li><SiSemanticuireact className='icon'/>React channel</li>
        <li><FaJava className='icon'/>Java Tutorial </li>
        <li><PiListDashes className='icon'/>All subscriptions</li>
      </ul>
    </div>
  );
}

export default Sidebar;
