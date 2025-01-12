import React from "react";
import './Status.scss'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import Home from '../assets/Profile-Pic.png'
function Status(){
    return(
        <div id="lastBox">
            <div id="figBox">
                <figure>
                    <img src={Home} alt="pix" />
                    <figcaption>Your story</figcaption>
                </figure>
                <figure>
                    <img src={image1} alt="pix" />
                    <figcaption>maniscus</figcaption>
                </figure>
                <figure>
                    <img src={image2} alt="" />
                    <figcaption>leoni_tu</figcaption>
                </figure>
                <figure>
                    <img src={image3} alt="" />
                    <figcaption>katarina</figcaption>
                </figure>
                <figure>
                    <img src={image4} alt="" />
                    <figcaption>brandon</figcaption>
                </figure>
                <figure>
                    <img src={image5} alt="" />
                    <figcaption>mik</figcaption>
                </figure>
            </div>
        </div>
    )
}
export default Status