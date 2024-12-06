import * as React from "react";
import { LearnMoreProps } from "@innovative_troublemaker/campus_information_system/model/learn_more/LearnMoreProps";

const LearnMore: React.FC<LearnMoreProps> = ({
    title,
    description,
    buttonText,
    buttonHref,
    onButtonClick,
    imageSrc,
    className = "",
  }) => {
    return (
      <div
        className={`flex flex-col md:flex-row items-center gap-8 p-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
      >
        {/* Image Section */}
        {imageSrc && (
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img
              src={imageSrc}
              alt={`${title} visual`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
  
        {/* Content Section */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
  
          <a
            href={buttonHref}
            onClick={onButtonClick}
            className="inline-block text-white bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  };
  
  export default LearnMore;