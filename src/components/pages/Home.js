import React from "react";
import MemberCard from "../inc/MemberCard.js"


import AdelPhoto from "../images/Team_Members/Adel.JPG"
import OscarPhoto from "../images/Team_Members/Oscar.jpg"
import RyanPhoto from "../images/Team_Members/Ryan.png"
import SenjinPhoto from "../images/Team_Members/Senjin.JPEG"

const teamMembers = [
    { name: "Adel Tazhibi", 
        role: "Computer Science and Engineering from Moorpark College", 
        bio: "Creation of the website using React and Bootstrap, integrated MQTT Broker, and assisted with fabrication and assembly.", 
        photo: AdelPhoto },
    { name: "Ryan Cullen", 
        role: "Mechanical Engineering from El Camino College", 
        bio: "Development of the overall rover design and structure, including CAD, printing, revising, and assembly. Responsible for SolidWorks assembly of the rover.", 
        photo: RyanPhoto },
    { name: "Oscar Chen", 
        role: "Electrical Engineering from Mount San Antonio College", 
        bio: "Formulating hardware setup, wiring of electrical components, and programming of the Pico. ", 
        photo: OscarPhoto },
    { name: "Seungiun Kim", 
        role: "Chemical Engineering from De Anza College", 
        bio:"Development of the rover parts and assembly using SolidWorks and making the PPT slides.", 
        photo: SenjinPhoto }
  ];

  {/* Home Page introduing team members*/}
function Home(){
    return (
        <section className="section">
        <div className="container">

            {/* Section with cards showing each team member with a summary introduction of them and their contrubutions*/}
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">Our Team</h3>
                    <div className="underline mx-auto"></div>
                </div>

                {teamMembers.map((member) => (
                    <MemberCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    photo={member.photo}
                    />
                ))}
                   
            </div>
        </div>
        
    </section>

        
    );
}


export default Home;