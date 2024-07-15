import React from 'react'
import Image from 'next/image'


const courseCard = [

    {
        id: 1,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''

    },
    {
        id: 2,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''
    },

    {
        id: 3,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''
    },

    {
        id: 4,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''
    },

    {
        id: 5,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''
    },

    {
        id: 6,
        coursefig: "/assets/figOne.jpg",
        miniCourseTitle: 'UIUX Design',
        MajorCourseTitle: 'UI Design fo Beginners',
        link: ''
    }
]

const Blocktwo = () => {
    return (
        <div className='container mx-auto sm:mb-[100px] pb-[100px]  pt-[70px] px-4 md:px-10 md:max-w-[1600px]'>

            <div>
                <div className=' mb-[5px]'>
                    <h3 className='font-body font-[400] text-[16px] text-secondary-100 '>Our Courses</h3>
                    <h1 className='font-body text-black text-[30px] text-start  md:text-[40px] font-bold mt-3 font-top' >Our Course Offerings</h1>
                </div>
            </div>
      

            <div className='flex flex-wrap justify-center mx-auto gap-5 md:flex-row md:flex-wrap md:gap-4 animate-slideup'>
                {
                    courseCard.map(({ id, coursefig, miniCourseTitle, MajorCourseTitle, link }) => (

                        <div key={id} className='flex flex-col w-[350px] md:w-[360px] h-[338px] shadow-lg rounded-[20px] px-[20px] py-[24px] border-[1px] border-gray-200 group group-hover:h-[397px] duration-500'>
                            
                            <div className='w-[310px] h-[152px] bg-black rounded-[4px] group-hover:h-[211px] overflow-hidden duration-500'>
                                <Image src={coursefig} width={310} height={152} style={{objectFit: "cover"}} alt="Course picture" className='rounded-[4px] ' />
                            </div>


                            <div className='pt-2'>
                                <div className='flex justify-start '>
                                    <div className='w-2 h-2 bg-secondary-100 rounded-full mt-1'></div>
                                    <p className='font-body font-[500] text-[12px] ml-2'>{miniCourseTitle}</p>
                                </div>

                                <p className='font-body font-[600] text-[20px]'>{MajorCourseTitle}</p>
                            </div>

                            <div className='pt-2'>
                                <button className='w-[310px] h-[51px] rounded-[35px] border-[1px] border-secondary-100 font-body font-[600] text-secondary-100 group-hover:bg-secondary-100 group-hover:text-white'>Eroll Now</button>
                            </div>




                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default Blocktwo