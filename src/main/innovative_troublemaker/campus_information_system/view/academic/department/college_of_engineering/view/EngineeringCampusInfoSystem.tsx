import * as React  from "react";
import HeroSection from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/component/HeroSection";
import SubjectCarousel from "@innovative_troublemaker/campus_information_system/component/subject/SubjectCarousel";
import CurriculumDownload from "@innovative_troublemaker/campus_information_system/component/subject/CurriculumDownload";
import PageLayout from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/layout/PageLayout";

import subjects from "@innovative_troublemaker/campus_information_system/resource/academic/college_of_engineering/subject/subjects.json";

import curriculums from "@innovative_troublemaker/campus_information_system/resource/academic/college_of_engineering/subject/curriculum.json";

class ComputerEngineeringCampusInfoSystem extends React.Component<{},{}> {
  public render(): React.ReactElement {
    return (
      <PageLayout>
        <HeroSection />
       {/*REM: Computer Engineering Section */}
       <div id={`computer-engineering-section`} className="py-10 bg-orange-500/30">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-rose-50 mb-6">Computer Engineering</h2>
            <p className="text-lg mb-8">
              Learn computing fundamentals and advanced topics in Computer Engineering.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Subjects</h3>
            <SubjectCarousel subjectCards={subjects.computerEngineering} />
            <CurriculumDownload curriculumProps={curriculums.computerEngineering } />
          </div>
        </div>

        {/*REM: Geodetic Engineering Section */}
        <div id={`geodetic-engineering-section`} className="py-10 bg-black/40">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-rose-50 mb-6">Geodetic Engineering</h2>
            <p className="text-lg mb-8">
              Discover the science and techniques behind geodetic measurements and mapping.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Subjects</h3>
            <SubjectCarousel subjectCards={ subjects.geodeticEngineering } />
            <CurriculumDownload curriculumProps={ curriculums.geodeticEngineering } />
          </div>
        </div>
 
      </PageLayout>
    );
  }
}

export default ComputerEngineeringCampusInfoSystem;
