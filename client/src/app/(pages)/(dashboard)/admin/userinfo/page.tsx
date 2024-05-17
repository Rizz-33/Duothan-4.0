"use client";

import React from "react";
import InfoTable from "@/components/layouts/InfoTable";

const userColumns = [
  { id: 'dtpcode', label: 'DTP Code' },
  { id: 'username', label: 'Username' },
  { id: 'firstName', label: 'First Name' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'email', label: 'Email' },
  { id: 'status', label: 'Status' }
];

const userData = [
  { id: 1, dtpcode: "DTP001", username: "user1", firstName: "John", mobile: "1234567890", email: "user1@example.com", status: "Active" },
  // Add more user data as needed
];

const UserInfoPage = () => {
  return (
    <div>
      <h1>User Information</h1>
      <InfoTable columns={userColumns} rows={userData} />
    </div>
  );
};

export default UserInfoPage;