
import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";

import "./college-of-criminology.veiws.styles.css";

const ViewCollegeOfCriminology: React.FC = () => {
    return (<>
        <div id={`col-crim`}>
            <div className="chart">
                <header className="header">
                    <div className="logo-container">
                        <img src="/resources/academic/department/college_of_criminology/img/sjp.png" alt="School Logo" className="logo school-logo" />
                        <img src="/resources/academic/department/college_of_criminology/img/crim.png" alt="Criminology Logo" className="logo criminology-logo" />
                    </div>
                    <h1>St. John Paul II College of Davao</h1>
                    <h2>Criminology Teachers</h2>
                </header>
                <main className="tree">
                    <div className="node head">
                        <div className="person" data-thought="Crime is born from broken systems, not broken people.">
                            <img src="/resources/academic/department/college_of_criminology/img/artogue.jpg" className={`shadow-2xl shadow-white border-2 border-white`} alt="Liezel Artogue, MSCJ" />
                            <p>Liezel Artogue, MSCJ<br /><span className="title">RCRIM Program Head</span></p>
                        </div>
                    </div>
                    <div className="branch-container">
                        <div className="branch">
                            <div className="person" data-thought="Justice isn’t revenge; it’s reform.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Diana Faith Zafra"/>
                                    <p>Ms. Diana Faith Zafra<br/><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="True justice heals, it doesn’t punish.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Mr. Rodel B. Lobo"/>
                                    <p>Mr. Rodel B. Lobo<br/><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="Crime thrives where inequality reigns.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Leelen C. Villanueva"/>
                                    <p>Ms. Leelen C. Villanueva<br/><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="Change the environment, change the outcome.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Mr. Jeomar Cervantes"/>
                                    <p>Mr. Jeomar Cervantes<br/><span className="title">RCRIM</span></p>
                            </div>
                        </div>
                        <div className="branch">
                            <div className="person" data-thought="Punishment without progress is just a cycle.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Diana Rose Lovitos" />
                                <p>Ms. Diana Rose Lovitos<br /><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="To end crime, we must end the conditions that breed it.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Maria Fe Getalla" />
                                <p>Ms. Maria Fe Getalla <br /><span className="title">RCRIM, LPT</span></p>
                            </div>
                            <div className="person" data-thought="Crime is a symptom; inequality is the disease.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Mr. Mark Gallarde" />
                                <p>Mr. Mark Gallarde<br /><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="Address the roots of crime, not just the branches.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Cly Langomes" />
                                <p>Ms. Cly Langomes<br /><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="Reform is the path; retribution is the dead end.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Refugio" />
                                <p>Refugio<br /><span className="title">RCRIM</span></p>
                            </div>
                            <div className="person" data-thought="Justice is found where empathy meets action.">
                                <img src="/resources/academic/department/college_of_criminology/img/sample.jpg" alt="Ms. Janice" />
                                <p>Caparas<br /><span className="title">RCRIM</span></p>
                            </div>
                        </div>
                    </div>
                </main>
                <section className="prospectus-section">
                    <h3>Download Our Prospectus</h3>
                    <p>Explore detailed information about our programs and services by downloading our prospectus.</p>
                    <a href="/resources/academic/department/college_of_criminology/prospectus/prospectus.pdf" download className="download-button">Download Prospectus</a>
                </section>
                <footer className="footer">
                    <p>&copy; 2024 St. John Paul II College of Davao | All Rights Reserved</p>
                </footer>
            </div>
        </div>
    </>);
}

export default ViewCollegeOfCriminology;
