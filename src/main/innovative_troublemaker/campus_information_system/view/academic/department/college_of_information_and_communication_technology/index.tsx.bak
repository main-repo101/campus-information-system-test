import React from "react";
import "./college-of-ict.view.style.css";

const ViewCollegeOfICT: React.FC = () => {
    return (
        <>
            {<div className={`w-full`}>
                <header className="site-header">
                    <img src="/resources/academic/department/college_of_ict/img/Capture2.PNG" alt="Header Image" className="header-image" />
                </header>
                <main id="col-ict">
                    <section className="about-college" id="about-college">
                        <h3>About the College</h3>
                        <p>
                            The College of Information and Communications Technology (ICT) at St. John Paul II College of
                            Davao focuses on developing knowledge and skills in information technology, computer science,
                            and related fields. Our programs prepare students for diverse opportunities in the tech
                            industry, with a strong emphasis on practical experience and innovation.
                        </p>
                    </section>
                    <section className="teacher-section" id="faculty-section">
                        <div className="pnl-img-faculty flex flex-col justify-center content-center">
                            <h3>Meet Our Faculty</h3>
                            <img id="img-faculty" src="/resources/academic/department/college_of_ict/img/it.jpg" alt="Group Faculty Photo"/>
                        </div>
                        <div className="teacher-list">
                            {[
                                { name: "Mr. Normiyah Taming", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic1.jpg" },
                                { name: "Mr. Gilbert Carnice", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic2.jpg" },
                                { name: "Patrick Eleria", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic3.jpg" },
                                { name: "Stephen Kim Kenneth Espinosa", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic4.jpg" },
                                { name: "Jomar John Asilo", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic5.jpg" },
                                { name: "Arvin Jim Demafelis", role: "Full Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic6.jpg" },
                                { name: "Gladys Joven", role: "Part Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic7.jpg" },
                                { name: "Marisa Ocoy", role: "Part Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic8.jpg" },
                                { name: "Jose Rhyz Ismael", role: "Part Time Instructor", image: "/resources/academic/department/college_of_ict/img/teachers_pic/pic9.jpg" },
                            ].map((teacher, index) => (
                                <div key={index} className="teacher-info">
                                    <img src={teacher.image} alt={teacher.name} />
                                    <h4>{teacher.name}</h4>
                                    <p>{teacher.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="teacher-info center-teacher">
                            <img src="/resources/academic/department/college_of_ict/img/teachers_pic/pic10.jpg" alt="Ms. Olivia Brown" />
                            <h4>Karen Shane Adorico-Priete</h4>
                            <p>Elites Moderator/Program Head</p>
                        </div>
                    </section>
                </main>
                <footer className="site-footer">
                    <p>© 2024 St. John Paul II College of Davao. All rights reserved.</p>
                    <img src="/resources/academic/department/college_of_ict/img/blue2.jpg" alt="Footer Image" className="footer-image" />
                </footer>
            </div>}
        </>
    );
};

export default ViewCollegeOfICT;
