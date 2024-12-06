
import * as React from "react";
import * as MUI from "@mui/material";

import "./admission.views.styles.css";

const ViewAdmission: React.FC = () => {
    return (<>
        <div id={`administratve-admission`} className={`place-items-center flex flex-col min-w-full `}>
            <div className="org-chart">
                <div className="header-box place-items-center flex flex-col w-full">
                    <img src="/resources/administrative/admission/img/logo.jpg" alt="School Logo" className="logo w-[10rem]" />
                    <h1 className="text-[1.5rem] text-black font-semibold p-[2rem]">ST. JOHN PAUL II COLLEGE OF DAVAO</h1>
                    <h2 className="animated-title text-[2rem] font-semibold">Admission Office</h2>
                </div>
                <div className="admission-info text-black text-[1.2rem]">
                    <h4>The Admission Office is the heartbeat of our institution, where dreams begin and futures unfold.
                        This vibrant hub is dedicated to guiding aspiring students and their families through the enrollment
                        journey, offering compassionate support and expert guidance every step of the way.</h4>
                </div>
                <div className="org-chart-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="/resources/administrative/admission/img/364d8fb4-46ef-415a-9967-9fee64016c32.jpg" alt="Person 1" />
                            </div>
                            <div className="flip-card-back">
                                <h2 className={`text-black`}>Ms. Rosela R. Jabol Lpt, Med-LT</h2>
                                <p className={`text-black`}>Admission Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="/resources/administrative/admission/img/d5534b7e-cc24-4164-b20f-51b4721c04c0.jpg" alt="Person 2" />
                            </div>
                            <div className="flip-card-back">
                                <h2>Aiza R. Canoy LPT</h2>
                                <p>Admissions Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src="/resources/administrative/admission/img/da77b526-74b4-4f6a-9f76-d2a43b54fa5a.jpg" alt="Person 3" />
                            </div>
                            <div className="flip-card-back">
                                <h2>Christine T. Baring</h2>
                                <p>Student Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="admissionPIC">

                        <img src="/resources/administrative/admission/img/sjp2cdn.jpg" alt="Person 3" />
                    </div>

                </div>
            </div>
            <div className="contact-info flex flex-col w-full">
                <p><strong>Address:</strong> Ecoland Drive, Matina, Davao City</p>
                <p><strong>Tel No:</strong> 297-8755 / 297-2033</p>
                <p><strong>Email:</strong> <a href="mailto:admission@sjp2cd.edu.ph">admission@sjp2cd.edu.ph</a></p>
                <p><strong>Website:</strong> <a href="https://www.facebook.com/sjp2cdadmission" target="_blank">https://www.facebook.com/sjp2cdadmission</a></p>
            </div>
        </div>
    </>)
};


export default ViewAdmission;