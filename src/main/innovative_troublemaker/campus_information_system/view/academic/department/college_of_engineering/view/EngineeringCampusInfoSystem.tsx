import * as React  from "react";
import HeroSection from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/component/HeroSection";
import SubjectCarousel from "@innovative_troublemaker/campus_information_system/component/subject/SubjectCarousel";
import CurriculumDownload from "@innovative_troublemaker/campus_information_system/component/subject/CurriculumDownload";
import PageLayout from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/layout/PageLayout";

import subjects from "@innovative_troublemaker/campus_information_system/resource/academic/college_of_engineering/subject/subjects.json";

import curriculums from "@innovative_troublemaker/campus_information_system/resource/academic/college_of_engineering/subject/curriculum.json";

import imgBgSurvey from "@innovative_troublemaker/campus_information_system/resource/academic/college_of_engineering/img/survey-001.jpg";

class ComputerEngineeringCampusInfoSystem extends React.Component<{},{}> {
  public render(): React.ReactElement {
    return (
      <PageLayout>
        <HeroSection />
       {/*REM: Computer Engineering Section */}
       <div id={`computer-engineering-section`} className="
       bg-comp-eng bg-no-repeat bg-cover bg-orange-500/30
       ">
          <div className="py-10 w-full bg-slate-50/2 backdrop-blur-sm text-slate-100">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Computer Engineering</h2>
            <p className="text-lg mb-8">
              Learn computing fundamentals and advanced topics in Computer Engineering.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Subjects</h3>
            <SubjectCarousel subjectCards={subjects.computerEngineering} />
            <CurriculumDownload curriculumProps={curriculums.computerEngineering } />
          </div>
        </div>

        {/*REM: Geodetic Engineering Section */}
        <div id={`geodetic-engineering-section`} className={`bg-[url('/resources/academic/college_of_engineering/img/survey-000.jpg')] bg-no-repeat bg-cover bg-center h-full`}>
          <div className="py-10 max-w-7xl mx-auto px-4 bg-black/30 inset-0  backdrop-blur-sm h-full">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Geodetic Engineering</h2>
            <p className="text-lg mb-8 text-slate-100 font-semibold">
              Discover the science and techniques behind geodetic measurements and mapping.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-white">Key Subjects</h3>
            <SubjectCarousel subjectCards={ subjects.geodeticEngineering } />
            <CurriculumDownload curriculumProps={ curriculums.geodeticEngineering } />
          </div>
        </div>
 
      </PageLayout>
    );
  }
}

export default ComputerEngineeringCampusInfoSystem;
