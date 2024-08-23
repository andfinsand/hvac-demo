"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        findUs: "",
        message: "",
    });
    const [showSuccessIcon, setShowSuccessIcon] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Web3Forms
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                access_key: "",
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                findUs: formData.findUs,
                message: formData.message,
                redirect: "https://web3forms.com/success"
            })
        });

        const result = await response.json();

        // Show success icon on submit
        setShowSuccessIcon(true);

    };

    return (
        <div className="self-center w-full lg:w-1/2 max-w-[666px] lg:h-[655px]">
                <div className="font-semibold tracking-wider">CONTACT</div>
                <h2 className="text-[33px] xl:text-[45px] font-extrabold mb-5">Get in Touch</h2>
                <p className="text-neutral-600 mb-10">
                    Get in touch with us today to schedule your HVAC service or to learn more about our offerings. We are here to ensure your indoor environment is comfortable year-round.
                </p>

            {/* Form and success icon */}
            {!showSuccessIcon ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                            <div>
                                <label htmlFor="name" className="block font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 font-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 font-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                            <div>
                                <label htmlFor="phone" className="block font-bold mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 font-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                            </div>
                            <div>
                                <label htmlFor="findUs" className="block font-bold mb-2">
                                    How Did You Find Us
                                </label>
                                <input
                                    type="text"
                                    id="findUs"
                                    name="findUs"
                                    placeholder="How did you find us?"
                                    value={formData.findUs}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 font-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary"
                                />
                            </div>
                        </div>
                        <div className="mb-11">
                            <label htmlFor="message" className="block font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write message..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 font-light rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-secondary"
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="bg-secondary rounded-lg font-semibold text-black w-full py-3 hover:bg-yellow-400 hover:text-white duration-200"
                        >
                            SUBMIT MESSAGE
                        </button>

                    </form>
                </>
            ) : (
                <div className="flex flex-col items-center">
                    <Image
                        src="/icon-success.webp"
                        alt="Success Icon"
                        width={512}
                        height={512}
                        className="w-40 my-7"
                    />
                    <p className="text-2xl xl:text-3xl font-bold mb-2">Thank You!</p>
                    <p className="text-zinc-400 text-center text-sm mb-7">Your message has been received.</p>
                    <p className="text-zinc-400 text-sm text-center">In the meantime, feel free to <span className="font-bold text-blue-700"><Link href="/services">learn</Link></span> more about our services.</p>
                </div>
            )}
        </div>
    );
};
