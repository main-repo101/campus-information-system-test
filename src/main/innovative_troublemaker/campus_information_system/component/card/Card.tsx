
import * as React from 'react';

import { CardProps } from "@innovative_troublemaker/campus_information_system/model/card/CardProps";

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={data.image} alt={data.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex space-x-2">
          {data.actions.map((action, index) => (
            <a
              key={index}
              href={action.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Card;
