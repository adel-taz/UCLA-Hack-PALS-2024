'''
The following code was in the 2024 HAcK rover challenge. The code was written in python and upload to pico to function.
The goal of the project was for the rover to be drive through website. Several library was used to aid with coding.
The following electronics part used where: DHT11, HCSR04(x2), DC motor(x4), H-bridge(x2), ESP32-CAM, Powerbank(x2), Micro-USB(x2), BreadBoard, sheets of Acrylic(x2), 9V battery(x2), wheels(x4), wires(M-M, M-F), screws and nuts
The rover consist of driver train and mutiple sensor reading, and claw with arm.
'''
import dht
from machine import Pin, ADC, PWM
import utime as time
from hcsr04 import HCSR04
import network
from time import sleep
from connections import connect_mqtt, connect_internet
from constants import ssid, password, mqtt_server, mqtt_user, mqtt_pass
from stepper import FullStepMotor

#Declaration of pins
#Stepper Pins
IN1=27
IN2=26
IN3=21
IN4=20
motor=FullStepMotor.frompins(IN1, IN2, IN3, IN4)

# Front wheel
In1=Pin(14, Pin.OUT)
In2=Pin(13, Pin.OUT)
In3=Pin(12, Pin.OUT)
In4=Pin(11, Pin.OUT)
# Back wheel
In12=Pin(8, Pin.OUT)
In22=Pin(7, Pin.OUT)
In32=Pin(6, Pin.OUT)
In42=Pin(5, Pin.OUT)

# Initialize DHT11 and Ultrasonic sensors
sensor=dht.DHT11(Pin(22))
UltraSonicSensor1=HCSR04(trigger_pin=16, echo_pin=17)
UltraSonicSensor2=HCSR04(trigger_pin=18, echo_pin=19)

#Initialized Claw
clawPWM=PWM(Pin(1))
clawPWM.freq(50)
clawPosition=150000
stepperPositionDegree=0

# Motor control functions
def move_forward():
    print("it should be moving")
    In1.low()
    In2.high()
    In3.low()
    In4.high()
    In12.low()
    In22.high()
    In32.high()
    In42.low()

def move_backward():
    In1.high()
    In2.low()
    In3.high()
    In4.low()
    In12.high()
    In22.low()
    In32.low()
    In42.high()

def stop():
    In1.low()
    In2.low()
    In3.low()
    In4.low()
    In12.low()
    In22.low()
    In32.low()
    In42.low()

def turnRight():
    In1.high()
    In2.low()
    In3.low()
    In4.high()
    In12.low()
    In22.high()
    In32.low()
    In42.high()

def turnLeft():
    In1.low()
    In2.high()
    In3.high()
    In4.low()
    In12.high()
    In22.low()
    In32.high()
    In42.low()

# Connect to Wi-Fi
def connect():
    wlan=network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(ssid, password)
    while not wlan.isconnected():
        print('Waiting for connection...')
        sleep(1)
        print(ssid)
        print(password)
    ip = wlan.ifconfig()[0]
    print(f'Connected on {ip}')
    return ip

# Handle incoming MQTT messages
def cb(topic, msg):
    print(f"Received message: Topic: {topic.decode()}, Message: {msg.decode()}")
    if topic==b"direction":
        direction=msg
        print(direction)
        handle_direction(direction)
    elif topic==b"camera":
        camera=msg
        handle_camera(camera)
    elif topic==b"arm":
        arm=msg
        handle_arm(arm)


def handle_arm(arm):
    global clawPosition, stepperPositionDegree
    step=100000
    stepperStep=1
    if arm==b"j":
        clawPosition = min(2500000, clawPosition + step)
        clawPWM.duty_ns(clawPosition)
    elif arm==b"l":
        clawPosition = max(500000, clawPosition - step)
        clawPWM.duty_ns(clawPosition)
    elif arm==b"k" and not motor.turning:
        motor.step(-50)  
    elif arm==b"i" and not motor.turning:
        motor.step(50)
        
def handle_direction(direction):
    if direction==b"w":
        print("it moving forward")
        move_forward()
    elif direction==b"s":
        print("it moving backward")
        move_backward()
    elif direction==b"a":
        turnLeft()
        pass
    elif direction==b"d":
        turnRight()
        pass
    elif direction==b"stop":
        stop()
    else:
        print(f"Unknown direction command: {direction}")
        

# Measure sensor data and publish to MQTT
def sensorMeasurement(client):
    sensor.measure()
    temperature=sensor.temperature()
    humidity=sensor.humidity()
    distance1=UltraSonicSensor1.distance_cm()
    distance2=UltraSonicSensor2.distance_cm()

    client.publish("temp", str(temperature))
    client.publish("humidity", str(humidity))
    client.publish("ultrasonic-front", str(distance1))
    client.publish("ultrasonic-back", str(distance2))

def main():
    #Internet connect, MQTT sever conneciton and subscribe to nessary topics
    ip=connect()
    client=connect_mqtt(mqtt_server, mqtt_user, mqtt_pass)
    client.set_callback(cb)
    client.subscribe("direction")
    client.subscribe("arm")
    client.publish("mytopic", "message")
    print("Subscribed to topics and published initial message.")
    #try catch block to handle incoming MQTT website message and do polling on publishing sensor message
    try:
        i=0
        while True:
            if i%100==0: 
                sensorMeasurement(client)
            client.check_msg()
            sleep(0.01)
            i+=1
    except KeyboardInterrupt:
        print('Keyboard interrupt detected, exiting...')
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()

