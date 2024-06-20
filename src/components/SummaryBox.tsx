import React from 'react';

interface SummaryBoxProps {
  title: string;
  value: number;
}

const SummaryBox: React.FC<SummaryBoxProps> = ({ title, value }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default SummaryBox;
