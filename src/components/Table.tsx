import React, { useState } from 'react';

interface TableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<string>;
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [visibleColumns, setVisibleColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [searchTerm, setSearchTerm] = useState('');

  const handleColumnChange = (column: string) => {
    setVisibleColumns((prev) =>
      prev.includes(column) ? prev.filter((c) => c !== column) : [...prev, column]
    );
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((row) =>
    visibleColumns.some((column) =>
      row[column].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="table-fixed">
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded w-full md:w-1/3 mb-4 md:mb-0"
        />
        <div className="flex flex-wrap justify-end">
          {columns.map((col) => (
            <label key={col} className="inline-flex items-center mr-2 mb-2">
              <input
                type="checkbox"
                checked={visibleColumns.includes(col)}
                onChange={() => handleColumnChange(col)}
                className="form-checkbox"
              />
              <span className="ml-2">{col}</span>
            </label>
          ))}
        </div>
      </div>
      <table className="min-w-full bg-white border-2 b rounded-lg">
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
          {paginatedData.map((row, index) => (
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
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
