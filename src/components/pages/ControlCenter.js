import React, { useState, useEffect, useRef } from "react";
import Camera_Guide from "../images/Guide/camera_guide.png"
import Arm_Guide from "../images/Guide/arm_guide.png"
import Move_Guide from "../images/Guide/move_guide.png"
import KeyButton from "../inc/KeyButton";
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

{/* Usestates to keep track of current values of sensors. Refreshes the page everytime it updates*/}
function ControlCenter(){
   const [temp, setTemp] = useState(null);
   const [ultrasonicFront, setUltrasonicFront] = useState(null);
   const [ultrasonicBack, setUltrasonicBack] = useState(null);
   const [humidity, setHumidity] = useState(null);
    useEffect(() => {
     // Listen for temperature updates
     socket.on('temp', (data) => {
       setTemp(data);
     });
      // Listen for front and back ultrasonic updates
     socket.on('ultrasonic-front', (data) => {
       setUltrasonicFront(data);
     });
     socket.on('ultrasonic-back', (data) => {
       setUltrasonicBack(data);
     });
      // Listen for humidity updates
      socket.on('humidity', (data) => {
       setHumidity(data);
     });
      return () => {
       socket.off('temp');
       socket.off('ultrasonic-front');
       socket.off('ultrasonic-back');
       socket.off('humidity')
     };
   }, []);




   return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="main-heading">Control Center</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="col-md-9">
            <h3 className="sub-heading text-center">Camera Streaming</h3>
            <div className="underline-sub mx-auto"></div>
            {/* Camera Stream*/}
            <iframe
              src="http://192.168.50.135/"
              height="500"
              width="900"
              title="Iframe Example"
            ></iframe>

            {/* Keyboard buttons*/}
            <div className="keyboard">
              <div className="row justify-content-between text-center">
                <div className="col">
                  <KeyButton keyLabel="W" keyCode={87} className="uniform-size" />
                  <div className="btn-group">
                    <KeyButton keyLabel="A" keyCode={65} className="uniform-size" />
                    <KeyButton keyLabel="S" keyCode={83} className="uniform-size" />
                    <KeyButton keyLabel="D" keyCode={68} className="uniform-size" />
                  </div>
                </div>

                <div className="col">
                  <KeyButton keyLabel="I" keyCode={73} className="uniform-size" />
                  <div className="btn-group">
                    <KeyButton keyLabel="J" keyCode={74} className="uniform-size" />
                    <KeyButton keyLabel="K" keyCode={75} className="uniform-size" />
                    <KeyButton keyLabel="L" keyCode={76} className="uniform-size" />
                  </div>
                </div>
                <div className="col">
                  <div className="btn-group">
                    <KeyButton keyLabel="←" keyCode={37} className="uniform-size" />
                    <KeyButton keyLabel="→" keyCode={39} className="uniform-size" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* Live Sensor Data Section*/}
            <h3 className="sub-heading text-center">Live Data</h3>
            <div className="underline-sub mx-auto"></div>
            <p>Ultrasonic Front: {ultrasonicBack}</p>
            <p>Ultrasonic Back: {ultrasonicFront}</p>
            <p>Temperature: {temp}</p>
            <p>Humidity: {humidity}</p>


            {/* Guide of user interface sections*/}
            <h3 className="sub-heading text-center margin-top-added">Control Guides</h3>
            <div className="underline-sub mx-auto"></div>
            <div className="guide">
              <img src={Move_Guide} alt="Move Guide" className="guide-image" />
              <span>Move Guide Description</span>
            </div>
            <div className="guide">
              <img src={Arm_Guide} alt="Arm Guide" className="guide-image" />
              <span>Arm Guide Description</span>
            </div>
            <div className="guide">
              <img src={Camera_Guide} alt="Camera Guide" className="guide-image" />
              <span>Camera Guide Description</span>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
export default ControlCenter;

