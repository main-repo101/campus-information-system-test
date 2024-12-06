
import * as React from "react";
import * as MUI from "@mui/material";
import CardList from "@innovative_troublemaker/campus_information_system/component/card/CardList";
import { CardData } from "@innovative_troublemaker/campus_information_system/model/card/CardProps";
import Hero from "@innovative_troublemaker/campus_information_system/component/hero/Hero";
import Contact from "@innovative_troublemaker/campus_information_system/component/contact/Contact";
import { FacebookRounded, Twitter, LinkedIn } from "@mui/icons-material";
import Footer from "@innovative_troublemaker/campus_information_system/component/footer/Footer";
import LandingPage from "@innovative_troublemaker/campus_information_system/component/landing/LandingPage";

import landingPageData from "@innovative_troublemaker/campus_information_system/resource/administrative/registrar/landing-page-data.json";
import footerData from "@innovative_troublemaker/campus_information_system/resource/administrative/registrar/footer-data.json";
import cardData from "@innovative_troublemaker/campus_information_system/resource/administrative/registrar/card-data.json";

import LearnMore from "@innovative_troublemaker/campus_information_system/component/learn_more/LearnMore";

const cardMetadata: CardData[] = cardData;

interface RegistrarProps {
    showTheCard: boolean
}

const ViewRegistrar: React.FC<RegistrarProps> = ({showTheCard=false}) => {

    const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
        console.log('Form Data Submitted:', data);
    };

    const handleLearnMoreClick = () => {
        alert("Learn more clicked!");
    };

    return (<>
        <div id="registrar" className={`flex flex-col place-items-center w-full `}>
            <Hero
                title="Office of the Registrar"
                subtitle="Discover the best services we have to offer."
                backgroundImageUrl="/resources/administrative/registrar/img/logo-000.jpg"
                overlayOpacity="bg-opacity-50"
                actions={
                    <>
                        <a href={"#landing-page"}>
                            <button className="text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600">
                                Get Started
                            </button>
                        </a>
                        <a href={"#learn-more"}>
                            <button className="text-white border border-white px-6 py-2 rounded-md hover:bg-gray-100 hover:text-black">
                                Learn More
                            </button>
                        </a>
                    </>
                }
                className="custom-hero-class w-full"
            />
            <div id={`learn-more`} className={`flex flex-col place-items-center`}>
                <LearnMore
                    title="About Us"
                    description="The registrar provides students with access to their academic records, enrollment and degree verification, academic calendars, and exam schedules along with other important student data."
                    buttonText="Inquire!"
                    buttonHref="#learn-more"
                    onButtonClick={handleLearnMoreClick}
                    // imageSrc="https://via.placeholder.com/300"
                    imageSrc="/resources/administrative/registrar/img/org-chart-registrar.png"
                />
            </div>
            {showTheCard&&<div className={`pb-[5rem] pt-[5rem]`}>
                <CardList cards={cardMetadata} />
            </div>}
            <LandingPage
                id={'landing-page'}
                isHeroShow={false}
                hero={landingPageData.hero}
                testimonials={landingPageData.testimonials}

                footerLinks={footerData.footerLinks}
                companyInfo={footerData.companyInfo}
                socialLinks={footerData.socialLinks}
            >
                <div className="content gap-[5rem] flex flex-col bg-transparent">
                    <div className={`flex flex-col w-full place-items-center p-[2rem]`}>
                        <Contact
                            title="Get in Touch"
                            subtitle="We'd love to hear from you! Fill out the form below or reach out to us on social media."
                            onSubmit={handleFormSubmit}
                            socialLinks={[
                                { icon: <FacebookRounded />, url: 'https://www.facebook.com/sjp2cdregistrarsoffice' },
                                { icon: <Twitter />, url: 'https://twitter.com' },
                                { icon: <LinkedIn />, url: 'https://linkedin.com' },
                            ]}
                            className="max-w-lg"
                        />
                    </div>
                </div>
            </LandingPage>
        </div>
    </>)
}

export default ViewRegistrar;

