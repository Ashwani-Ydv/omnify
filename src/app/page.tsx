"use client";

import React, { useState } from 'react';
import SummaryBox from '../components/SummaryBox';
import FilterModal from '../components/FilterModal';
import Table from '../components/Table';
import SidePanel from '../components/SidePanel';

const mockData = [
  { CreatedOn: '2024-01-01', Payer: 'John Doe', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
  { CreatedOn: '2024-01-02', Payer: 'Jane Smith', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
  // Add more mock data here
];

const HomePage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [columns] = useState(['CreatedOn', 'Payer', 'Status', 'Email', 'PayerPhone', 'Services', 'Scheduled']);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const filteredData = mockData.filter((item: { [key: string]: string }) => {
    return Object.keys(filters).every(key => item[key].includes(filters[key]));
  });

  return (
    <div className="flex">
      <SidePanel />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SummaryBox title="Total Leads" value={100} />
          <SummaryBox title="Active Leads" value={80} />
          <SummaryBox title="Inactive Leads" value={20} />
        </div>

        <button onClick={handleOpenModal} className="mb-4 p-2 bg-blue-500 text-white rounded">
          Open Filters
        </button>

        <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} filters={filters} setFilters={setFilters} />

        <Table data={filteredData} columns={columns} />
      </div>
    </div>
  );
};

export default HomePage;
