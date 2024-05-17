"use client";

import React from 'react'
import InfoTable from "@/components/layouts/InfoTable";

const paymentColumns = [
  { id: 'dtpcode', label: 'DTP Code' },
  { id: 'username', label: 'Username' },
  { id: 'value', label: 'Payment Value' },
  { id: 'type', label: 'Payment Type' },
];

const paymentData = [
  { id: 1, dtpcode: "DTP001", username: "user1", value: "500.00", type: "Cash" },
  // Add more payment data as needed
];

const PaymentInfoPage = () => {
  return (
    <div>
      <h1>Payment Information</h1>
      <InfoTable columns={paymentColumns} rows={paymentData} />
    </div>
  );
};

export default PaymentInfoPage;
