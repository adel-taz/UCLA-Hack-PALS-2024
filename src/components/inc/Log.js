import React from "react";


{/* Log component for each documentation paragraph*/}
function Log({ color, title, content }) {
    return (
        <div className="log-container" style={{ backgroundColor: color }}>
            <p className="log-title">{title}</p>
            <p className="log-text">{content}</p>
        </div>
    );
}


export default Log;