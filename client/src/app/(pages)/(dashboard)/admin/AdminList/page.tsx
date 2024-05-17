"use client";

import React from "react";
import InfoTable from "@/components/layouts/InfoTable";

const userColumns = [
  { id: 'adminId', label: 'Admin ID' },
  { id: 'username', label: 'Username' },
  { id: 'firstName', label: 'First Name' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'email', label: 'Email' },
  { id: 'status', label: 'Status' }
];

const userData = [
  { id: 1, adminId: "AD001", username: "admin1", firstName: "John", mobile: "1234567890", email: "admin1@example.com", status: "Super Admin" },
  // Add more user data as needed
];

const AdminInfoPage = () => {
  return (
    <div>
      <h1>Admin List</h1>
      <InfoTable columns={userColumns} rows={userData} />
    </div>
  );
};

export default AdminInfoPage;