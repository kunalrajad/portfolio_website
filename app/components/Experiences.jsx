import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Experiences() {
  return (
    <div id='experiences' className='w-full px-[12%] py-10
    scrol-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>
            Experiences</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.mckinsey} alt='mckinsey'
                className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <h3 className='mb-2 text-center text-3xl font-Ovo'>
                    McKinsey & Company</h3>
                <h3 className='mb-2 text-center text-gray-700 text-2xl font-Ovo'>
                    Leadership Development Workshop</h3>
                <h3 className='mb-5 text-center text-2xl font-Ovo'>
                    Boston, MA <span className='ml-20'>February 2024</span>
                </h3>
                <p className='mb-10 max-w-2xl font-Ovo'>
                One of 30 students selected for interactive trainings on problem-solving, information synthesizing,
                and leadership.
                <br />
                Spent a day in the Boston office of McKinsey networking with consultants and analysts in the firm
                to learn about how consultants operate.
                </p>
            </div>
        </div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='flex-1'>
                <h3 className='mb-2 text-center text-3xl font-Ovo'>
                    MIT Institute for Data, Systems, and Society</h3>
                <h3 className='mb-2 text-center text-gray-700 text-2xl font-Ovo'>
                    Research Assistant</h3>
                <h3 className='mb-5 text-center text-2xl font-Ovo'>
                    Cambridge, MA <span className='ml-20'>(February 2024 - August 2024)</span>
                </h3>
                <p className='mb-10 max-w-2xl font-Ovo'>
                Worked with Professor Habib Noorbhai in the MIT IDSS department to identify key factors
                that drive optimal health and well-being.
                <br />
                Created an algorithm to quantify these key factors to create a comprehensive assessment
                that could calculate health score.
                <br />
                See research paper below
                </p>
                <a href="/research-paper-2024" download
                className='px-10 py-3 border rounded-full border-gray-900 flex justify-center items-center gap-2'
                >Research Paper <Image src={assets.download_icon} alt='download'
                className='w-4'/></a>
            </div>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.idss} alt='idss'
                className='w-full rounded-3xl'/>
            </div>
        </div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.blueprint} alt='blueprint'
                className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <h3 className='mb-2 text-center text-3xl font-Ovo'>
                    Blueprint</h3>
                <h3 className='mb-2 text-center text-gray-700 text-2xl font-Ovo'>
                    Software Engineering Intern</h3>
                <h3 className='mb-5 text-center text-2xl font-Ovo'>
                    Chicago, IL <span className='ml-20'>(June 2024 - August 2024)</span>
                </h3>
                <p className='mb-10 max-w-2xl font-Ovo'>
                Worked remotely as a software engineering intern. Improved the company's
                webapp using Javascript and React Js and working with the engineering team through
                GitHub and paired programming.
                <br />
                Full-Stack Development but mostly a focus on developing the UI in frontend development.
                </p>
            </div>
        </div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='flex-1'>
                <h3 className='mb-2 text-center text-3xl font-Ovo'>
                    MIT Electrical Engineering and Computer Science Department</h3>
                <h3 className='mb-2 text-center text-gray-700 text-2xl font-Ovo'>
                    Lab Assistant</h3>
                <h3 className='mb-5 text-center text-2xl font-Ovo'>
                    Cambridge, MA <span className='ml-20'>(August 2024 - Present)</span>
                </h3>
                <p className='mb-10 max-w-2xl font-Ovo'>
                Chosen from a pool of 300 CS students at MIT to staff office hours to support students
                taking fundamental programming classes.
                <br />
                Main tasks are guiding students in debugging their code and checking to ensure that once
                the students are finished implementing their code, they fully understand the algorithms they used.
                </p>
            </div>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.eecs} alt='eecs'
                className='w-full rounded-3xl'/>
            </div>
        </div>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.ibm} alt='ibm'
                className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <h3 className='mb-2 text-center text-3xl font-Ovo'>
                    IBM (International Business Machines)</h3>
                <h3 className='mb-2 text-center text-gray-700 text-2xl font-Ovo'>
                    Incoming Associate Consultant Intern</h3>
                <h3 className='mb-5 text-center text-2xl font-Ovo'>
                    Chicago, IL <span className='ml-20'>(May 2025 - August 2025)</span>
                </h3>
                <p className='mb-10 max-w-2xl font-Ovo'>
                Will be working out of the Chicago office throughout the summer, while traveling to
                various locations based on client need.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Experiences
