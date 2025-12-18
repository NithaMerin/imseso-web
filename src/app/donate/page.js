"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import FooterTab from '../components/FooterTab';

const Donate = () => {
  const [copied, setCopied] = useState({
    bankName: false,
    accName: false,
    accNo: false,
    swift: false,
    bankName2: false,
    accName2: false,
    accNo2: false,
    swift2: false,
  });

  const handleCopy = async (key, text) => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopied((s) => ({ ...s, [key]: true }));
      setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* Bank Details Section */}
      <div className="bg-sky-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Bank Account Details for Donations</h3>
          <p className="text-center text-gray-600 mb-8">Please use the following bank details to make direct transfers. Click the copy button to copy the value.</p>

          <h4 className="text-xl font-semibold text-gray-800 mb-4">Hatton National Bank</h4>
          <table className="w-full bg-white rounded-lg shadow overflow-hidden mb-8">
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Bank Name</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>Hatton National Bank PLC, Nananttan</span>
                    <div className="flex items-center gap-3">
                      <a href="bankacc2.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-sky-700 underline">View PDF</a>
                      <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('bankName2', "Hatton National Bank")}>{copied.bankName2 ? 'Copied' : 'Copy'}</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Account Name</td>
                <td className="p-4 text-lg font-medium text-gray-800 uppercase">
                  <div className="flex items-center justify-between">
                    <span>INCLUSIVE MANAGEMENT AND SOCIAL EMPOWERING SECURITY ORGANISATION(IMSESO)</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('accName2', 'Your Account Name')}>{copied.accName2 ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Account Number</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>172020101112</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('accNo2', 'Your Account Number')}>{copied.accNo2 ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm text-gray-500 font-medium">SWIFT / BIC</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>HBLILKLXXXX</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('swift2', 'Your SWIFT Code')}>{copied.swift2 ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-xl font-semibold text-gray-800 mb-4">People's Bank</h4>
          <table className="w-full bg-white rounded-lg shadow overflow-hidden">
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Bank Name</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>People's Bank, Murunkan</span>
                    <div className="flex items-center gap-3">
                      <a href="bankacc.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-sky-700 underline">View PDF</a>
                      <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('bankName', "People's Bank, Murunkan")}>{copied.bankName ? 'Copied' : 'Copy'}</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Account Name</td>
                <td className="p-4 text-lg font-medium text-gray-800 uppercase">
                  <div className="flex items-center justify-between">
                    <span>INCLUSIVE MANAGEMENT AND SOCIAL EMPOWERING SECURITY ORGANISATION</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('accName', 'INCLUSIVE MANAGEMENT AND SOCIAL EMPOWERING SECURITY ORGANISATION')}>{copied.accName ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-sm text-gray-500 font-medium">Account Number</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>166100100025532</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('accNo', '166100100025532')}>{copied.accNo ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm text-gray-500 font-medium">SWIFT / BIC</td>
                <td className="p-4 text-lg font-medium text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>PSBKLKLX</span>
                    <button className="text-sm text-sky-700 cursor-pointer" onClick={() => handleCopy('swift', 'PSBKLKLX')}>{copied.swift ? 'Copied' : 'Copy'}</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-600 mt-6">After making the transfer, please email the transaction receipt to <strong>imseso2013@gmail.com</strong> with donor name and contact details so we can acknowledge your gift.</p>
        </div>
      </div>
      {/* Donation content */}
      <div className="relative z-10 bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join our journey to give children a sustainable future
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            There are several ways in which you can contribute to transform lives of our younger generation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusive Youth Empowerment & Entrepreneurship */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Inclusive Youth Empowerment & Entrepreneurship
              </h3>
              <p className="text-lg text-gray-600">
                Building disabled youth resilience and autonomy by promoting entrepreneurship activities, providing necessary skills, mentorship, and helping them secure credit facilities.
              </p>
            </div>

            {/* Water and Sanitation */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Water and Sanitation
              </h3>
              <p className="text-lg text-gray-600">
                Ensuring access to clean water and sanitation facilities for children and their communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterTab />
    </div>
  );
};

export default Donate;
