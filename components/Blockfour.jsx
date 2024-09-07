import React from 'react'
import Image from 'next/image'

const Blockfour = () => {

    const brandLogo = [
        {
            id: 1,
            logoImage: "/assets/logo1.png"
        },

        {
            id: 2,
            logoImage: "/assets/logo2.png"
        },

        {
            id: 3,
            logoImage: "/assets/logo3.png"
        },

       
    ]
    return (
        <div className='container mx-auto flex justify-center py-20'>

            <div className='w-[400px] h-[400px] md:w-[800px] md:h-[400px] lg:w-[1060px] lg:h-[297px] shadow-xl p-10 rounded-[32px]'>

                <div className='flex flex-col'>
                    <div className='flex flex-col justify-items-center pb-4'>
                        <p className='font-body text-[16px] text-secondary-100 font-[500] text-center '>Collaborators</p>
                        <p className='font-body text-[40px] font-[700] text-center'>Our Partners</p>
                    </div>


                    <div className='flex flex-wrap justify-center items-center align-bottom mx-auto gap-5 md:flex-row md:flex-wrap md:gap-10 animate-slideup'>
                        {
                            brandLogo.map(({ id, logoImage }) => (

                                <div key={id} >


                                    {/* <div>{logoImage}</div> */}

                                    <Image src={logoImage} width={152} height={40} style={{objectFit: "cover"}} alt="Brand logo" />



                                </div>

                            ))
                        }

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Blockfour