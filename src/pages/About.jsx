import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);




  return (
 <>  
<section className=' heading p-10 pt-28'>
    <h1 className=' text-xl  font-semibold'>About us  <div className=' w-10 h-1 bg-red-200'></div></h1>
    <h2 className=' text-lg sm:text-3xl lg:text-4xl font-bold mb-5 mt-6'>Welcome to Kci Computer Institute</h2>
  <div className=' flex gap-6 flex-col'>

    <p className=' text-sm sm:text-[1rem]   tracking-wide text-justify '>
    Kci stands for Inder Info tech a unit of Inder Info Tech Private Limited. It is the best IT training institute in Delhi, which provides a variety of programs and courses at an affordable cost. We are the Best IIT Institute in Delhi, known for the excellence, quality and consistency. We have well qualified and experienced faculties in various streams, who doesn’t only provide computer courses, but also helps in personality development of the students.
    </p>
    <p className=' text-sm sm:text-[1rem]   tracking-wide text-justify '>

  About
  Skill India offers courses across 40 sectors in the country which are aligned to the standards recognised by both, the industry and the government under the National Skill Qualification Framework. The courses help a person focus on practical delivery of work and help him enhance his technical expertise so that he is ready for day one of his job and companies don’t have to invest into training him for his job profile Being one of the best IT training institutes in Delhi, we focus on offering you the best class room experience to ensure that you will get the training under the experts.
    </p>
  </div>

    <h2 className=' text-xl sm:text-2xl font-bold mb-5 mt-4'>Welcome to Institute Gellary</h2>
    <h3 className=' text-lg  font-semibold block sm:hidden'>To see Photos us  <div className=' w-10 h-1 bg-red-200'></div></h3>

    <div className="flex items-start justify-center  mt-10" >
      <div className=" p-2 min-w-full overflow-y-scroll flex gap-4 sm:grid  sm:grid-cols-2 lg:grid-cols-4 gap-4" id='scrollred'>
        <img src="https://source.unsplash.com/random" alt="Image 1" className=" rounded-lg w-full object-cover  " />
        <img src="https://source.unsplash.com/random" alt="Image 2" className="rounded-lg w-full object-cover" />
        <img src="https://source.unsplash.com/random" alt="Image 3" className="rounded-lg w-full object-cover" />
        <img src="https://source.unsplash.com/random" alt="Image 4" className="rounded-lg w-full object-cover" />
      </div>
    </div>


    <div className=' mt-10'>
<h1 className=' text-xl  font-semibold'>why  us  <div className=' w-10 h-1 bg-red-200'></div></h1>

<div  className=' grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-5'>

<div className="text flex flex-col gap-5 mt-10 text-justify  ">

<span className=' text-4xl sm:text-6xl text-gray-400'>01</span>
<h3 className=' text-lg sm:text-xl font-semibold'>Why Choose us</h3>
<p className='  text-sm sm:text-[1rem] '>IIT Computer Institute is committed to customer satisfaction. In the past 22 years , we have created a very friendly learning environment with the latest computer hardware and software technologies. IIT Institute provides professional information technology training in order to prepare qualified individuals for permanent and contract employment with Systegration, Inc., an affiliated consulting and professional services firm, as well as IIT/Systegration business partner companies.</p>

</div>


<div className="text flex flex-col gap-5 mt-10 text-justify ">

<span className=' text-4xl sm:text-6xl text-gray-400'>02</span>
<h3 className=' text-lg sm:text-xl font-semibold'>Our Mission</h3>
<p className='  text-sm sm:text-[1rem] '>We aspire to be the premier educational institute, which works to build active and creative minds with a sense of better technology understanding. We have a readily skilled manpower to help our students in spiritual, technical, physical, emotional, intellectual and moral development.</p>

</div>

<div className="text flex flex-col gap-5 mt-10 text-justify ">

<span className=' text-4xl sm:text-6xl text-gray-400'>03</span>
<h3 className=' text-lg sm:text-xl font-semibold'>Our visions</h3>
<p className='  text-sm sm:text-[1rem] '>We want to achieve unparalleled standards of quality IIT education in an inexpensive fee structure. We are working to create leading IIT professionals of global standards that will contribute towards the technical and economical growth of our country. Life is all about making the right choices, so choose your career at become an IIT professional</p>

</div>



</div>




</div>

<div className=' mt-10 '>
<h1 className=' text-xl  font-semibold'>Directors Message<div className=' w-10 h-1 bg-red-200'></div></h1>
<h2 className=' text-4xl mt-10 mb-5'>Meet Our Founder</h2>

<div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>

<div className="text text-justify flex  gap-0 flex-col text-sm lg:text-[1rem] order-2  sm:order-1  " >
Skilling India and Making India is the current and most vibrant slogan of our nation where the center Government and State Government work on this slogan and we are support to these slogan We at IIT Computer Institute, we are committed to this national building and rising India movement through skilling India with our slogan "Quality Education in Affordable Fee" One of our major focus area is Employment related Vocational Education through Industry,Institute, Hospital, etc. partnership to conquer employability problem of the nation. Employability through vocational training is promoted amongst the youth the programme sake to in enhance Employment opportunities by providing vocational Skill Training to school dropouts, unemployed youth, Tribal Communities and women with an Opportunity to led self — sustained and economically independent lives with the help of knowledge — based tie — ups with our Organization and our Training partners to provide training on varied subject, such as various employment vocational skill training various field. IIT Computer Institute aim is to think study and think social work with high flexibility and quick response value innovation connect growth and future to elevate us from mediocrity to sustained excellence. So join with us our mission.
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Contact with us</button>

</div>


<div className=' flex flex-col justify-center items-center gap-3 order-1 sm:order-2 '>

  <img src="https://www.iitcomputer.com/images/teachers/t-1.jpg" alt=""  className='  w-[200px] max-h-[200px]' />
<div className="img grid grid-cols-2 gap-3">
   
  <img src="https://www.iitcomputer.com/images/teachers/t-1.jpg" alt="" className='  w-[200px] max-h-[200px]'  />
  <img src="https://www.iitcomputer.com/images/teachers/t-1.jpg" alt="" className='  w-[200px] max-h-[200px]' />
</div>
</div>

</div>





</div>



</section>


</>
  )
}

export default About