import { useState } from 'react'
import ikbal from './assets/ikbal.png'
import rocket from './assets/rocket.png'
import bottom from './assets/bottom.png'
import planets from './assets/planets.png'
import astronaut from './assets/astronaut.png'

export default function Homepage() {
    return (
        <div class="w-full relative pb-48">

          <div class='flex flex-row py-16 px-4 lg:px-64 gap-4 justify-center items-center text-white bg-gradient-to-b from-aseorange to-[#FF9066]'>
            <img class="h-48 md:h-96" src={ikbal} />
            <div class='w-2/3'>
              <h1 class="text-3xl md:text-6xl font-bold">OPEN RECRUITMENT EXTENDED!</h1>
              <p>Sekarang adalah saat yang tepat bagi kalian untuk bergabung dengan keluarga kami. Siapkan dirimu dan jadilah bagian dari perjalanan kami yang penuh inovasi!</p>
            </div>
          </div>

          <div class="flex flex-col gap-8 px-8 md:px-32 2xl:px-96 mt-16">

          <div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
            <div class="flex flex-col justify-center text-center">
              <h2 class="text-2xl font-semibold">OUR VISION</h2>
              <p>Creating an atmosphere and an environment that are comfortable in RPLGDC Laboratorium, creating a more quality assured working conditions & events, working together aswell as expanding the sphere of influence to other IF Faculty laboratoriums and other majors in other faculties, giving a qualified & capable human resources output that are needed in IT World.</p>
            </div>
            <img class="h-96 object-scale-down" src={rocket}/>
          </div>
          
          <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
            <div class="flex flex-col justify-center text-center">
              <h2 class="text-2xl font-semibold">OUR MISSION</h2>
              <p>Creating a clean, fresh and also a comfortable laboratorium environment<br/><br/>
              Giving a more polished and 'quality oriented' laboratorium events & workshops<br/><br/>
              Making collaborations and working together with other laboratoriums, inside or outside of the IF Faculty with an interest in software development<br/><br/>
              Giving an opportunity to learn, propose any possible projects aswell as implementing brainspark or workshop sessions that could stimulate a positive feedback in the IT World.<br/><br/>
              Persuade other laboratorium members to work together with others in any events to achieve a maximized laboratorium performances.</p>
            </div>
            <img class="h-96 object-scale-down" src={planets}/>
          </div>
          
          <div class="flex flex-col lg:flex-row-reverse justify-center items-center gap-4">
            <div class="flex flex-col justify-center text-center">
              <h2 class="text-2xl font-semibold">MEMBER BENEFIT</h2>
              <p>Able to search and learn many new knowledges that previously remained unknown before<br/><br/>
              Meet new bright minds that have the same interest as you in software and/or game development<br/><br/>
              Able to share many knowledges towards other people, inside or outside laboratorium environment<br/><br/>
              Could implement all of the skills and knowledges that are available to development projects<br/><br/>
              Having a place to apply and implement software and/or game development skills<br/><br/>
              Having a place to better focus on research group that are always discussing about the latest topics going in software and/or game development world.</p>
            </div>
            <img class="h-96 object-scale-down" src={astronaut}/>
          </div>
          </div>

          
          
          <img class="w-full h-64 object-cover object-top absolute bottom-0" src={bottom} />
        </div>
    )
  }