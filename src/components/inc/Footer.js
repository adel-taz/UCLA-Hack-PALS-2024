import React from "react";
import photo0 from "../images/Progress_Photos/photo0.png"
import photo1 from "../images/Progress_Photos/photo1.png"
import photo2 from "../images/Progress_Photos/photo2.png"
import photo3 from "../images/Progress_Photos/photo3.png"
import photo4 from "../images/Progress_Photos/photo4.png"
import photo5 from "../images/Progress_Photos/photo5.png"
import photo6 from "../images/Progress_Photos/photo6.png"


{/* Footer broken down into three sections: important links, sponsors, and thank you note*/}
function Footer(){
    return (
        <section className="section border-top custom-bg">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {/* Important Links Section*/}
                    <div className="col-md-4 text-center">
                        <h4 className="bottom-margin">Important Links</h4>
                        <p><a className="important-link" href="https://www.ucla.edu/">UCLA</a></p>
                        <p><a className="important-link" href="https://etransfercenter.seas.ucla.edu/accelerator2024/">Accelerator 2024</a></p>
                        <p><a className="important-link" href="https://etransfercenter.seas.ucla.edu/hack-accelerator-2024/">Hack 2024</a></p>
                        <p><a className="important-link" href="https://www.northropgrumman.com/">Northrop Grumman</a></p>
                    </div>
                    {/* Sponsors Section*/}
                    <div className="col-md-4 text-center">
                        <h4 className="bottom-margin">Sponsors</h4>
                        <p>Northrup</p>
                        <p>UCLA</p>
                        <p>Qualcomm</p>
                    </div>
                    {/* Thank You Section*/}
                    <div className="col-md-4 text-center">
                        <h4 className="bottom-margin">Thank you to</h4>
                        <p>Ryan Carney, Jaelyn Fan</p>
                        <p>Sina Ghadimi, Marvin Mok</p>
                        <p>Aniket Verma, Ashley Juarez</p>
                        <p>Wesley Uehara, Quan Nguyen</p>
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Footer;