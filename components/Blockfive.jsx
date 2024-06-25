import React from 'react'
import Image from 'next/image'

const Blockfive = () => {

    const productCard = [

        {
            id: 1,
            productfig: "/assets/chair.png",
            productLeft: '3 left',
            productName: 'Modern Single Chair',
            productPrice: 'NGN 200,000',
            link: ''

        },
        {
            id: 2,
            productfig: "/assets/dinnerset1.jpg",
            productLeft: '3 left',
            productName: 'Dinner Set',
            productPrice: 'NGN 200,000',
            link: ''
        },

        {
            id: 3,
            productfig: "/assets/dinnerset2.jpg",
            productLeft: '3 left',
            productName: 'Dinner Set',
            productPrice: 'NGN 200,000',
            link: ''
        },

        {
            id: 4,
            productfig: "/assets/dinnerset3.jpg",
            productLeft: '3 left',
            productName: 'Dinner Set',
            productPrice: 'NGN 200,000',
            link: ''
        }


    ]


    return (
        <div className='container mx-auto sm:mb-[100px] pb-[100px]  pt-[70px] px-4 md:px-10 md:max-w-[1600px]'>

            <div className='flex justify-start'>
                <div className=' mb-[10px]'>
                    <h3 className='font-body font-[400] text-[16px] text-secondary-100 text-start'>Market Place</h3>
                    <h1 className='font-body text-black text-[30px] text-start  md:text-[40px] font-bold mt-3 font-top ' >Our Products Up For Sale</h1>
                </div>
            </div>


            <div className='flex flex-wrap justify-center mx-auto gap-5 md:flex-row md:flex-wrap md:gap-4 animate-slideup'>
                {
                    productCard.map(({ id, productLeft, productName, productPrice, productfig, link }) => (

                        <div key={id} className='flex flex-col w-[308px]  h-[370px] shadow-lg rounded-[20px] p-[20px]  border-[1px] border-gray-200 '>

                            <div className='w-[268px] h-[193px] rounded-[12px] overflow-hidden duration-500'>
                                <Image src={productfig} width={268} height={193} style={{ objectFit: "cover" }} alt="Product picture" className='rounded-[12px] ' />
                            </div>


                            <div className=' flex justify-between align-top py-3'>

                                <div>
                                    <p className='font-body font-[600] text-[20px]'>{productName}</p>
                                    <p className=' text-gray-500  text-[16px]'>{productPrice}</p>
                                </div>

                                <div className='flex justify-start '>
                                    <div className='w-2 h-2 bg-secondary-100 rounded-full mt-1'></div>
                                    <p className=' text-[12px] ml-2'>{productLeft}</p>
                                </div>

                            </div>

                            <div className='pt-2'>
                                <button className='w-[268px] h-[51px] rounded-[35px] border-[1px] border-secondary-100 font-body font-[600] text-secondary-100 group-hover:bg-secondary-100 group-hover:text-white'>Add to Cart</button>
                            </div>




                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default Blockfive