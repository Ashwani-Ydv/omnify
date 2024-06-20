import React, { useState } from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<string>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const handleColumnChange = (column: string) => {
    setVisibleColumns(prev => prev.includes(column) ? prev.filter(c => c !== column) : [...prev, column]);
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-2">
        <button onClick={() => handleColumnChange('payer')} className="mr-2">Toggle Payer</button>
        {/* Add more column toggle buttons as needed */}
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {visibleColumns.map((col) => (
              <th key={col} className="py-2 px-4 border-b">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {visibleColumns.map((col) => (
                <td key={col} className="py-2 px-4 border-b">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
