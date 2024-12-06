
import * as React from "react";
import * as MUIIcon from "@mui/icons-material";
import * as MUI from "@mui/material";

import "./scholarship.view.style.css";

const ViewScholarship: React.FC = () => {
    return (<>
        <div id={`scholarship`}>
            <div className="container">
                <header className="header">
                    <h1>SJP2CD SCHOLARSHIP GRANTS OFFICE</h1>
                </header>
                <h1>ORGANIZATIONAL CHART</h1>
                <section className="staff">
                    <div className="staff-member">
                        <strong>Dr. April B. Evangelista</strong>
                        <span>School President</span>
                    </div>
                    <div className="staff-member">
                        <strong>Dr. Ernesto B. Evangelista</strong>
                        <span>School Vice-President</span>
                    </div>
                    <div className="staff-member">
                        <strong>Engr. Joselito B. Lim, MEP</strong>
                        <span>AVP for Student Services</span>
                    </div>
                    <div className="staff-member">
                        <strong>Mr. Jaime M. Fuentes</strong>
                        <span>Scholarship Coordinator</span>
                    </div>
                    <div className="staff-member">
                        <strong>Maam Jessa Golez Venculado</strong>
                        <span>Scholarship Office Staff</span>
                    </div>
                    <div className="staff-member">
                        <strong>Jeric Deniel M. Ponce</strong>
                        <span>SGO Student Assistance</span>
                    </div>
                </section>
                <section className="programs flex flex-col justify-start text-left pl-4">
                    <h2 className={`text-[1.8rem] pt-8 pb-4 font-semibold`}>PROGRAMS:</h2>
                    <div className="program-category">
                        <h3 className={`text-[2rem] pb-4`}>GOVERNMENT SCHOLARSHIP:</h3>
                        <ul className="scholarship-ul">
                            <li><MUIIcon.ReceiptRounded/>EBSU Scholars</li>
                            <li>a. Scholarship Tertiary Education Program (STEP)</li>
                            <li>b. Special Education Assistance Program (SEAP)</li>
                            <li><MUIIcon.ArrowRightRounded/> TDP - TES</li>
                            <li><MUIIcon.ArrowRightRounded/> UNIFAST - TES</li>
                            <li><MUIIcon.ArrowRightRounded/> CMSP</li>
                            <li><MUIIcon.ArrowRightRounded/> CoScho</li>
                            <li><MUIIcon.ArrowRightRounded/> AFBP</li>
                            <li><MUIIcon.ArrowRightRounded/> OWWA</li>
                        </ul>
                    </div>
                    <div className="program-category">
                        <h3 className={`text-[1.5rem] pt-8 pb-4`}>INSTITUTIONAL SCHOLARSHIP:</h3>
                        <ul className="scholarship-ul">
                            <li><MUIIcon.ArrowRightRounded/> SININGTALA</li>
                            <li><MUIIcon.ArrowRightRounded/> Varsity Volleyball</li>
                            <li><MUIIcon.ArrowRightRounded/> Varsity Basketball</li>
                            <li><MUIIcon.ArrowRightRounded/> Program Scholars</li>
                            <li><MUIIcon.ArrowRightRounded/> Academic Scholars</li>
                        </ul>
                    </div>
                </section>
                <section className="requirements flex flex-col content-start text-left">
                    <h2 className="text-[1.8rem] pt-8 pb-4 font-semibold">HOW TO AVAIL?</h2>
                    <ul className={`scholarship-ul`}>
                        <li><MUIIcon.SchoolRounded/> For continuing collage students: at least No Grade Below 2.5 (85%) with a GWA of 2.01</li>
                        <li><MUIIcon.MailRounded/> Application letter is addressed to the Scholarship Coordinator, Mr. Jaime M. Fuentes</li> <br/>
                            <li>For the full details on how to avail any of the scholarships offered by the School, visit the Students Grants Office (SGO) located at 7th Floor Campus, Davao City.</li>

                    </ul>
                </section>

                <footer className="footer">
                    <p>
                        Location: 7th Floor, Beside Science Lab, St. John Paul II College of Davao, Ecoland Drive, Davao City, Philippines
                    </p>
                    <p>
                        Contact or Email: <a href="mailto:scholarship@sjp2cd.edu.ph">scholarship@sjp2cd.edu.ph & call at 297-8755</a>
                    </p>
                    <p>
                        <a href="https://www.facebook.com/sjp2cdsgo" target="_blank">Facebook Page</a>
                    </p>
                </footer>
            </div>
        </div>
    </>);
}

export default ViewScholarship;