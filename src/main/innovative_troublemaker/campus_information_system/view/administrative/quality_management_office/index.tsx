
import * as React from "react";
import * as MUI from "@mui/material";
import "./qmo.views.styles.css";

const ViewQualityManagementOffice: React.FC = () => {
    return (<>
        <div id={`administrative-qmo`}>
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#academic">Academic</a></li>
                    <li><a href="student services">Student Services</a></li>
                    <li><a href="#offices">Offices</a></li>
                    <li style={{ float: "right" }}><a className="active" href="#about" style={{ color: "blue" }}>About</a></li>
                </ul>
            </nav>
            <header>
                <div className="header-background"></div>
                <h1> at St. John Paul College of Davao</h1>
                <div className="scroll-container flex flex-col place-items-center">
                    <img src="/resources/administrative/qmo/img/QMO.png" alt="QMO" />
                    <img src="/resources/administrative/qmo/img/2.png" alt="" />

                </div>
            </header>

            <div className="flex-container">
                <div className="left-container">
                    <div className="image-box">
                        <img src="https://placehold.co/150x170/gray/white/png" alt="Environmental Projects" />

                    </div>
                    <h2 style={{ borderBottom: "none", marginBottom: 0, lineHeight: 1.2, textAlign: "center" }}>QUALITY MANAGEMENT OFFICE(QMO) OFFICERS</h2>
                    <p>The Quality Management Office (QMO) officer plays a pivotal role in maintaining and enhancing
                        the academic excellence of St. John Paul II College of Davao. With unwavering dedication,
                        the officer ensures that all educational programs, administrative processes, and student
                        services are continuously evaluated and improved to meet the highest standards.</p>

                    <h2>Why the QMO Matters?</h2>
                    <p>
                        <h3>Academic Excellence:</h3> We work diligently to monitor and improve teaching and learning practices, ensuring students receive the highest quality education. <br />
                        <h3>Continuous Improvement:</h3> We believe in ongoing evaluation and enhancement of our processes to stay ahead in a rapidly evolving educational landscape. <br />
                        <h3>Accreditation and Compliance:</h3> The QMO ensures that St. John Paul II College of Davao consistently meets the criteria required by accreditation agencies, enhancing the credibility and reputation of our programs. <br />
                        <h3>Student-Centered Approach:</h3> At the heart of our mission is the student experience. By improving educational standards and support services, we strive to help every student reach their full potential.
                    </p>
                </div>
                <div className="right-container">
                    <div className="qmo" >
                        <h2 style={{borderBottom: "none", marginBottom: 0, lineHeight: 1.2, textAlign: "center"}} >QUALITY MANAGEMENT OFFICE(QMO)</h2>
                        <h3 style={{marginTop: 0, lineHeight: 1.2, textAlign: "center",}}>ST. JOHN PAUL II COLLEGE OF DAVAO</h3>
                        <p style={{textAlign: "center"}}>
                            Welcome to the Quality Management Office (QMO) of St. John Paul II College of Davao,
                            where we ensure the highest standards of academic excellence and institutional services
                            for the betterment of our students, faculty, and community.
                        </p><hr/>

                            <div className="container">
                                <h2>About the QMO</h2>
                                <p>At St. John Paul II College of Davao, the Quality Management Office is dedicated to fostering a culture of continuous
                                    improvement across all facets of our institution. The QMO ensures that our academic programs, administrative processes,
                                    and student services meet and exceed the standards of quality set by both national and international accrediting bodies
                                </p>

                                <h2>Our Mission </h2>

                                <p>The mission of the Quality Management Office is to promote excellence in education by ensuring the implementation of
                                    quality standards across the institution. Through systematic evaluation, process improvement, and stakeholder engagement,
                                    the QMO seeks to enhance the overall experience of our students and faculty, while maintaining compliance with regulatory
                                    and accreditation bodies</p>


                                <h2>Mission</h2>

                                <p>The mission of the college is to provide meaningful community extension services that promote education,
                                    health, and environmental stewardship. The college seeks to instill in students a lifelong commitment to
                                    service, encouraging them to become proactive leaders who address societal needs with compassion and
                                    integrity. Through these initiatives, St. John Paul College aims to strengthen community ties and
                                    cultivate a spirit of volunteerism among students.</p>



                                <div className="image-box-container">
                                    <div className="image-box">
                                        <img src="https://placehold.co/150x170/gray/white/png" alt="Community Service" />
                                    </div>
                                    <div className="image-box">
                                        <img src="https://placehold.co/150x170/gray/white/png" alt="Health Services" />
                                    </div>
                                </div>
                                <h2>Community Impact</h2>
                                <p>The Quality Management Office (QMO) at St. John Paul II College of Davao plays a vital role in enhancing educational standards,
                                    student services, and community involvement. By ensuring that academic programs meet rigorous accreditation standards,
                                    the QMO fosters a culture of excellence, continuous improvement, and student engagement. Its efforts in improving
                                    administrative processes, promoting volunteerism, and encouraging environmental sustainability contribute to the
                                    development of responsible, well-rounded students. Additionally, the QMO's collaborations with external stakeholders
                                    help strengthen community ties, making a lasting impact on both the institution and the surrounding community
                                    by fostering a spirit of social responsibility and academic integrity.</p>
                            </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-content">
                    <p>Address: Ecoland Dr, Matina, Davao City, 8000 Davao del Sur</p>
                    <p>Contact: (082) 297 8755</p>
                    <p><a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">FAQs</a> | <a href="#">Contact Us</a></p>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 St. John Paul College of Davao. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    </>)
}

export default ViewQualityManagementOffice;

