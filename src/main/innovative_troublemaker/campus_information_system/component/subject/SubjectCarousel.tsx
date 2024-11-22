
import SubjectCardProps from "@innovative_troublemaker/campus_information_system/model/subject/SubjectCardProps";
import SubjectCard from "@innovative_troublemaker/campus_information_system/component/subject/SubjectCard";
import SubjectCarouselProps from "@innovative_troublemaker/campus_information_system/model/subject/SubjectCarouselProps";
// import * as MUIIcon from '@mui/icons-material';



import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "/public/resources/component/subject/css/subject-carousel.css";

// import { WidthFull } from "@mui/icons-material";

export const SubjectCarousel: React.FC<SubjectCarouselProps> = (props: SubjectCarouselProps) => {
    const settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 800, settings: { slidesToShow: 1 } },
            { breakpoint: 1300, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className={`max-w-[270px] sm:max-w-lg mx-auto`}>
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