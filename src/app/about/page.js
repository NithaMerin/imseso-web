import React from 'react';
import FooterTab from '../components/FooterTab';

const AboutPage = () => {
  return (
   <div>
    <div className="container bg-blue-300 mx-8 px-4 p-2 pb-6 mt-2 rounded-xl shadow-xl">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center my-4">About IMSESO</h1>

      {/* Mission Section */}
      <div className="flex flex-col items-center mb-2">
        {/* Mission Heading */}
        <h2 className="text-xl font-bold text-center">Vision</h2>

        {/* Mission Content (Image + Text) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl">
          <p className="text-base text-gray-800 text-justify">
            Meaningful contribution to the  sustainable socio- economic and environmental development of Sri Lanka by empowering Children, Youth and Marginalized communities.  
          </p>
          <img src='./icons/shared-vision.png' className='w-24 h-24' />
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* Mission Heading */}
        <h2 className="text-xl font-bold text-center">Mission</h2>
        {/* Mission Content (Image + Text) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl">
          {/* Image */}
          <img src='./icons/mission.png' className='w-28 h-28' />

          {/* Text */}
          <p className="text-base text-gray-800 text-justify">
            Empowering Children, Youth, and Marginalized Communities for the sustainable development of Sri Lanka through Education and Skills Development, Child Protection & Child Rights, Youth Empowerment, Health & Mental Health, Poverty Alleviation & Food Security, and Climate Change & Environmental Sustainability.
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 mb-4 bg-[url(/imlogo1.png)] bg-cover bg-center mt-4 p-4 shadow-xl rounded-xl relative"> 
     <h1 className="text-4xl text-blue-500 font-extrabold my-8 m-6">
        Our Team
      </h1>
      <div className="container rounded-xl ">
       <h3 className="text-2xl text-black font-bold my-8 text-center">The Chief Executive Commitee of IMSESO</h3>
        <div className='flex flex-col justify-center items-center mb-4'>
         <div className='w-28 h-28 bg-gardient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-xl overflow-hidden'>
          <img src='./about/ab1.png'  className='w-full h-full rounded-xl shadow-xl'/>
         </div>
          <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr.Constantine Santiago</h3>
          <p className='text-xs text-black bg-gray-200 pl-2 pr-2 font-normal rounded-xl'>Founder & Director</p>
        </div>
        <div className='flex justify-center mb-4'>
            <div className='flex flex-row justify-center'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ab2.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. S. Wilfred</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 font-normal rounded-xl'>Secretary</p>
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ab3.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. S. Asaippilai</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 font-normal rounded-xl'>Vice President</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab4.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. P. Nesaratnam</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 font-normal rounded-xl'>Treasurer</p>
                </div>
            </div>
        </div>

        {/* {members list} */}
        <div className='flex justify-center'>
            <div className='flex flex-row justify-center'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab5.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mr. A.D.Jerald Almeda</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab6.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mr. S.Francis</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Third Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab7.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mr. M.Mariyaluthakaran</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Fourth Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab8.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mr. M.Shalika Fernando</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Fifth Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab9.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mr. W.J.Suren Lowe</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Sixth Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab10.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1  font-bold rounded-xl my-2 mb-0">Mrs. Christhuthas Ugetha</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
                {/* <!-- Seventh Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-24 h-24 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ab12.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-xs text-white bg-gray-500 pl-2 pr-2 pt-1 pb-1 font-bold rounded-xl my-2 mb-0">Mrs. M.Sutharsana Koduthor</h3>
                    {/* <p className='text-xs text-gray-500 font-bold'>Treasurer</p> */}
                </div>
            </div>
        </div>
      </div>

      {/* {Administration Commitee} */}
      <div className="container mx-auto px-4 mb-4">
       <h3 className="text-2xl text-black font-bold my-8 text-center">The Administration Commitee</h3>
        <div className='flex justify-center mb-4'>
              <div className='flex flex-row justify-center'>
                  {/* <!-- First Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/ad2.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. Jerome Samson </h3>
                      <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>Program Manager</p>
                  </div>
                  {/* <!-- Second Column --> */}
                  <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                      <img src='./about/ad1.png' className='w-full h-full rounded-xl shadow-xl'/>
                    </div>
                      <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. C.Canisharithan</h3>
                      <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>Accountant</p>
                  </div>
              </div>
          </div>
          <div className='flex justify-center mb-4'>
            <div className='flex flex-row justify-center'>
                {/* <!-- First Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                  <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ad3.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Miss. M.Leevenika</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>District Coordinator - Mannar</p>
                </div>
                {/* <!-- Second Column --> */}
                <div className='flex flex-col items-center mx-4 mb-8'>
                 <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                    <img src='./about/ad4.png' className='w-full h-full rounded-xl shadow-xl'/>
                  </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Miss. I.Junisha</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>District Coordinator - Vavuniya</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ad5.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mrs. S.Sharmila</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>District Coordinator - Badulla</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ad6.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Mr. B.Shan Fernando</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>District Coordinator - Puttalam</p>
                </div>
                <div className='flex flex-col items-center mx-4 mb-8'>
                    <div className='w-28 h-28 shadow-xl rounded-xl overflow-hidden'>
                        <img src='./about/ad7.png' className='w-full h-full object-cover'/>
                    </div>
                    <h3 className="text-sm text-white bg-gray-500 pl-3 pr-3 font-bold rounded-xl my-2 mb-0">Miss. S.Jenethra</h3>
                    <p className='text-xs text-black bg-gray-200 pl-2 pr-2 rounded-xl font-normal'>District Coordinator - Galle</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className="container flex flex-col bg-blue-300 items-center pt-6 text-center mx-auto px-10 mb-4 rounded-xl shadow-xl">
      <h1 className="text-4xl text-blue-600 font-bold my-8">
        Message from the Heart of Founder & Director
      </h1>
      <p className="text-xl decoration-black text-white mb-6 font-bold italic">
        “Not all of us can do great things but we can do small things with great love”
        <br /> - MOTHER TERESA -
      </p>
      <div className="gap-8 flex flex-col text-lg text-black font-bold text-left max-w-4xl justify-start">
        <p className="text-justify text-base text-gray-800">
          IMSESO’s mission is rooted in a deep commitment to empowering children, youth, and marginalized communities in Sri Lanka.
          We believe that every individual, regardless of background or circumstance, deserves the opportunity to thrive and contribute
          meaningfully to society. Our goal is to break the barriers of inequality, provide access to education, skill development, and support
          for holistic growth. We aim to build a brighter future where every voice is heard, every talent nurtured, and every community uplifted.
          Together, we are working to create lasting change, fostering hope, opportunity, and empowerment for all.
        </p>
        <p className="text-justify text-base text-gray-800">
          Our focus on child protection and upholding child rights ensures that every child is given the opportunity to live free from abuse,
          neglect, and exploitation. By advocating for their well-being, we aim to create a safe environment where they
          can learn, grow, and reach their full potential.
        </p>
        <p className="text-justify text-base text-gray-800">
          We recognize the importance of health and mental health in overall development. Through our initiatives, we strive to improve access
          to healthcare, mental health services,
          and overall well-being, ensuring that every individual is supported physically and emotionally.
        </p>
        <p className="text-justify text-base text-gray-800">
          We believe that when young people are equipped with the right knowledge, skills, and opportunities, they can be powerful agents of
          change in their communities.
          We provide them with the tools to lead, innovate, and build a brighter future for themselves and others.
        </p>
        <p className="text-justify text-base text-gray-800">
          Addressing poverty alleviation is essential to breaking the cycle of hardship. Our programs are designed to uplift communities through
          sustainable
          livelihoods, economic empowerment, and creating opportunities for self-sufficiency.
          We work to ensure that no one is left behind in the fight against poverty.
        </p>
        <p className="text-justify text-base text-gray-800">
          Finally, we acknowledge the pressing challenge of climate change and environmental sustainability. Our commitment to the planet is
          reflected
          in our efforts to promote sustainable practices and raise awareness about environmental protection.
        </p>
        <p className="text-justify text-base text-gray-800">
          Through collaboration, compassion, and dedication, IMSESO envisions a future where every person has the opportunity to live a dignified
          life, where communities thrive together
          in harmony with the environment, and where the promise of a better tomorrow is within reach for all.
        </p>
        <p className="text-justify text-base text-gray-800">
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