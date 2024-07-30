import React from "react";


{/* Slider with progress photos. It has next and back buttons.*/}
function ProgressImage({photo}){
    return (
            <div className="carousel-item">
            <img src={photo} class="d-block w-100 carousel-image" alt="..." />
            </div>
    );
}


export default ProgressImage;