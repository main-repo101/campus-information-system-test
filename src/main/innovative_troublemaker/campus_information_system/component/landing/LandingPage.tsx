import React from 'react';
import { LandingPageProps } from "@innovative_troublemaker/campus_information_system/model/landing/LandingPageProps";
import Footer from "@innovative_troublemaker/campus_information_system/component/footer/Footer";
import { FooterProps } from '@innovative_troublemaker/campus_information_system/model/footer/FooterProps';

const LandingPage: React.FC<LandingPageProps&FooterProps> = ({ id="pnl-landing-page", isHeroShow=true, hero, features, testimonials, children, companyInfo, socialLinks, footerLinks }) => {
    return (
        <div id={id} className="font-sans bg-gray-100/80 text-gray-900">
            {/*REM: Hero Section */}
            { isHeroShow && <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{hero.title}</h1>
                    <p className="mt-4 text-lg md:text-xl">{hero.subtitle}</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href={hero.cta1Url} className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-200">
                            {hero.cta1}
                        </a>
                        <a href={hero.cta2Url} className="text-white border-2 border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-900">
                            {hero.cta2}
                        </a>
                    </div>
                </div>
            </section>}
            {/*REM: Features Section */}
            {features&&<section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex justify-center mb-4">
                                    <i className={`fas fa-${feature.icon} text-4xl text-blue-500`}></i>
                                </div>
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="mt-4 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>}

            {/*REM: Testimonials Section */}
            <section className="bg-gray-300 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">What Our Cherished Fruits Reveal</h2>
                    <div className="flex flex-col items-center space-y-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                                <p className="italic text-gray-600">"{testimonial.feedback}"</p>
                                <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {children && children}
            <div>
                <Footer
                    companyInfo={companyInfo}
                    socialLinks={socialLinks}
                    footerLinks={footerLinks}
                />
            </div>
        </div>
    );
};

export default LandingPage;