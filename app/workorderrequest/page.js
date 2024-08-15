'use client';

import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

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
            <div className='container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
                <div className='relative w-full max-w-[1279px] h-auto py-8 bg-red-50 rounded-full flex flex-col justify-center items-center mb-7 text-center'>
                    <h2 className='font-body font-[600] text-[24px] sm:text-[32px] lg:text-[40px] text-black'>Work Order Request</h2>
                    <p className='font-inter font-[500] text-[14px] sm:text-[15px] text-black px-4'>
                        Please contact us at +2348157506868 or info@deepspace.africa for more enquiries.
                        We aim to get back to you within 24 hours after you submit this form.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full max-w-[1014px] mx-auto p-4 sm:p-8 rounded-[20px] border-[1px] border-gray-200 mb-16">
                    <div className='mb-6'>
                        <p className='font-body font-[600] text-[24px] text-center sm:text-left'>Fill In Your Details</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
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
                            <label htmlFor="invoiceNumber" className="block text-gray-700 font-body font-[600] text-[14px]">
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
                            <label htmlFor="date" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="FullName" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="FullName"
                                name="FullName"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
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
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="projectType" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Project Type
                            </label>
                            <input
                                type="text"
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                placeholder="Select"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="deliveryType" className="block text-gray-700 font-body font-[600] text-[14px]">
                                Delivery Type
                            </label>
                            <input
                                type="text"
                                id="deliveryType"
                                name="deliveryType"
                                placeholder="Select"
                                value={formData.deliveryType}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-body font-[600] text-[14px]">
                            Delivery Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="fabricationImage" className="block text-gray-700 font-body font-[600] text-[14px]">
                            Link of Fabrication Image
                        </label>
                        <input
                            type="url"
                            id="fabricationImage"
                            name="fabricationImage"
                            value={formData.fabricationImage}
                            onChange={handleChange}
                            placeholder="http://"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-body font-[600] text-[14px]">
                            Describe Proposed Project and Include Additional Requests
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="rounded-full w-[192px] h-[48px] bg-secondary-100 text-white py-3 px-4 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-100 font-body font-[500] text-[14px] flex justify-center items-center"
                        >
                            <div className='flex justify-center items-center gap-5'>
                                <p>Submit</p>
                                <FaArrowRight className='text-white text-[20px]' />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default WorkOrderRequest;
