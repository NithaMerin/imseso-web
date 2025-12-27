"use client";
import React, { useState } from 'react';
import FooterTab from '../components/FooterTab';

const ProgramPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionNumber) => {
    setExpandedSection(expandedSection === sectionNumber ? null : sectionNumber);
  };

  const programSections = [
    {
      id: 1,
      title: "EDUCATION AND SKILLS DEVELOPMENT",
      images: [
        "./program/education/ed.jpg",
        "./program/education/ed1.jpg",
        "./program/education/ed2.jpg",
        "./program/education/ed3.jpeg"
      ],
      content: `Education and skills development program are tailored for children in the underprivileged villages and hill country of Sri Lanka, with a special focus on those who are having learning difficulties such as ADHD, Dyslexia, Dyscalculia, Dysgraphia and Dyspraxia. IMSESO has been conducting this fruitful program since 2018 in the underprivileged villages and hill country. More than 1000 children directly have been benefitted from this projects in four districts. Here we mainly focus on teaching Key subjects such as Mathematics, English and Life skills based – Education as well as we conduct skills development trainings for children to develop their cognitive skills and creativities to become Entrepreneurs.
      
      The Thematic areas that we focus on:
      \n1. Inclusive Education for children with Learning difficulties: Specialized Learning Support, Learning aids and Tools, Individualized Education plans. Therapeutic Support.
      \n2. Community – Based Education Centers: Mobile Learning unit, After school program, Peer Tutoring.
      \n3. Psychosocial Support and Confidence building: Emotional Support, Resilience and social skills, Peer support groups.
      \n4. Parental and community involvement; Parental Education Programs, Community Awareness Campaigns, Local Larders Advocates.`
    },
    {
      id: 2,
      title: "HEALTH AND MENTAL HEALTH & WELL-BEING",
      images: [
        "./program/health/he.jpg",
        "./program/health/he1.jpg",
        "./program/health/he2.jpg",
        "./program/health/he3.jpg"
      ],
      content: `Improving health, mental health, and overall well-being in Sri Lanka requires a multifaceted approach that addresses the challenges faced by the population, such as mental health stigma, access to healthcare, and lifestyle-related issues. IMSESO has been conducting Mental health and well-being programs since 2018 in the schools, Technical colleges and Higher Educational institutes. We conduct Meditation, Mindfulness practices, Mid brain activation excises, Mental health awareness, Psychological counseling more than 10,000 children and youth have been directly benefited.`
    },
    {
      id: 3,
      title: "CHILD PROTECTION AND CHILD RIGHTS",
      images: [
        "./program/child/ch.jpg",
        "./program/child/ch1.jpg",
        "./program/child/ch2.jpg",
        "./program/child/ch3.jpg"
      ],
      content: `Child Protection and Child Rights training for parents and teachers is essential for creating a safe and supportive environment for children. IMSESO has designed these training programs to raise awareness about the responsibilities and actions required to ensure that children's rights are respected and that they are protected from harm. We have identified 30 physical and Emotional abuses against children and reported to relevant government Departments.`
    },
    {
      id: 4,
      title: "YOUTH EMPOWERMENT",
      images: [
        "./program/youth/yo.jpg",
        "./program/youth/yo1.jpg",
        "./program/youth/yo2.jpg",
        "./program/youth/yo3.jpg"
      ],
      content: `Youth empowerment in Sri Lanka is a multifaced approach that encompasses various aspects, including peace and reconciliation, economic development. Youth empowerment projects aim to provide young people with the skills, knowledge, and opportunities they need to actively participate in society. IMSESO has been conducting training programs for youth such as Leadership skills development, career guidance, Drug prevention, Non-Violent communication and youth mental health.`
    },
    {
      id: 5,
      title: "POVERTY ALLEVIATION AND FOOD SECURITY",
      images: [
        "./program/poverty/po.jpg",
        "./program/poverty/po1.jpg",
        "./program/poverty/po2.jpg",
        "./program/poverty/po3.jpg"
      ],
      content: `Poverty alleviation and food security are two critical issues that Sri Lanka has been addressing. IMSESO has been implementing Poverty alleviation and food security projects since 2021. We provide home gardening and poultry for vulnerable families, more than 200 families have directly benefited.`
    },
    {
      id: 6,
      title: "CLIMATE CHANGE AND ENVIRONMENTAL SUSTAINABILITY",
      images: [
        "./program/climate/cl.jpg",
        "./program/climate/cl1.jpg",
        "./program/climate/cl2.jpg",
        "./program/climate/cl3.jpg"
      ],
      content: `Sri Lanka has been actively involved in various climate change and environmental sustainability projects. IMSESO has been implementing Environmental conservation Projects since 2021. We have planted more than 1000 trees in the schools and public places and conducted seminars on Natural disasters and Environmental pollutions.`
    }
  ];

  return (
    <div className='bg-slate-900 min-h-screen text-slate-200 font-inter selection:bg-sky-500/30 transition-colors duration-300'>

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-4 animate-fade-up">
            Our Programs & Impact
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Making a tangible difference in the lives of children, youth, and communities through targeted initiatives.
          </p>
          <div className="h-1 w-24 bg-sky-500 mx-auto rounded-full mt-8"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl pb-24">
        <div className="space-y-8">
          {programSections.map((section) => (
            <div
              key={section.id}
              className={`glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ${expandedSection === section.id ? 'shadow-2xl shadow-sky-900/30 bg-white/5' : 'hover:bg-white/5'
                }`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full px-8 py-6 text-left flex justify-between items-center transition-colors duration-300 outline-none`}
              >
                <span className={`text-xl md:text-2xl font-bold font-oswald tracking-wide ${expandedSection === section.id ? 'text-sky-400' : 'text-slate-200'}`}>
                  <span className="text-sky-500/50 mr-4">0{section.id}.</span>
                  {section.title}
                </span>
                <span className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180 bg-blue-100 dark:bg-sky-500/20 text-blue-600 dark:text-sky-400' : 'text-slate-400'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedSection === section.id
                  ? 'max-h-[3000px] opacity-100 border-t border-slate-200 dark:border-white/10'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/5">
                      <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed max-w-none">
                        {section.content.split('\n').map((paragraph, i) => (
                          <p key={i} className="mb-4 text-justify">{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-2/5">
                      <div className="grid grid-cols-2 gap-3">
                        {section.images.map((image, index) => (
                          <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer">
                            <img
                              src={image}
                              alt={`${section.title} image ${index + 1}`}
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterTab />
    </div>
  );
};

export default ProgramPage;