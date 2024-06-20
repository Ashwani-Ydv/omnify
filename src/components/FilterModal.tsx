import React from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  setFilters: (filters: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, filters, setFilters }) => {
  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <input name="payer" value={filters.payer || ''} onChange={handleChange} placeholder="Payer" className="mb-2 p-2 border rounded"/>
        <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
