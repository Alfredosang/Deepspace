import Blocksix from '@/components/Blocksix'
import Footer from '@/components/Footer'
import Projectgallery from '@/components/Projectgallery'
import React from 'react'
import Image from 'next/image'

const Deephackerspace = () => {
  return (
    <div>
        <div className='container mx-auto'>

        <div className='flex justify-center py-16'>
                    <div className=''>
                        <div className='relative min-w-[400px] max-h-[700px]md:w-[900px] md:h-[500px]  lg:w-[1280px] lg:h-[400px] rounded-[100px]  '>
                            <Image src="/assets/dhs.jpeg" layout={'fill'} objectFit="cover" alt="About Us Hero Image" />



                            <div className='absolute bottom-[10%] left-[150px] z-50 max-w-[706px] '>
                                <p className='font-[600] text-[80px] font-body  text-white leading-[80px]'>Deep Hackerspace</p>
                                <p className=' text-white max-w-[717px] font-body font-[400] text-[16px] '>  Were creative expressions knows no bounds.</p>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
        <div className=' mx-auto'>

        <Projectgallery/>
        <Blocksix/>
        </div>
        <Footer/>
    </div>
  )
}

export default Deephackerspace