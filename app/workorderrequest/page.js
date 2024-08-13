'use client'
import Footer from '@/components/Footer'
import React from 'react'
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6"

const WorkOrderRequest = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
    };

    return (
        <div className='pt-[100px]'>
            <div className='container mx-auto flex flex-col justify-center items-center mt-5'>
                <div className='relative w-[1279px] h-[150px] rounded-full bg-red-50 flex  flex-col justify-center items-center mb-7'>
                    <h2 className='font-body font-[600] text-[40px] text-black'>Work Order Request</h2>
                    <p className='font-[inter] font-[500] text-[15px] text-black'>Please contact us at +2348157506868 or info@deepspace.africa for more enquires. We aim to get back to you within 24 hours after you submit this form.</p>
                </div>

                <form onSubmit={handleSubmit} className=" mx-auto p-4 w-[1014px] rounded-[20px] border-[1px] border-gray-200 mb-16">
                    <div>
                        <p className='font-body font-[600] text-[24px]'>Fill In Your Details</p>
                    </div>
                    <div className=''>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="@com"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Invoice Number
                            </label>
                            <input
                                type="text"
                                id="invoiceNumber"
                                name="invoiceNumber"
                                value={formData.firstName}
                                placeholder="0123"
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.lastName}
                                placeholder="Doe"
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>
                    </div>


                    <div className='flex flex-wrap justify-between gap-7'>

                        <div className="mb-4">
                            <label htmlFor="Full Name" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Full Name
                            </label>
                            <input
                                type="name"
                                id="FullName"
                                name="FullName"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="mt-1 block w-[450px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+234"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-[450px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                    </div>



                    <div className='flex flex-wrap justify-between gap-7'>

                        <div className="mb-4">
                            <label htmlFor="Project Type " className="block text-gray-700 font-body font-[600] text-[14px]">
                            Project Type 
                            </label>
                            <input
                                type="select"
                                id="projectType"
                                name="select"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="select"
                                className="mt-1 block w-[450px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Delivery Type" className="block text-gray-700 font-body font-[600] text-[14px]">
                            Delivery Type 
                            </label>
                            <input
                                type="select"
                                id="phone"
                                name="phone"
                                placeholder="select"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-[450px]  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-body font-[600] text-[14px]">
                        Delivery Address 
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-body font-[600] text-[14px]">
                        Link of fabrication Image
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="http:/"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            required
                        />
                    </div>

                    

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-body font-[600] text-[14px]">
                        Describe Proposed Project and Include additional requests
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder=""
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="rounded-full w-[192px] h-[48px] bg-secondary-100 text-white py-3 px-4  hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-100  font-body font-[500] text-[14px] flex justify-center items-center "
                        >
                            <div className='flex justify-center items-center gap-5'>
                                <p>Submit</p>
                                <FaArrowRight className='text-white text-[20px] ' />
                            </div>
                        </button>
                    </div>
                </form>


            </div>
            <Footer />

        </div>
    )
}

export default WorkOrderRequest