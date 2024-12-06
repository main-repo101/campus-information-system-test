
import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import "./college-of-ba.views.styles.css";

export default function ViewCollegeOfBusinessAdministration(): React.ReactElement {
    return (<>
        <div id={`col-ba`}>
            <header className="site-header">
                <img src="/resources/academic/department/college_of_ba/img/blue.jpg" alt="Header Image" className="header-image" />
            </header>

            <main>
                <section className="about-college" id="about-college">
                    <h3>About the College</h3>
                    <p>The College of Bussiness Administration (CBA) at St. John Paul II College of Davao is typically a department or faculty within a university that focuses on preparing students for careers in business, management, and related fields. CBAs are designed to provide students with theoretical knowledge and practical skills to succeed in the dynamic and competitive world of business.</p>
                </section>

                <section className="career-opportunities">
                    <h3 className={`text-white font-semibold`}>Career Opportunities in BSBA</h3>
                    <p className={`text-white font-semibold shadow-lg `}>CBA is an emerging field offering a variety of career paths to suit your skills and interests.</p>
                    <ul className="career-list">
                        <li>Operations Manager</li>
                        <li>Project Manager</li>
                        <li>Marketing Manager</li>
                        <li>Sales Manager</li>
                        <li>Financial Analyst</li>
                        <li>Accountant</li>
                        <li>Budget Analyst</li>
                        <li>Business Analyst</li>
                        <li>HR Manager</li>
                        <li>Entrepreneur</li>
                        <li>Supply Chain Manager</li>
                        <li>Bank Manager</li>

                    </ul>
                </section>

                <div className="Prospectus">
                    <h4> Prospectus </h4>
                    <img src="/resources/academic/department/college_of_ba/prospectus/pros.jpg" alt="Prospectus-CBA" />
                </div>

                <section className="w-[100%] teacher-section" id="faculty-section ">
                    <h3>Meet Our Faculty</h3>
                    <div className={`w-[100%] flex flex-col place-items-center `}>
                        <img src="/resources/academic/department/college_of_ba/img/balab.jpg" alt="Group Faculty Photo" />
                    </div>

                    <div className="teacher-info center-teacher">
                        <img src="/resources/academic/department/college_of_ba/img/jingle.png" alt="Jingle Marie Amago, LPT, MBA" />
                        <h4>Jingle Marie Amago, LPT, MBA</h4>
                        <p className="role">BASS Moderator/Program Head</p>
                    </div>

                    <div className="teacher-list">
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic0.jpg " alt="Kristelle Faith A. Lau" />
                            <h4>Kristelle Faith A. Lau, LPT, MBA, CMP</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic1.jpg" alt="Daneve S. Obero" />
                            <h4>Daneve S. Obero, MBA</h4>
                            <p className="role">JFINEX Moderator/Full Time Instructor </p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic2.jpeg" alt="Vibie C. Capio" />
                            <h4>Vibie C. Capio</h4>
                            <p className="role">SPAMES Moderator/Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic3.jpeg" alt="Honey Jean Osita" />
                            <h4>Honey Jean Osita </h4>
                            <p className="role">JEMS Moderator/Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic4.jpeg" alt="Krezia Hanna D. Elman" />
                            <h4>Krezia Hanna D. Elman, LPT</h4>
                            <p className="role">JPMAP Moderator/Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic5.jpeg" alt="Atty. Vicco G. Piodos" />
                            <h4>Atty. Vicco G. Piodos</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic6.png" alt="Jenmark John  F. Jacolbe" />
                            <h4>Jenmark John F. Jacolbe, CHRA</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic7.jpeg" alt="Linda Lim U. Dela Peña" />
                            <h4>Linda Lim U. Dela Peña</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic8.jpeg" alt="Manuel Bagcat" />
                            <h4>Manuel Bagcat, MBA</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ba/img/pic9.jpg" alt="Theresa Mariz Hadia" />
                            <h4>Theresa Mariz Hadia</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <img src="/resources/academic/department/college_of_ba/img/blue.jpg" alt="Footer Background" />
                <p>© 2024 St. John Paul II College of Davao - Business Administration Department</p>
            </footer>
        </div>
    </>);
}
