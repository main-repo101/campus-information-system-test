
import * as React from "react";

import { useState } from 'react';

const ViewChapel = (): React.ReactElement => {
    const [loading, setLoading] = useState(false);



    const openMap = () => {
        window.open('https://maps.app.goo.gl/5qh8ikVuP1KVB7dy7', '_blank');
    };

    return (
        <div className="container ">
            <h1 style={{ fontSize: '48px', textAlign: 'center' }}>
                St. John Paul II College of Davao
            </h1>
            <div className="row my-4">
                <div className="col-md-12 text-center">
                    <img
                        src="/resources/administrative/chapel/img/chapel-000c.jpg"
                        alt="Chapel"
                        className="img-fluid rounded shadow mx-auto d-block"
                        style={{ maxWidth: '60%' }} // Adjust size to scale for different devices
                    />
                </div>
                <div className="col-md-12 text-center"> {/* Text content now spans full width */}
                    <h2 style={{ fontSize: '25px' }} className="mt-4">Welcome</h2>
                    <p>A school's chapel may serve a variety of purposes, including:</p>
                    <p>A school chapel is a sacred space where students, teachers, and staff gather to worship, reflect, and find spiritual guidance.</p>
                    <p>The variety of chapels found in schools today is a testament to the diversity of beliefs and faiths within the community. From traditional Christian chapels to multi-faith centers, each one serves a unique purpose.</p>
                    <p>Some chapels provide a space for quiet contemplation and meditation, while others host lively worship services and spiritual discussions.</p>
                    <p>Regardless of their form, school chapels play a vital role in fostering a sense of community, promoting spiritual growth, and providing a safe haven for students to explore their faith.</p>

                    <h3 style={{ fontSize: '25px' }} className="mt-4">Spiritual Development</h3>
                    <div className="d-flex justify-content-center align-items-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                        <img
                            src="/resources/administrative/chapel/img/chapel-003a.png"
                            alt="Chapel"
                            style={{ maxWidth: '30%' }}

                        />
                        <img
                            src="/resources/administrative/chapel/img/chapel-001a.jpg"
                            alt="Chapel"
                            style={{ maxWidth: '30%', }}
                        />
                    </div>
                    <p>Regardless of a student's religious views, a chapel offers a space for introspection, contemplation, and meditation.</p>
                    <p>"Through regular meditation and self-reflection, she was able to cultivate a deeper sense of inner peace."</p>

                    <h3 style={{ fontSize: '25px' }} className="mt-4">Community Building</h3>
                    <div className="d-flex justify-content-center align-items-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                        <img
                            src="/resources/administrative/chapel/img/chapel-002a.jpg"
                            style={{ maxWidth: '20%' }}

                        />
                        
                        
                    </div>
                    <p>"The potluck dinners and volunteer events at the chapel helped to foster a sense of community among its members."</p>

                    <h3 style={{ fontSize: '25px' }} className="mt-4">Moral Guidance</h3>
                    <div className="row my-4">
                        <div className="col-md-12 text-center">
                            <img
                                src="/resources/administrative/chapel/img/chapel-004a.jpg"
                                alt="Chapel"
                                className="img-fluid rounded shadow mx-auto d-block"
                                style={{ maxWidth: '20%' }} // Adjust size to scale for different devices
                            />
                        </div>
                    </div>
                    <p>Chapels provide a forum for students to learn about morality, ethics, and values, fostering a strong sense of self and civic responsibility.</p>

                    <h1 style={{ fontSize: '25px' }} className="mt-4">Worship and Prayer</h1>
                    <div className="d-flex justify-content-center" style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                        <img
                            src="/resources/administrative/chapel/img/chapel-005a.jpg"
                            alt="Chapel"
                            style={{ maxWidth: '25%', margin: '10%px' }}
                        />
                        <img
                            src="/resources/administrative/chapel/img/chapel-006a.jpg"
                            alt="Chapel"
                            style={{ maxWidth: '25%', margin: '10%px' }}
                        />
                    </div>
                    <p>Chapels are invaluable spaces for students of faith to worship and pray.</p>


                    {/* Location Section */}
                    <div className="mt-4 text-center">
                        <h4>Location</h4>
                        <p>St. John Paul II College of Davao Chapel</p>
                        <p>Ecoland Dr, Matina, Davao City, 8000 Davao del Sur</p>

                        {/* Beautified "View on Map" button */}
                        <button
                            className="btn btn-view-map mt-2"
                            onClick={openMap}
                            style={{
                                backgroundColor: "#28a745",
                                color: "#fff",
                                padding: "12px 24px",
                                borderRadius: "30px",
                                fontSize: "16px",
                                border: "none",
                                cursor: "pointer",
                                transition: "transform 0.3s, background-color 0.3s",
                                display: "inline-block",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#218838";
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#28a745";
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            View on Map
                        </button>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-4 mt-4" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '20px',
                color: '#fff',
                padding: '18px 18px',
                marginTop: '40px',
                maxWidth: '100%',
                width: '100%',
            }}>
                <h4>Contact Us</h4>
                <p>Email: jpcean_campusministry@sjp2cd.edu.ph</p>
                <p>Phone: +63-9955400563</p>
                <p>Follow us on social media!</p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <a
                        href="https://www.facebook.com/SJPIICDCampusMinistry"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#1877f2',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '30px',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            fontSize: '16px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1558b0';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#1877f2';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        Facebook
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ViewChapel;