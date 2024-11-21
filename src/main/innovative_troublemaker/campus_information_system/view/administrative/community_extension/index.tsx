import React from 'react';

// import * as MUI from '@mui/material';

// import "@innovative_troublemaker/campus_information_system/resource/administrative/community_extension/css/style.css";


import "./community_ext_style.css";


const CommunityExtensionServices: React.FC = () => {
    return (
        <>
        <div className={`com-ext-container`} >
            <header id={`com-ext-header`}>
                <div className="header-background"></div>
                <h1 className={`com-ext-h1`}>Community Extension Services at St. John Paul College of Davao</h1>
            </header>

            <div className="com-ext-main">
                <h2 className={`com-ext-h2`}>Community Extension Services</h2>
                <p className={`com-ext-p`}>
                    St. John Paul College of Davao actively engages in community extension services aimed at enhancing the
                    well-being of local communities while providing students with invaluable hands-on experiences. These
                    initiatives encompass a wide range of programs, including educational workshops, health services,
                    environmental conservation projects, and support for underprivileged families. By encouraging students to
                    apply their knowledge in real-world settings, the college fosters a culture of active learning and civic
                    responsibility.
                </p>

                <h2 className={`com-ext-h2`}>Leadership and Vision</h2>
                <p className={`com-ext-p`}>
                    Under the dedicated leadership of Dean Marivic Maquilan, the Community Extension Department strives to create
                    meaningful partnerships that benefit both students and the community. Her commitment to service and
                    development drives innovative programs that promote student engagement and social responsibility. The
                    department aims to serve as a bridge between the college and the community, ensuring that both entities
                    grow and thrive together.
                </p>

                <h2 className={`com-ext-h2`}>Vision</h2>
                <div className="vision">
                    <p className={`com-ext-p`}>
                        To create a sustainable and empowered community where students and local residents collaborate to foster
                        social development, inclusivity, and holistic growth. The vision emphasizes the importance of mutual
                        respect and collaboration in addressing community challenges.
                    </p>
                </div>

                <h2 className={`com-ext-h2`}>Mission</h2>
                <div className="mission">
                    <p className={`com-ext-p`}>
                        The mission of the college is to provide meaningful community extension services that promote education,
                        health, and environmental stewardship. The college seeks to instill in students a lifelong commitment to
                        service, encouraging them to become proactive leaders who address societal needs with compassion and
                        integrity. Through these initiatives, St. John Paul College aims to strengthen community ties and
                        cultivate a spirit of volunteerism among students.
                    </p>
                </div>

                <h2 className={`com-ext-h2`}>Key Programs and Initiatives</h2>
                <ul  id={`com-ext-ul`}>
                    <li  className={`com-ext-li`}>
                        <strong>Educational Workshops:</strong> <span>Tailored programs aimed at enhancing literacy and life skills among local residents, promoting lifelong learning.</span>
                    </li>
                    <li  className={`com-ext-li`}>
                        <strong>Health Services:</strong> <span>Initiatives that provide free medical check-ups, health awareness campaigns, and wellness programs, ensuring the community has access to essential health information and services.</span>
                    </li>
                    <li  className={`com-ext-li`}>
                        <strong>Environmental Projects:</strong> <span>Programs focused on conservation, waste management, and sustainability efforts to ensure the local environment remains pristine and safe for future generations.</span>
                    </li>
                    <li  className={`com-ext-li`}>
                        <strong>Support for Underprivileged Families:</strong> <span>Supports underprivileged families by offering affordable tuition and providing essential resources like food and school supplies. These efforts ensure that all students, regardless of financial background, have access to quality education and opportunities for a brighter future.</span>
                    </li>
                </ul>

                <div className="image-box-container">
                    <div className="image-box">
                        <img src="/resources/administrative/community_extension/img/community1.jpg" alt="Community Service" />
                    </div>
                    <div className="image-box">
                        <img src="/resources/administrative/community_extension/img/community2.jpg" alt="Health Services" />
                    </div>
                    <div className="image-box">
                        <img src="/resources/administrative/community_extension/img/community3.jpg" alt="Environmental Projects" />
                    </div>
                </div>

                <h2 className={`com-ext-h2`}>Community Impact</h2>
                <div className="impact-container">
                    <p className={`com-ext-p`}>
                        The programs run by the Community Extension Services have made a significant impact on the lives of the people
                        in the community. Students have not only gained practical experience but have also contributed positively to
                        addressing key societal issues. Through these initiatives, the college has fostered a spirit of volunteerism
                        and compassion among its students, ensuring that they grow into responsible citizens who care deeply about
                        their communities.
                    </p>
                </div>
            </div>

            <footer id={`com-ext-footer`} className={`relative`}>
                <div className="footer-content">
                    <p className={`com-ext-p`}>Address: Ecoland Dr, Matina, Davao City, 8000 Davao del Sur</p>
                    <p className={`com-ext-p`}>Contact: (082) 297 8755</p>
                    <p className={`com-ext-p`}>
                        <a className={`com-ext-a`}href="#">Terms and Conditions</a> | <a className={`com-ext-a`}href="#">Privacy Policy</a> | <a className={`com-ext-a`}href="#">FAQs</a>
                    </p>
                </div>
                <div className="footer-bottom">
                    <p className={`com-ext-p`}>© 2024 St. John Paul College of Davao. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
        </>
    );
};

export default CommunityExtensionServices;