import * as exp from "constants";

const mockData = [
    { CreatedOn: '2022-01-01', Payer: 'John Snow', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2023-01-02', Payer: 'Ned Stark', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Rob Stark', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2023-01-02', Payer: 'Aemond Targaryen', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Aegon Targaryen', Status: 'Lead', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2023-01-02', Payer: 'Arya Stark', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Tyrion Lannister', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2021-01-02', Payer: 'Alicent Hightower', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Mad King', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2022-01-02', Payer: 'Little Finger', Status: 'Lead', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Daenerys Targaryen', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2024-01-02', Payer: 'Sansa Stark', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'Robert Baratheon', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2022-01-02', Payer: 'Deamond Targaryen', Status: 'Lead', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'John Doe', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2023-01-02', Payer: 'Jane Smith', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'John Doe', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2022-01-02', Payer: 'Jane Smith', Status: 'Lead', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
    { CreatedOn: '2024-01-01', Payer: 'John Doe', Status: 'Active', Email: 'john@example.com', PayerPhone: '1234567890', Services: 'Service 1', Scheduled: '2024-01-02' },
    { CreatedOn: '2024-01-02', Payer: 'Jane Smith', Status: 'Inactive', Email: 'jane@example.com', PayerPhone: '0987654321', Services: 'Service 2', Scheduled: '2024-01-03' },
];

export default mockData;