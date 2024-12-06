import * as React from "react";
import SubjectCardProps from "@innovative_troublemaker/campus_information_system/model/subject/SubjectCardProps";

export const SubjectCard: React.FC<SubjectCardProps> = (props: SubjectCardProps) =>  {
    return (<>
        <div className="p-4 bg-slate-50/80 shadow-md rounded-lg">
          <img src={props.image} alt={props.title} className="w-full h-40 object-cover rounded-md" />
          <h3 className="mt-4 text-xl font-bold text-blue-600">{props.title}</h3>
          <p className="mt-2 text-gray-800">{props.description}</p>
        </div>
    </>)
}

export default SubjectCard;