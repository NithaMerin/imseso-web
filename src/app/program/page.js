"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

const ProgramPage = () => {
  return (
    <>
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">About IMSESO</h1>
      <p className="text-lg text-gray-700">Information about the organization.</p>
    </div>
    <FooterTab />
    </>
  );
};

export default ProgramPage;