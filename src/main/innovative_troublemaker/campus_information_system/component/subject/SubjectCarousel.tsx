
import SubjectCardProps from "@innovative_troublemaker/campus_information_system/model/subject/SubjectCardProps";
import SubjectCard from "@innovative_troublemaker/campus_information_system/component/subject/SubjectCard";
import SubjectCarouselProps from "@innovative_troublemaker/campus_information_system/model/subject/SubjectCarouselProps";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SubjectCarousel: React.FC<SubjectCarouselProps> = (props: SubjectCarouselProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 700, settings: { slidesToShow: 1 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className={`w-full max-w-screen-lg mx-auto`}>
            <Slider {...settings}>
                {props.subjectCards.map((subject, index) => (
                    <div key={index} className={`px-4`}>
                        <SubjectCard {...subject} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default SubjectCarousel;