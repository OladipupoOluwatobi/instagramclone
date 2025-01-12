import "./Instagram.scss";
import picture from "../assets/ProfilePicture.png"
import image from "../assets/Frame 36.png"
import rec from "../assets/Rectangle 55.png"
import Suggestions from "./Part";
import MiddleBody from "./Body";
const Below = ()=>{
   
    return(
        <div id="box">
        <div className="container">
            <div className="outer">
                <div id="contain">
                    <div id="flex">
                        <img src={picture} alt="" />
                        <p id="roboto">mediamodifier</p>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
            <div id="image">
                <img src={rec} alt="" /> 
            </div>
            <MiddleBody/>
        </div>
        <div>
            <Suggestions/>
        </div>
        </div>
    )

}
export default Below;