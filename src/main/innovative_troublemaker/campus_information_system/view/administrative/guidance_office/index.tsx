import * as React from "react";
import * as MUI from "@mui/material";

import "./go.views.styles.css";

const ViewGuidanceOffice: React.FC = () => {
    return (<>
        <div id={`administrative-go`}>

            <header>
                <img src="/resources/administrative/guidance_office/img/sjp2cd.jpg" alt="John Paul College Logo" className="logo" />
                <div className="title">
                    <h1>John Paul College of Davao</h1>
                    <h2>Guidance Office</h2>
                </div>
            </header>

            <section className="intro">
                <h2>Welcome to Our Organizational Chart</h2>
                <p>
                    Our organizational chart provides a clear overview of the structure and hierarchy within John Paul College of Davao. It highlights the key roles and responsibilities of each department, ensuring efficient communication and collaboration across the institution.
                </p>
            </section>

            <main className="org-chart">
                <ul>
                    <li>
                        <div className="card">Guidance Chief</div>
                        <img src="/resources/administrative/guidance_office/img/rhodora.jpg" alt="rhodora" className="facilitator-image" />
                        <p className="facilitator-name"> Rhodora D. Ambulo MAHum</p>
                        <ul>
                            <li>


                                <div className="card">Student Development Center Facilitator - College Department
                                    <img src="/resources/administrative/guidance_office/img/Rhea.png" alt="Rhea" className="facilitator-image" />
                                    <p className="facilitator-name"> Rhea H. Tulin</p>


                                </div>

                            </li>
                            <li>
                                <div className="card">
                                    Student Development Facilitator, Senior High School Department
                                    <img src="/resources/administrative/guidance_office/img/lovely.png" alt="Lovely" className="facilitator-image" />
                                    <p className="facilitator-name"> Lovely Joy E. Casol</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>

            <section className="about-us">
                <h2 className={`font-semibold text-black text-[1.5rem]`}>
                    About Us
                </h2>
                <div id={`administrative-go-about-us`}>
                    <header>
                        <img src="/resources/administrative/guidance_office/img/sjp2cd.jpg" alt="John Paul College Logo" className="sjp2cd" />
                        <h1>Welcome to Our Guidance Office</h1>
                    </header>

                    <main className="guidance-office">
                        <section>
                            <p>
                                At John Paul College of Davao, our Guidance Center is passionately committed to fostering the holistic growth of each student. We offer tailored guidance and support to empower students in realizing their full potential. Our dedicated team of experienced counselors is here to assist students in navigating their academic and personal journeys, ensuring they are well-prepared for a successful future.
                            </p>
                        </section>
                        <section className="quotes">
                            <blockquote>
                                "Guiding students towards a brighter future, one step at a time."
                            </blockquote>
                            <blockquote>
                                "Empowering students to achieve their full potential through personalized guidance and support."
                            </blockquote>
                            <blockquote>
                                "At John Paul College of Davao, our guidance center is dedicated to nurturing the holistic development of every student."
                            </blockquote>
                        </section>
                    </main>

                    {/* <button id="java.js">Toggle Dark Mode</button> */}

                </div>
            </section>

            <div className="flex flex-col place-items-center bg-black text-white gap-[1.5rem] p-[2rem] transform">
                <a href="#administrative-go" aria-label="Back to Home" className={`hover:scale-105 ease-linear duration-400`}>
                    <MUI.Button variant={`innovativeTroublemakerButton1`} className={`pl-[1.5rem] pr-[1.5rem]`}>Go Up</MUI.Button>
                </a>
            </div>
            <footer>
                <p>&copy;
                    2023 John Paul College of Davao. All rights reserved.</p>
            </footer>

        </div>
    </>)
}

export default ViewGuidanceOffice;