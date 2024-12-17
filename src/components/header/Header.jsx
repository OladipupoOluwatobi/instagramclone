import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Home from '../../assets/home.svg'
import Messages from '../../assets/messages.svg'
import Create from '../../assets/create.svg'
import Activity from '../../assets/activity.svg'
import Likes from '../../assets/likes.svg'
import Profilepic from '../../assets/profilepic.svg'







const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />
      
      <div className="input">
        <a href=""><img src={Search} alt="" className='search' /></a>
        <input type="text" placeholder='Search' />
      </div>

      <div className="navigation">
        <a href="/"><img src={Home} alt="" className='nav' /></a>

        <a href="/messages"><img src={Messages} alt="" className='nav' /></a>

        <a href="/create"><img src={Create} alt="" className='nav' /></a>

        <a href="/create"><img src={Activity} alt="" className='nav' /></a>

        <a href="/create"><img src={Likes} alt="" className='nav' /></a>

        <a href="/create"><img src={Profilepic} alt="" className='nav' /></a>
      </div>
    </div>
  )
}

export default Header