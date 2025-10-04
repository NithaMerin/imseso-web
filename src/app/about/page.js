"use client";
import React from 'react';
import FooterTab from '../components/FooterTab';

const AboutPage = () => {
  return (
   <div className='bg-blue-50'>
     <h1 className="text-4xl font-extrabold font-oswald text-blue-500 text-center head-oswald pt-4">About IMSESO</h1>
    <div>
      {/* Heading */}
      <div className="flex flex-col md:flex-row h-full bg-blue-200 p-6 md:p-10 mt-4 mb-4">
        <div className="container p-4 md:p-10 flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* Text content on the left */}
          <div className="flex flex-col items-start animate-slide-in-right w-full md:basis-2/3">
            <h2 className="text-xl font-extrabold font-oswald text-blue-500 head-oswald">Our Motto</h2>
            <p className="text-m text-gray-800 mb-4 text-justify head-oswald">
              Social Empowerment with Peaceful Environment
            </p>
            <h2 className="text-xl font-extrabold font-oswald text-blue-500 head-oswald">Our Vision</h2>
            <p className="text-m text-gray-800 mb-4 text-justify head-oswald">
              Meaningful contribution to the sustainable socio-economic and environmental development of Sri Lanka by empowering Children, Youth, and Marginalized communities.
            </p>
            <h2 className="text-xl font-extrabold text-blue-500 head-oswald">Our Mission</h2>
            <p className="text-m text-gray-800 text-justify head-oswald">
              Empowering Children, Youth, and Marginalized Communities for the sustainable development of Sri Lanka through Education and Skills Development, Child Protection & Child Rights, Youth Empowerment, Health & Mental Health, Poverty Alleviation & Food Security, and Climate Change & Environmental Sustainability.
            </p>
          </div>

          {/* Image on the right */}
          <div className="animate-slide-in-left w-full md:w-1/3 flex justify-center md:justify-end items-start mt-6 md:mt-0">
            <img src='./icons/kids.jpg' className='w-full md:w-80 h-48 md:h-80 rounded shadow-xl object-cover' />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-4 px-4 md:px-0">
        <h2 className="text-xl font-extrabold text-center pb-4 pt-4 text-blue-500 head-oswald">Core Values</h2>
        {/* Mission Content (Image + Text) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl">
          {/* Text */}
          <p className="text-base text-gray-800 text-center head-oswald">
             Equality, Responsibility, Respect, Compassion, Curiosity, Collaboration, Participation, Cultural sensitive, Transparency & Accountability, Non- discrimination, therapeutic relationship and Ecological concern.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-blue-200 p-2 pb-6 mt-2 ">
     <div className="container flex gap-4  flex-col m-4 p-10 head-oswald">
     <h1 className="text-4xl text-blue-500 font-extrabold text-center my-8 m-6">
       THE GENERAL INTRODUCTION OF IMSESO
      </h1>
      <p className="text-justify indent-10 text-base text-gray-800">
       IMSESO is a committed National level Non-governmental organization (NGO) founded on 8th of December 2013 by 
       Mr. Constantine Santiago along with a group of volunteers and Registered as a Non-Governmental Organization
       under the Voluntary Social Services Organizations Act No.31 of 1980 as amended by Act No.8 of 1998 at National
        Secretariat for Non Governmental Organizations, meeting legal requirements to operate as a Non- Governmental organization
         in Sri Lanka. The main objective of   IMSESO is Child, Adolescents and Youth Development in the remote villages and estates of Sri Lanka. 
       </p>
       <p className="text-justify indent-10 text-base text-gray-800">
       IMSESO has been able to achieve her objective of serving the children, Adolescents and youth  with the proper guidance and dedication
        as a charity organization. IMSESO sustain cordial and healthy relationships with all Religions, Communities, Civil Societies, Governmental 
        and Non-Governmental organizations in Sri Lanka.
      </p> 
      <p className="text-left text-base text-gray-800">
        IMSESO mainly focus on Empowering  Children, youth and Marginalized communities in the  underprivileged villages and 
        hill country  of Sri Lanka.  
      </p>
      <ul className="list-disc list-inside text-gray-800 space-y-2 pl-5">
        <li className="leading-snug">Education and Skills development</li>
        <li className="leading-snug">Child protection and Child Rights</li>
        <li className="leading-snug">Physical Health and Mental Health & well-being</li>
        <li className="leading-snug">
          Empowerment of Children and Adolescents with special needs
          <br />
          <span className="text-sm pl-5">(Physical, Developmental, Behavioral/Emotional, Sensory impairments as well as Learning and Intellectual disabilities)</span>
        </li>
        <li className="leading-snug">Promoting Non-Violent Communication (NVC).</li>
        <li className="leading-snug">Youth Empowerment</li>
        <li className="leading-snug">Poverty Alleviation and Food security</li>
        <li className="leading-snug">Climate change and Environmental sustainability</li>
      </ul>
     </div>
    </div>
    <div className="p-1">
      <div className="container flex flex-col items-center gap-4 m-4 head-oswald px-4">
        <h1 className="text-4xl text-blue-500 font-extrabold text-center my-8 m-6">
          The Registered Certificate of IMSESEO
        </h1>
        <a href="./icons/certificateOfImseso.jpg" target="_blank" rel="noopener noreferrer">
          <img src='./icons/certificateOfImseso.jpg' className='max-w-full w-64 md:w-96 h-auto cursor-pointer object-contain' />
        </a>
      </div>
    </div>
     <div className="p-1">
      <div className="container flex flex-col items-center gap-4 m-4 head-oswald px-4">
        <h1 className="text-4xl text-blue-500 font-extrabold text-center my-8 m-6">
          Organization Organogram
        </h1>
          <img src='./icons/structure.jpg' className='max-w-full w-80 md:w-120 h-auto cursor-pointer object-contain' />
      </div>
    </div>
    <div className=" mb-4 bg-[url(/imlogo1.png)] bg-cover bg-center mt-4 p-4 relative head-oswald"> 
     <h1 className="text-4xl text-blue-500 font-extrabold my-8 m-6">
        Our Team
     </h1>
      {/* Patrons Section */}
      <div className="container mx-auto px-4 mb-4">
       <h3 className="text-2xl text-white font-extrabold p-4 bg-blue-500 my-8 text-center">PATRONS & ADVISORS OF IMSESO</h3>
        <div className='flex justify-center mb-4'>
              <div className='flex flex-col md:flex-row justify-center gap-6'>
                  {/* <!-- First Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8 '>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/pa4.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] font-bold text-center rounded-full my-2 mb-0">Dr. Charles viva MBBS, F.R.C.S </h3>
                      <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>Senior Consultant Plastic Aesthetic and Hand surgeon <br />Founder of Interplast UK</p>
                  </div>
                  {/* <!-- Second Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/pa5.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] text-center font-bold rounded-full my-2 mb-0">Rev. Dr. Christlin P. Rajendram S.J</h3>
                      <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>Former Rector of Trincomalee campus, <br />Eastern University of Sri Lanka</p>
                  </div>
              </div>
          </div>
          <div className='flex justify-center mb-4'>
            <div className='flex flex-col md:flex-row justify-center gap-6'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/pa1.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] text-center font-bold rounded-full my-2 mb-0">Dr Anna Garbacz</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>Phd in Psychology and CNVC Certified trainer<br/>Consultant for Mental health and well-beingand NVC</p>
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/pa2.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] text-center font-bold rounded-full my-2 mb-0">Mrs. Ada Bienkowska LLB</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>CNVC Certified Trainer<br/>Consultant for NVC and Project Development</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center mb-4'>
            <div className='flex flex-col md:flex-row justify-center gap-6'>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-36 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/pa6.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] text-center font-bold rounded-full my-2 mb-0">Mr.Hans & Mrs.Erna</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>NVC Certified Trainers<br/>Consultants for Child development & NVC</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/pa3.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-56 md:w-[350px] text-center font-bold rounded-full my-2 mb-0">Rev. C. Eric Jeevaraj MBA (USA)</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-40 md:w-[300px] font-normal text-center'>Westminster Uk <br/>Advisor for International Collaboration</p>
                </div>
            </div>
        </div>
      </div>

      {/* Executive section */}
      <div className="container mx-auto px-4 mb-4">
       <h3 className="text-2xl text-white p-4 my-2 font-extrabold my-8 text-center bg-blue-500">THE CHIEF EXECUTIVE COMMITEE OF IMSESO</h3>
        <div className='flex flex-col justify-center items-center mb-4 pb-4'>
         <div className='w-44 h-48 bg-gardient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-xl overflow-hidden'>
          <img src='./about/ab1.png'  className='w-full h-full rounded-xl shadow-xl'/>
         </div>
          <h3 className="text-m text-white bg-blue-500 p-2 w-[300px] text-center font-bold rounded-full my-2 mb-0">Mr.Constantine Santiago</h3>
          <p className='text-xs text-black bg-blue-200 p-2 w-[250px] text-center font-normal'>Founder, President & Executive Director</p>
        </div>
        <div className='flex justify-center mb-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-6'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ab2.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. S. Wilfred</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[200px] text-center font-normal '>Secretary</p>
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ab3.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. S. Asaippilai</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[200px] text-center font-normal '>Vice President</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab4.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-m text-white bg-blue-500 p-2 w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. P. Nesaratnam</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[200px] text-center font-normal'>Treasurer</p>
                </div>
            </div>
        </div>

        {/* {members list} */}
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-6'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab5.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-40 md:w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. A.D.Jerald Almeda</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab6.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-40 md:w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. S.Francis</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Third Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab7.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-40 md:w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. M.Mariyaluthakaran</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center justify-center gap-6'>
                 {/* <!-- Fourth Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab8.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-40 md:w-[250px] text-center font-bold rounded-full my-2 mb-0">Mr. M.Shalika Fernando</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Sixth Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab10.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[250px] text-center font-bold rounded-full my-2 mb-0">Mrs. Christhuthas Ugetha</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Seventh Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab12.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[250px] text-center font-bold rounded-full my-2 mb-0">Mrs.Judit Shiyamini Thayalarajan</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
          </div>
        </div>
      </div>
      {/* {Administration Commitee} */}
      <div className="container mx-auto px-4 mb-4">
       <h3 className="text-2xl text-white font-extrabold my-8 bg-blue-500 p-4 text-center">THE ADMINISTRATION COMMITEE</h3>
        <div className='flex justify-center mb-4'>
              <div className='flex flex-row justify-center'>
                  {/* <!-- First Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/ad2.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Mr. Jerome Samson </h3>
                      <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>Program Manager</p>
                  </div>
                  {/* <!-- Second Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/ad1.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Mr. C.Canisharithan</h3>
                      <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>Accountant</p>
                  </div>
              </div>
          </div>
          <div className='flex justify-center mb-4'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center justify-center gap-6'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ad3.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Miss. M.Leevenika</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>District Coordinator - Mannar</p>
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ad4.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Miss. I.Junisha</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>District Coordinator - Vavuniya</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ad5.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Mrs. S.Sharmila</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>District Coordinator - Badulla</p>
                </div>
              
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-32 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ad7.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-blue-500 p-2 w-[200px] text-center font-bold rounded-full my-2 mb-0">Miss. S.Jenethra</h3>
                    <p className='text-xs text-black bg-blue-200 p-2 w-[150px] text-center font-normal'>District Coordinator - Galle</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className="container flex flex-col bg-blue-200 items-center pt-6 text-center mx-auto px-10 mb-4 rounded-xl shadow-xl head-oswald">
      <h1 className="text-4xl text-blue-500 font-extrabold my-8">
        Message from the Heart of Founder & Director
      </h1>
      <p className="text-xl decoration-black text-black mb-6 font-extrabold italic outline-text">
        “Not all of us can do great things but we can do small things with great love”
        <br /> - MOTHER TERESA -
      </p>
      <div className="gap-4 flex flex-col text-lg text-black font-bold text-left max-w-4xl justify-start">
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          IMSESO’s mission is rooted in a deep commitment to empowering children, youth, and marginalized communities in Sri Lanka.
          We believe that every individual, regardless of background or circumstance, deserves the opportunity to thrive and contribute
          meaningfully to society. Our goal is to break the barriers of inequality, provide access to education, skill development, and support
          for holistic growth. We aim to build a brighter future where every voice is heard, every talent nurtured, and every community uplifted.
          Together, we are working to create lasting change, fostering hope, opportunity, and empowerment for all.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          Our focus on child protection and upholding child rights ensures that every child is given the opportunity to live free from abuse,
          neglect, and exploitation. By advocating for their well-being, we aim to create a safe environment where they
          can learn, grow, and reach their full potential.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          We recognize the importance of health and mental health in overall development. Through our initiatives, we strive to improve access
          to healthcare, mental health services,
          and overall well-being, ensuring that every individual is supported physically and emotionally.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          We believe that when young people are equipped with the right knowledge, skills, and opportunities, they can be powerful agents of
          change in their communities.
          We provide them with the tools to lead, innovate, and build a brighter future for themselves and others.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          Addressing poverty alleviation is essential to breaking the cycle of hardship. Our programs are designed to uplift communities through
          sustainable
          livelihoods, economic empowerment, and creating opportunities for self-sufficiency.
          We work to ensure that no one is left behind in the fight against poverty.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          Finally, we acknowledge the pressing challenge of climate change and environmental sustainability. Our commitment to the planet is
          reflected
          in our efforts to promote sustainable practices and raise awareness about environmental protection.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          Through collaboration, compassion, and dedication, IMSESO envisions a future where every person has the opportunity to live a dignified
          life, where communities thrive together
          in harmony with the environment, and where the promise of a better tomorrow is within reach for all.
        </p>
        <p className="text-justify indent-10 text-base text-gray-800 italic">
          I hearty thank all our funding agencies and Partner organizations for supporting us financially, and religious
          leaders and government officials for supporting us for the successful implementation and initiations.
        </p>
        <p className="text-lg text-black font-extrabold mt-6 font-bold text-center mb-7">
          Thank You,<br />
          Constantine Santiago <br />
          Founder, President & Director
        </p>
      </div>
    </div>
    <FooterTab />
   </div>
  );
};

export default AboutPage;