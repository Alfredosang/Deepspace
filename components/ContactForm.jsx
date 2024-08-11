import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6"

const ContactForm = () => {
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
        <form onSubmit={handleSubmit} className=" mx-auto p-4">
            <div>
                <p className='font-body font-[600] text-[40px]'>Get In Touch</p>
            </div>
            <div className='flex flex-wrap gap-7'>

                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 font-body font-[600] text-[14px]">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="John"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-gray-700 font-body font-[600] text-[14px]">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        placeholder="Doe"
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                        required
                    />
                </div>
            </div>

            <div className='flex flex-wrap gap-7'>
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
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-body font-[600] text-[14px]">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Say something"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-100 focus:border-secondary-100 sm:text-sm"
                    rows="4"
                    required
                ></textarea>
            </div>
            <div className='flex justify-end'>
                <button
                    type="submit"
                    className="rounded-full w-[192px] h-[48px] bg-secondary-100 text-white py-3 px-4  hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-100  font-body font-[500] text-[14px] flex align-middle "
                >
                    <div className='flex'>
                        <p>Send Message</p>
                        <FaArrowRight className='text-white text-[20px] pt-1  ml-7' />
                    </div>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
