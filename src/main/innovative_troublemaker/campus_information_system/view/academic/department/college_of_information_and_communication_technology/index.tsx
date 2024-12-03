import React from "react";
import "./college-of-ict.view.style.css";

const ViewCollegeOfICT: React.FC = () => {
    return <>
        <div id="col-ict">
            <header className="site-header">
                <img src="/resources/academic/department/college_of_ict/img/Capture2.PNG" alt="Header Image" className="header-image" />
            </header>

            <main>
                <section className="about-college" id="about-college">
                    <h3>About the College</h3>
                    <p>The College of Information and Communications Technology (ICT) at St. John Paul II College of Davao focuses on developing knowledge and skills in information technology, computer science, and related fields. Our programs prepare students for diverse opportunities in the tech industry, with a strong emphasis on practical experience and innovation.</p>
                </section>

                <section className="career-opportunities">
                    <h3>Career Opportunities in ICT</h3>
                    <p>ICT is an emerging field offering a variety of career paths to suit your skills and interests.</p>
                    <ul className="career-list">
                        <li>Software Engineer</li>
                        <li>Network Administrator</li>
                        <li>Data Scientist</li>
                        <li>Cloud Solutions Architect</li>
                        <li>Mobile App Developer</li>
                        <li>IT Project Manager</li>
                        <li>Cybersecurity Specialist</li>
                        <li>Business Analyst</li>
                        <li>Technical Support Engineer</li>
                        <li>Digital Marketing Analyst</li>
                        <li>System Administrator</li>
                        <li>Game Developer</li>

                    </ul>
                </section>

                <section className="teacher-section" id="faculty-section">
                    <h3 className={`pt-[2rem]`}>Meet Our Faculty</h3>

                    <img id="groupie" className="" src="/resources/academic/department/college_of_ict/img/it.jpg" alt="Group Faculty Photo" />

                    <div className="teacher-info center-teacher">
                        <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic10.jpg" alt="Karen Shane Adorico-Priete" />
                        <h4>Karen Shane Adorico-Priete</h4>
                        <p className="role">Elites Moderator/Program Head</p>
                    </div>

                    <div className="teacher-list">
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic1.jpg" alt="Normiyah Taming" />
                            <h4>Mr. Normiyah Taming</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic2.jpg" alt="Gilbert Carnice" />
                            <h4>Ms. Gilbert Carnice</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic3.jpg" alt="Patrick Eleria" />
                            <h4>Patrick Eleria</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic4.jpg" alt="Stephen Kim Kenneth Espinosa" />
                            <h4>Stephen Kim Kenneth Espinosa</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic5.jpg" alt="Jomar John Asilo" />
                            <h4>Jomar John Asilo</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic6.jpg" alt="Arvin Jim Demafelis" />
                            <h4>Arvin Jim Demafelis</h4>
                            <p className="role">Full Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic7.jpg" alt="Gladys Joven" />
                            <h4>Gladys Joven</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic8.jpg" alt="Marisa Ocoy" />
                            <h4>Marisa Ocoy</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic9.jpg" alt="Jose Rhyz Ismael" />
                            <h4>Jose Rhyz Ismael</h4>
                            <p className="role">Part Time Instructor</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <img src="/resources/academic/department/college_of_ict/img/blue2.jpg" alt="Footer Background" />
                <p>© 2024 St. John Paul II College of Davao - ICT Department</p>
            </footer>
        </div>
    </>
}

export default ViewCollegeOfICT;