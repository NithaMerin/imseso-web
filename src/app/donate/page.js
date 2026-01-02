"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import FooterTab from '../components/FooterTab';

const Donate = () => {
  const [copied, setCopied] = useState({});

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

  const AccountCard = ({ bankName, details, pdfLink }) => (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden hover:bg-white/5 transition duration-300">
      <div className="bg-sky-600/20 p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-xl font-bold font-oswald text-sky-400">{bankName}</h3>
        {pdfLink && (
          <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-600 hover:bg-blue-500 dark:bg-sky-600 dark:hover:bg-sky-500 text-white px-3 py-1 rounded transition">
            View PDF
          </a>
        )}
      </div>
      <div className="p-6 space-y-4">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 pb-3 border-b border-gray-200 dark:border-white/5 last:border-0 last:pb-0">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{detail.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 font-medium text-right break-all">{detail.value}</span>
              <button
                onClick={() => handleCopy(detail.key, detail.value)}
                className={`p-1.5 rounded transition-colors ${copied[detail.key] ? 'bg-green-500/20 text-green-600 dark:text-green-400' : 'bg-slate-200 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-sky-600 text-slate-500 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'}`}
                title="Copy to clipboard"
              >
                {copied[detail.key] ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='bg-slate-900 min-h-screen text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4 animate-fade-up">
            Donate Now
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Your contribution can transform the lives of children and communities in Sri Lanka.
          </p>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mb-24">

        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold font-oswald text-white mb-6">
            Join our journey to give children a sustainable future
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl border border-white/10 text-left">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Inclusive Youth Empowerment</h3>
              <p className="text-sm text-slate-400">
                Building resilience by promoting entrepreneurship, skills, mentorship, and credit facilities.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/10 text-left">
              <h3 className="text-lg font-bold text-sky-400 mb-2">Water and Sanitation</h3>
              <p className="text-sm text-slate-400">
                Ensuring access to clean water and sanitation facilities for children and their communities.
              </p>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-12">
          {/* GoFundMe Section */}
          <div className="glass-card p-8 rounded-2xl border border-sky-500/30 text-center relative overflow-hidden bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-transparent mb-12">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-24 h-24 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-oswald text-white mb-4">Support Our Cyclone Relief Effort</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto italic">
              "Help Sri Lankans to survive and rebuild after Cyclone Ditwah"
            </p>
            <a
              href="https://www.gofundme.com/f/help-sri-lankans-to-survive-and-rebuild-after-cyclone-ditwah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20 group"
            >
              Donate via GoFundMe
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Direct Bank Transfer</h3>
            <p className="text-slate-400 text-sm">Use the copy details button for easy transfer.</p>
          </div>

          {/* Account Cards are rendered here - handled by helper component updates */}

          <AccountCard
            bankName="Hatton National Bank"
            pdfLink="bankacc2.pdf"
            details={[
              { label: "Bank Name", value: "Hatton National Bank PLC, Nananttan", key: "bankNameHatton" },
              { label: "Account Name", value: "INCLUSIVE MANAGEMENT AND SOCIAL EMPOWERING SECURITY ORGANISATION(IMSESO)", key: "accNameHatton" },
              { label: "Account Number", value: "172020101112", key: "accNoHatton" },
              { label: "SWIFT / BIC", value: "HBLILKLXXXX", key: "swiftHatton" },
              { label: "Bank Address", value: "Uyilankulam Road, Nanattan", key: "bankAddrHatton" },
              { label: "Postal Code", value: "41000", key: "postalCodeHatton" },
            ]}
          />

          <AccountCard
            bankName="People's Bank"
            pdfLink="bankacc.pdf"
            details={[
              { label: "Bank Name", value: "People's Bank, Murunkan", key: "bankNamePeoples" },
              { label: "Account Name", value: "INCLUSIVE MANAGEMENT AND SOCIAL EMPOWERING SECURITY ORGANISATION", key: "accNamePeoples" },
              { label: "Account Number", value: "166100100025532", key: "accNoPeoples" },
              { label: "SWIFT / BIC", value: "PSBKLKLX", key: "swiftPeoples" },
            ]}
          />

          <div className="mt-8 p-4 bg-sky-900/20 border border-sky-500/20 rounded-lg text-center">
            <p className="text-sky-300 text-sm">
              After making the transfer, please email the transaction receipt to <strong className="text-white">imseso2013@gmail.com</strong> with donor name and contact details so we can acknowledge your gift.
            </p>
          </div>
        </div>
      </div>

      <FooterTab />
    </div>
  );
};
export default Donate;
