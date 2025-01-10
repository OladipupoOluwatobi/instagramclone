import React from "react";
import './Header.scss'
import menu from '../assets/Menu-Button-item (1).png'
import messenger from '../assets/Messenger.png'
import find from '../assets/NewPosts.png'
import menu1 from '../assets/Menu-Button-item.png'
import logo from '../assets/Logo.png'
import picture from "../assets/ProfilePicture.png"
function Header(){
    return(
        <div id="headcon">
            <div id="head">
                <div>
                    <img src={logo} alt="" />
                </div>
                
                <div>
                    <form action="">
                        <button type="submit">Q</button>
                        <input type="text" placeholder="Search"/>
                    </form>
                </div>

                <div id="iconFlex">
                    <img src={menu1} alt=""  width={27}/>
                    <img src={messenger} alt=""  width={27}/>
                    <img src={find} alt=""  width={27}/>
                    <img src={menu} alt=""  width={27}/>
                    <i className='far fa-heart' ></i>
                    <img src={picture} alt="pic" id="" />
                </div>
            </div>
        </div>
    )
}
export default Header;