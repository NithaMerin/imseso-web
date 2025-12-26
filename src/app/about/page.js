"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

const AboutPage = () => {
  return (
    <div className='bg-blue-50 dark:bg-slate-900 min-h-screen text-slate-900 dark:text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Hero Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/imlogo.png')] opacity-5 bg-center bg-no-repeat bg-contain blur-sm animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-sky-400 dark:to-blue-600 mb-4 animate-fade-up">
            About IMSESO
          </h1>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Motto, Vision, Mission Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Motto */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-blue-600 dark:text-sky-400 mb-2">Our Motto</h2>
            <p className="text-slate-700 dark:text-white leading-relaxed font-light">
              Social Empowerment with Peaceful Environment
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-blue-600 dark:text-sky-400 mb-2">Our Vision</h2>
            <p className="text-slate-700 dark:text-white leading-relaxed font-light text-sm">
              Meaningful contribution to the sustainable education, socio-economic and environmental development of Sri Lanka by empowering Children, Youth, and Marginalized communities.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition duration-300 border border-white/10 shadow-xl shadow-sky-900/20 group">
            <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold font-oswald text-blue-600 dark:text-sky-400 mb-2">Our Mission</h2>
            <p className="text-slate-700 dark:text-white leading-relaxed font-light text-sm">
              Empowering Children, Youth, and Marginalized Communities through Education, Child Protection, Youth Empowerment, Mental Health, and Sustainability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8 glass-card p-6 rounded-2xl border border-white/10 text-center">
          <h2 className="text-xl font-bold font-oswald text-blue-600 dark:text-sky-400 mb-3">Core Values</h2>
          <p className="text-slate-700 dark:text-white italic">
            Equality, Responsibility, Respect, Compassion, Curiosity, Collaboration, Participation, Cultural Sensitivity, Transparency & Accountability, Non-discrimination, Therapeutic Relationship, and Ecological Concern.
          </p>
        </div>
      </div>

      {/* General Introduction */}
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img src="/icons/kids.jpg" alt="Children Program" className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-oswald text-xl">Empowering the Future</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald text-slate-900 dark:text-white mb-4 border-l-4 border-blue-500 dark:border-sky-500 pl-4">
              Who We Are
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-light text-justify">
              <p>
                IMSESO is a committed National level Non-governmental organization (NGO) founded on December 8th, 2013, by Mr. Constantine Santiago along with a group of volunteers. We are legally registered under the Voluntary Social Services Organizations Act No.31 of 1980.
              </p>
              <p>
                Our main objective is Child, Adolescents, and Youth Development in the remote villages and estates of Sri Lanka. We sustain healthy relationships with all Religions, Communities, Civil Societies, and Government bodies.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                {[
                  "Education & Skills Development", "Child Protection & Rights",
                  "Health & Mental Well-being", "Special Needs Empowerment",
                  "Non-Violent Communication", "Peace Building",
                  "Youth Empowerment", "Eco-Sustainability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-slate-800 dark:text-sky-200">
                    <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-sky-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates & Documents */}
      <div className="bg-blue-100/50 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="text-2xl font-bold font-oswald text-slate-900 dark:text-white mb-6">Registration Certificate</h3>
              <div className="glass-card p-4 rounded-xl border border-white/10 inline-block hover:scale-105 transition duration-300 cursor-pointer">
                <a href="/icons/certificateOfImseso.jpg" target="_blank" rel="noopener noreferrer">
                  <img src='/icons/certificateOfImseso.jpg' alt="Certificate" className="h-64 object-contain rounded" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-oswald text-slate-900 dark:text-white mb-6">Organizational Structure</h3>
              <div className="glass-card p-4 rounded-xl border border-white/10 inline-block hover:scale-105 transition duration-300 cursor-pointer">
                <img src='/icons/structure.jpg' alt="Structure" className="h-64 object-contain rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold font-oswald text-center text-slate-900 dark:text-white mb-16">Our Dedicated Team</h2>

        {/* Patrons */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest text-center mb-8 border-b border-gray-300 dark:border-white/10 pb-4 inline-block w-full">Patrons & Consultants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/about/pa4.png", name: "Dr. Charles Viva", title: "Senior Consultant Plastic Surgeon", sub: "Founder of Interplast UK" },
              { img: "/about/pa5.png", name: "Rev. Dr. Christlin P. Rajendram", title: "Former Rector", sub: "Eastern University of Sri Lanka" },
              { img: "/about/pa1.png", name: "Dr. Anna Garbacz", title: "Phd in Psychology", sub: "CNVC Certified Trainer" },
              { img: "/about/pa2.png", name: "Mrs. Ada Bienkowska", title: "CNVC Certified Trainer", sub: "Consultant for NVC" },
              { img: "/about/ramunusha.png", name: "Mrs. Ramanusha Poopalaratnam", title: "M.A in Sociology", sub: "Peace Building Consultant" },
              { img: "/about/lee.png", name: "Mrs. Summer Li", title: "MSc Early Childhood Education", sub: "Child Development Consultant" },
              { img: "/about/pa6.png", name: "Mr. Hans & Mrs. Erna", title: "NVC Certified Trainers", sub: "Child Development Consultants" },
              { img: "/about/pa3.png", name: "Rev. C. Eric Jeevaraj", title: "MBA (USA)", sub: "Advisor for Intl. Collaboration" },
            ].map((person, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition duration-300 group">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400 dark:border-sky-500/50 mb-4 group-hover:border-blue-500 dark:group-hover:border-sky-400 transition mb-4 shadow-lg">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white font-oswald">{person.name}</h4>
                <p className="text-blue-500 dark:text-sky-400 text-sm font-medium">{person.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{person.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest text-center mb-8 border-b border-gray-300 dark:border-white/10 pb-4 inline-block w-full">Chief Executive Committee</h3>
          <div className="flex flex-col items-center mb-10">
            <div className="glass-card p-8 rounded-2xl border border-blue-500/30 dark:border-sky-500/30 text-center relative overflow-hidden bg-gradient-to-b from-blue-100/50 via-transparent to-transparent dark:from-sky-900/20">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 dark:border-sky-500 mx-auto mb-4 shadow-2xl shadow-sky-500/20">
                <img src="/about/ab1.png" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-oswald">Mr. Constantine Santiago</h4>
              <p className="text-blue-600 dark:text-sky-300 font-medium">Founder, President & Executive Director</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/about/ab2.png", name: "Mr. S. Wilfred", role: "Secretary" },
              { img: "/about/ab3.png", name: "Mr. S. Asaippilai", role: "Vice President" },
              { img: "/about/ab4.png", name: "Mr. P. Nesaratnam", role: "Treasurer" },
              { img: "/about/ab5.png", name: "Mr. A.D. Jerald Almeda", role: "Member" },
              { img: "/about/ab6.png", name: "Mr. S. Francis", role: "Member" },
              { img: "/about/ab7.png", name: "Mr. M. Mariyaluthakaran", role: "Member" },
              { img: "/about/ab10.png", name: "Mrs. Christhuthas Ugetha", role: "Member" },
            ].map((member, i) => (
              <div key={i} className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20 mb-3">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base font-bold text-slate-800 dark:text-white">{member.name}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Administration */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest text-center mb-8 border-b border-gray-300 dark:border-white/10 pb-4 inline-block w-full">Administration Committee</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { img: "/about/ad2.png", name: "Mr. Jerome Samson", role: "Program Manager" },
              { img: "/about/ad1.png", name: "Mr. C. Canisharithan", role: "Finance & Logistics Manager" },
              { img: "/about/maryan.png", name: "Mr. Mariyan Croos", role: "Project Manager for Child, Youth and Livelihood" },
              { img: "/about/ben.png", name: "Mr.Perinpanayagam Benignus", role: "Project Manager for Mental Health and Non-Violent Communication" },
              { img: "/about/merin.png", name: "Mr. J. Merin Nitharsan", role: "Web & Digital Marketing Manager" },
            ].map((admin, i) => (
              <div key={i} className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white/20 mb-3">
                  <img src={admin.img} alt={admin.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base font-bold text-slate-800 dark:text-white">{admin.name}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">{admin.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Founder's Message */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-blue-500/20 dark:border-sky-500/20 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 dark:via-sky-500 to-transparent"></div>
            <h2 className="text-3xl font-bold font-oswald text-center text-slate-900 dark:text-white mb-8">Message from the Heart</h2>

            <div className="text-center mb-10">
              <p className="text-xl md:text-2xl text-blue-600 dark:text-sky-300 italic font-serif leading-relaxed">
                “Not all of us can do great things but we can do small things with great love”
              </p>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm tracking-widest">- MOTHER TERESA -</p>
            </div>

            <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed font-light text-justify text-lg">
              <p>
                IMSESO’s mission is rooted in a deep commitment to empowering children, youth, and marginalized communities. We aim to break barriers of inequality and build a future where every voice is heard.
              </p>
              <p>
                Through collaboration, compassion, and dedication, we envision a future where every person has the opportunity to live a dignified life in harmony with the environment.
              </p>
              <p>
                I heartily thank all our funding agencies, partner organizations, religious leaders, and government officials for their unwavering support.
              </p>
            </div>

            <div className="mt-10 text-center">
              <img src="/about/ab1.png" alt="Signature" className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-blue-500 dark:border-sky-500 shadow-lg" />
              <p className="text-slate-900 dark:text-white font-bold text-lg">Constantine Santiago</p>
              <p className="text-blue-600 dark:text-sky-400 text-sm">Founder, President & Director</p>
            </div>
          </div>
        </div>
      </div>

      <FooterTab />
    </div>
  );
};

export default AboutPage;
