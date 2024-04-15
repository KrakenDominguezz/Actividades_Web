import React from 'react';

interface ResumeProjectProps {
  title: string;
  stack: string;
  timeframe: string;
  description: string[];
}

const ResumeProject: React.FC<ResumeProjectProps> = ({ title, stack, timeframe, description }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold mr-2">{title}</h3>
        <span className="text-gray-600 text-sm">{timeframe}</span>
      </div>
      <p className="text-sm italic mb-2">{stack}</p>
      <ul className="list-disc list-inside">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeProject;
