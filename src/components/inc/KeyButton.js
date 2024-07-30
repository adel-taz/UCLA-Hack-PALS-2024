import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:8000');

/* Keyboard buttons used for interacting with the rover*/


//keyLabel and keyCode parameters applied so the component can be used for various keys
//isPressed State used to change css formating when a key is pressed. This provides user feedback providing a better experience.
//keyDown useRef used to publish only one message across HiveMQ MQTT broker when a key is held. Stop message is sent during keyup
const KeyButton = ({ keyLabel, keyCode }) => {
const [isPressed, setIsPressed] = useState(false);
const keydown = useRef(false)

  useEffect(() => {
    //update KeyButton, IsPressed, and KeyDown. Process which key is processed and publish corresponding topic and message.
    const handleKeyDown = (event) => {
      if (event.keyCode === keyCode) {
        setIsPressed(true);
        
        //publish which key is pressed.
        if(!keydown.current){
          if(event.key === 'a' || event.key === 's' || event.key === 'w'|| event.key === 'd')
            socket.emit('send-direction', event.key);
          else if(event.key === 'j' || event.key === 'k' || event.key === 'l'|| event.key === 'i')
            socket.emit('send-arm-value', event.key);
          else if(event.key === 'ArrowLeft' || event.key === 'ArrowRight')
            socket.emit('send-camera', event.key);
        }

      }
      keydown.current = true
    };

    //publish stop when keyup.
    const handleKeyUp = (event) => {
      if (event.keyCode === keyCode) {
        setIsPressed(false);
        keydown.current = false
        if(event.key === 'a' || event.key === 's' || event.key === 'w'|| event.key === 'd')
          socket.emit('send-direction', 'stop');
        else if(event.key === 'j' || event.key === 'k' || event.key === 'l'|| event.key === 'i')
          socket.emit('send-arm-value', 'stop');
        else if(event.key === 'ArrowLeft' || event.key === 'ArrowRight')
          socket.emit('send-camera', 'stop');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keyCode]);

  return (
    <button className={`btn btn-secondary key-button ${isPressed ? 'pressed' : ''}`}>
      {keyLabel}
    </button>
  );
};

export default KeyButton;