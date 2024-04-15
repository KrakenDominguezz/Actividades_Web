import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResumeProject from './projectcomp';
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex font-sans flex-col m-0 min-w-[320px] min-h-[100vh]'>
      <div id='Header' className=' my-10 flex flex-col gap-5 items-center'>
        <h1 className='font-bold text-2xl text-center'>Kraken Domínguez</h1>
        <p className='text-lg text-center'>229-781-4503 | <span className='underline'>kraken209254@gmail.com |</span></p>
      </div>
      <div id='Education' >
        <div className='underline flex flex-col items-center'>
          <h2 className='text-start text-lg font-bold'>Education</h2>
        </div>
        <div className='flex-wrap flex-col gap-10'>
        <div className='text-md flex justify-around mx-20'>
            <p >Instituto Tecnológico de Monterrey</p>
            <p>Monterrey, Nuevo León</p>
          </div>
        <div className='text-md flex justify-around mx-20'>
            <p >B.Computer Science and Technology GPA 3.729 </p>
            <p>Aug. 2021 - August 2025</p>
        </div>
        </div>
       
      </div>
      
      <div id='TechnicalSkill ' className='mt-10'>
        <div className='underline flex flex-col items-center mb-10'>
            <h2 className='text-start text-lg font-bold'>Technical Skills</h2>
            
        </div>
        <div className='text-md flex flex-col mb-10 items-center mx-20 font-bold'>
              <p> Languages: C++, C Sharp, Python, HTML, CSS, JavaScript, SQL,Swift</p>
              <p>Developer Tools: Git, VS Code, Visual Studio,Linux, Jira, Github,Figma</p>
        </div>
      </div>
      <div id='Projects'>
      <div className='underline flex flex-col items-center mb-10'>
            <h2 className='text-start text-lg font-bold'>Projects</h2>
            
        </div>
      <div className="container mx-auto px-4 py-8">
      <ResumeProject
        title="Vita"
        stack="Html, CSS, JS, React, Figma, NextJS"
        timeframe="February 2024 -- Present"
        description={[
          "Worked on a website focused on health improvement utilizing AI to give suggestions on 3 aspects: Nutrition, Exercise, and Sleep.",
          "Developed UI Design for a responsive web application utilizing Figma.",
          "Worked in conjunction with a team of 5 developers utilizing SCRUM methodology and JIRA for Project Management needs.",
          "Developed front-end landing page of the responsive web application utilizing React, CSS, HTML, JSX, and NextJS."
        ]}
      />
      <ResumeProject
        title="Ux Designer(MAE)"
        stack="Figma"
        timeframe="December 2023 -- March 2024"
        description={[
          "Working as a designer in the redesign of a web platform focused on connecting students to tutors for subjects inside Tec De Monterrey.",
          "Developed UI Design for a responsive web application utilizing Figma.",
        ]}
      />
      <ResumeProject
        title="Banortinvest"
        stack="Html, CSS, JS, React, Figma"
        timeframe="September 2023 -- September 2023"
        description={[
          "Created a solution for people who didn't know how to invest in investment funds utilizing Artificial Intelligence",
          "Designed, prototyped, and created a working interface for the solution utilizing React JS Framework"
        ]}
      />
      <ResumeProject
        title="Ticket Delivery and Collecting"
        stack="Swift, Figma, Python, MSSQL, Jira, Git, Github"
        timeframe="June 2023 -- Present"
        description={[
          "Developed a functioning prototype utilizing Figma to model an iOS application designed for Managers and Collectors working with an organization that receives donations physically",
          "Utilized SwiftUI to create the front-end of the application, as well as implementing the integration with the API, to display our database data onto the front-end",
          "Utilized different techniques to ensure application safety, as well as data encryption using hashing and other security measures such as web tokens"
        ]}
      />
      <ResumeProject
        title="Mentor Academico de Excelencia (MAE)"
        stack="Python, C++"
        timeframe="August 2022 -- Present"
        description={[
          "Working as a student mentor teaching students programming abilities inside Tec de Monterrey",
          "Having to teach multiple mentoring sessions on topics such as loops, if-statements, arrays, 2D-Arrays, algorithms, etc.",
          "1 on 1 coaching and advice on building projects for classes",
          "Nation-wide reach in different Tec de Monterrey campuses using online technologies such as Discord and Zoom"
        ]}
      />
    </div>
      </div>
    </div>
  )
}

export default App
