import "./Instagram.scss";
import picture from "./ProfilePicture.png"
import image from "./Frame 36.png"
import rec from "./Rectangle 55.png"
const Below = ()=>{
   
    return(
        
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
        </div>
       
    )

}
export default Below;