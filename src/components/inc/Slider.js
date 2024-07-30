import React from "react";
import ProgressImage from "./ProgressImage";

import photo0 from "../images/Progress_Photos/photo0.png"
import photo1 from "../images/Progress_Photos/photo1.png"
import photo2 from "../images/Progress_Photos/photo2.png"
import photo3 from "../images/Progress_Photos/photo3.png"
import photo4 from "../images/Progress_Photos/photo4.png"
import photo5 from "../images/Progress_Photos/photo5.png"
import photo6 from "../images/Progress_Photos/photo6.png"
import photo7 from "../images/Progress_Photos/photo7.JPG"
import photo8 from "../images/Progress_Photos/photo8.png"
import photo9 from "../images/Progress_Photos/photo9.png"
import photo10 from "../images/Progress_Photos/photo10.JPG"
import photo11 from "../images/Progress_Photos/photo11.png"
import photo12 from "../images/Progress_Photos/photo12.png"
import photo13 from "../images/Progress_Photos/photo13.png"
import photo14 from "../images/Progress_Photos/photo14.png"
import photo15 from "../images/Progress_Photos/photo15.JPG"
import photo16 from "../images/Progress_Photos/photo16.png"
import photo17 from "../images/Progress_Photos/photo17.png"
import photo18 from "../images/Progress_Photos/photo18.png"
import photo19 from "../images/Progress_Photos/photo19.png"
import photo20 from "../images/Progress_Photos/photo20.png"
import photo21 from "../images/Progress_Photos/photo21.png"
import photo22 from "../images/Progress_Photos/photo22.png"
import photo23 from "../images/Progress_Photos/photo23.png"
import photo24 from "../images/Progress_Photos/photo24.png"


{/* Slider with progress photos. It has next and back buttons.*/}
function Slider(){
    return (
        
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={photo0} class="d-block w-100 carousel-image" alt="..." />
            </div>
            <ProgressImage photo={photo1}/>
            <ProgressImage photo={photo2}/>
            <ProgressImage photo={photo3}/>
            <ProgressImage photo={photo4}/>
            <ProgressImage photo={photo5}/>
            <ProgressImage photo={photo6}/>
            <ProgressImage photo={photo7}/>
            <ProgressImage photo={photo8}/>
            <ProgressImage photo={photo9}/>
            <ProgressImage photo={photo10}/>
            <ProgressImage photo={photo11}/>
            <ProgressImage photo={photo12}/>
            <ProgressImage photo={photo13}/>
            <ProgressImage photo={photo14}/>
            <ProgressImage photo={photo15}/>
            <ProgressImage photo={photo16}/>
            <ProgressImage photo={photo17}/>
            <ProgressImage photo={photo18}/>
            <ProgressImage photo={photo19}/>
            <ProgressImage photo={photo20}/>
            <ProgressImage photo={photo21}/>
            <ProgressImage photo={photo22}/>
            <ProgressImage photo={photo23}/>
            <ProgressImage photo={photo24}/>
        </div>
        {/* Previous Button */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
}


export default Slider;