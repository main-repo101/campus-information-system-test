import * as React from "react";
import CurriculumDownloadProps from "@innovative_troublemaker/campus_information_system/model/subject/CurriculumDownloadProps";
import CurriculumProps from "../../model/subject/CurriculumProps";

const CurriculumDownload: React.FC<CurriculumDownloadProps> = ( props: CurriculumDownloadProps ) => {
  return (
    <div className="bg-slate-50/80 py-6 mt-8">
      <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">Download Curriculum</h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
        {props.curriculumProps.map((curriculum, index) => (
          <a
            key={index}
            href={curriculum.link}
            download
            className="bg-white shadow-md rounded-lg p-4 text-blue-500 
            transition ease-out duration-500
            hover:bg-orange-500 hover:text-white hover:font-semibold"
          >
            <div className="flex items-center " >
              <span className="font-semibold text-lg">{curriculum.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CurriculumDownload;
