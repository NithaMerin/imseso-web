"use client";
import React, { useState } from 'react';
import FooterTab from '../components/FooterTab';
import Image from 'next/image';

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
      1. Inclusive Education for children with Learning difficulties: Specialized Learning Support, Learning aids and Tools, Individualized Education plans. Therapeutic Support.
      2. Community – Based Education Centers: Mobile Learning unit, After school program, Peer Tutoring,
      3. Psychosocial Support and Confidence building: Emotional Support, Resilience and social skills, Peer support groups.
      4. Parental and community involvement; Parental Education Programs, Community Awareness Campaigns, Local Larders Advocates`
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
      content: `Improving health, mental health, and overall well-being in Sri Lanka requires a multifaceted approach that addresses the challenges faced by the population, such as mental health stigma, access to healthcare, and lifestyle-related issues. Here are key areas and activities to focus on in order to improve health and mental well-being in Sri Lanka. IMSESO has been conducting Mental health and well-being programs since 2018 in the schools, Technical colleges and Higher Educational institutes. We conduct Meditation, Mindfulness practices, Mid brain activation excises, Mental health awareness, Psychological counseling more than 10,000 children and youth have been directly benefited.
      
      The thematic areas that we focus on:
      ▪ Public Awareness Campaigns: To raise awareness about mental health and reduce stigma. focus on educating the public about the importance of seeking help and the benefits of mental health care.
      ▪ Schools and institutions: Introduce mental health education in schools and universities to teach students about emotional well-being, coping strategies, and help-seeking behavior. Peer counseling programs can also be beneficial.
      ▪ Community-Based Mental Health Programs: Establish and support local mental health care initiatives and community outreach programs where people can receive counseling, mental health education, and support close to home.
      ▪ Expand Mental Health Care Accessibility: Increase the number of mental health professionals, such as psychologists, counselors, and social workers, especially in rural and underserved areas.
      ▪ Mindfulness and Meditation: Introduce mindfulness, yoga, and meditation programs, which can help reduce stress and promote mental well-being. These can be incorporated into schools, workplaces, and community centers.
      ▪ Stress Management Programs: Create workshops and training programs to teach effective stress management techniques, helping people to manage stress in both their personal and professional lives.
      ▪ Support for Women and Children: Special programs focused on the mental health and well-being of women, children, and adolescents. Gender-based violence awareness and support services.
      ▪ Disaster-Resilient Mental Health Systems: Disaster-resilient mental health systems. Counseling and mental health services a part of disaster response plans to help individuals cope with trauma.
      ▪ Building Social Support Networks: Foster strong social connections through community building activities, such as local clubs, group meetings, and volunteering programs. Support from family, friends, and peers is crucial to mental well-being.
      ▪ Youth Empowerment Programs: Focus on providing emotional support, career guidance, and social engagement for youth, who are often at high risk for mental health issues due to academic pressures, unemployment, or social isolation.
      ▪ Suicide Prevention Initiatives: Educate the public on recognizing the warning signs of suicidal ideation and how to offer help or intervene safely.
      ▪ Substance Abuse Prevention: Focus on reducing substance abuse by raising awareness about its harmful effects and providing access to rehabilitation services. Programs to prevent alcohol, tobacco, and drug use are vital.`
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
      content: `Child Protection and Child Rights training for parents and teachers is essential for creating a safe and supportive environment for children. IMSESO has designed these training programs to raise awareness about the responsibilities and actions required to ensure that children's rights are respected and that they are protected from harm. IMSESO has been conducting these training programs since 2018. So far we have reached 5000 Parents and Teachers directly benefited. We have identified 30 physical and Emotional abuses against children and reported to relevant government Departments such as Police and Probation District office for taking necessary legal actions.
      
      The Thematic areas are highlighted in the training programs:
      1. Child Protection Awareness: Types abuse, Signs of abuse, Reporting Mechanisms, Creating a safe environment.
      2. Role of Parents and Teachers: Collaboration, Modeling behavior, Empowering children, Positive Parenting in the digital era.
      3. Psychological support for children: Supporting children's emotional well-being, Dealing with trauma, Understudying and supporting children with the Learning difficulties such as ADHD, Dyslexia, Dysculculia, Dysgraphia, Dyspraxia.
      4. Legal and Ethical considerations: Understanding local and international laws, Confidentiality`
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
      content: `Youth empowerment in Sri Lanka is a multifaced approach that encompasses various aspects, including peace and reconciliation, economic development. Youth empowerment projects aim to provide young people with the skills, knowledge, and opportunities they need to actively participate in society, achieve personal growth, and contribute to their communities for the sustainable development of Sri Lanka. IMSESO has been conducting the following training programs for youth such as Leadership skills development, carrier guidance, Drug prevention, Non-Violent communication and youth mental health and psychological counseling in the village level, Technical colleges and Higher educational institutions. More than 2000 youth are directly benefited.
      
      The thematic areas that we focus on:
      ▪ Civic Engagement and Leadership: Encourage youth to take active roles in their communities, from local governance to social advocacy such as decision-making and policy discussions. Social awareness campaigns on gender equality, human rights, and the importance of education. Youth play a crucial role in promoting peace and reconciliation by bridging ethnic and religious divides.
      ▪ Skill Development Training: Soft skills development, such as communication, leadership, teamwork, and problem-solving as well as Agriculture, organic farming, entrepreneurship and technical training.
      ▪ Entrepreneurship Programs: Providing youth with the tools and resources to start their own businesses, including mentorship, seed funding, and business development training. Competitions and incubators to encourage innovation and entrepreneurship among young people.
      ▪ Sports and Recreation: Organizing sports tournaments and recreational activities that promote teamwork, discipline, and healthy lifestyles. Establishing youth clubs and recreational centers that offer safe spaces for socialization and skill-building.
      ▪ Youth Counseling and Support Services: Providing mental health support, counseling for young people facing challenges such as stress, family issues, and career uncertainty. Peer support networks and mentoring programs that connect youth with role models.
      ▪ Environmental and Social Projects: Engaging youth in community-driven environmental conservation projects, such as tree planting, waste management campaigns, and sustainable development initiatives.
      ▪ Cultural and Arts Programs: Encouraging creativity through art, music, drama, and dance programs that promote cultural expression and preserve traditional practices. organizing talent shows, exhibitions, and workshops for youth to showcase their skills.`
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
      content: `Poverty alleviation and food security are two critical issues that Sri Lanka has been addressing, especially given its economic challenges in recent years. In Sri Lanka, poverty alleviation and food security projects often focus on several key areas to address the root causes of poverty and enhance access to adequate food. IMSESO has been implementing Poverty alleviation and food security projects since 2021. We provide home gardening and poultry for vulnerable families, more than 200 families have directly benefited and we provided dry ration for more than 1000 families during the Covid -19 and Flood.
      
      The thematic areas that we focus on:
      ▪ Agricultural Development and Support: Providing training and resources for small-scale farmers to increase productivity, such as through sustainable farming practices, organic farming, and irrigation systems. Offering access to credit, seeds, fertilizers, and equipment to boost agricultural output.
      ▪ Community-based Programs: Establishing community-based organizations to manage local resources and engage in collective activities, such as food banks, community gardens, and cooperatives. Empowering women and marginalized groups through skills training and leadership development to enhance community resilience.
      ▪ Nutrition and Health Programs: Promoting proper nutrition through awareness campaigns, school feeding programs, and supplementation of essential micronutrients to combat malnutrition. Collaborating with health departments to improve access to healthcare and hygiene education.
      ▪ Social Safety Nets and Cash Transfers: Distributing targeted cash transfers, food vouchers, or other forms of financial assistance to vulnerable populations, especially those in rural areas, to ensure they can meet basic needs.`
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
      content: `Sri Lanka has been actively involved in various climate change and environmental sustainability projects in recent years, aimed at mitigating the impacts of climate change and fostering a more sustainable future. Some of these projects focus on conservation, renewable energy, and community-based approaches to environmental sustainability. IMSESO has been implementing Environmental conservation Projects since 2021. We have planted more than 1000 trees in the schools and public places and conducted seminars on Natural disasters and Environmental pollutions for school students and encourage them to involve in the Environmental Protection activities, More than 1000 students have directly benefited.
      
      The thematic areas that we focus on:
      ▪ Reforestation and Forest Conservation: Encourage people for tree planting campaigns, aiming to increase green cover across the island. restore biodiversity and mitigate the effects of soil erosion and flooding.
      ▪ Climate Resilient Agriculture: Climate-smart agriculture initiatives are being promoted to enhance food security while reducing the environmental impact of farming. Agroforestry, which integrates trees with crops, has gained popularity for enhancing biodiversity and increasing resilience to climate change.
      ▪ Water Management: Sustainable water management such as rainwater harvesting systems and irrigation improvements to help farmers adapt to changing weather patterns.
      ▪ Community-Based Adaptation Projects: Building climate resilience within vulnerable communities, include training in sustainable farming practices, early warning systems for natural disasters, and community-based water management solutions.
      ▪ Waste Management and Recycling: Promote plastic recycling. Initiatives aim to increase waste management infrastructure and promote sustainable disposal practices. Participate in sorting and recycling waste.`
    }
  ];

  return (
    <>
      <div className="relative pl-1 pr-1 bg-blue-200">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-sky-800">Our Programs</h1>
          
          <div className="space-y-6">
            {programSections.map((section) => (
              <div 
                key={section.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full px-6 py-4 text-left font-bold text-lg md:text-xl flex justify-between items-center transition-colors duration-200 ${
                    expandedSection === section.id 
                      ? 'bg-sky-700 text-white' 
                      : 'bg-white text-sky-800 hover:bg-sky-50'
                  }`}
                >
                  <span>
                    {section.id}. {section.title}
                  </span>
                  <span className="text-2xl">
                    {expandedSection === section.id ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedSection === section.id 
                      ? 'max-h-[5000px] py-4 bg-gray-50' 
                      : 'max-h-0'
                  }`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    {section.content.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  
                  {/* Image Gallery */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-6">
                    {section.images.map((image, index) => (
                      <div key={index} className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                        <img
                          src={image}
                          alt={`${section.title} image ${index + 1}`}
                          layout="fill"
                          className='w-full h-full rounded-xl shadow-xl'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <FooterTab />
    </>
  );
};

export default ProgramPage;