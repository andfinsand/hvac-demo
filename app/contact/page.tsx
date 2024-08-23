"use client"

import { useEffect } from "react";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
    useEffect(() => {

        // Parallax effect for banner image
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner-contact');
            let speed = 0.5; // Adjusted speed for smoother effect

            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(${scrollPosition * speed}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <main className="flex flex-col text-black">

                {/* Banner section */}
                <div className="flex justify-center text-black w-full h-[280px] lg:h-[450px]">
                    <div id="banner-contact" className="page-banner-image-1 w-full h-full"></div>
                    <h1 className="self-center absolute text-[35px] md:text-[60px] font-bold tracking-tight mt-5 lg:mt-0">Contact Us</h1>
                </div>

                {/* Content container */}
                <div className="flex flex-col bg-white">
                    <div className="flex self-center max-w-screen-xl px-4 py-16 lg:pt-28 lg:pb-36">
                        {/* Contact form container */}
                        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 xl:gap-24">

                            <ContactForm />

                            {/* Image container and contact information */}
                            <div className="flex flex-col-reverse lg:flex-col justify-between self-center w-full lg:w-1/2 h-[90%]">
                                {/* Image */}
                                <Image
                                    src="/contact-page-image.webp"
                                    alt="A smiling woman with safety gear"
                                    width={1170}
                                    height={878}
                                    priority={true}
                                    className="object-cover rounded-3xl h-[280px] xs:h-[350px] sm:h-[520px] mb-0 lg:mb-12 w-full"
                                />
                                {/* Contact info */}
                                <div className="flex flex-col xs:flex-row justify-between bg-lightGray rounded-3xl w-full xs:h-[160px] mb-12 lg:mb-0 px-8 xl:px-12 py-5">
                                    {/* Left column */}
                                    <div className="flex flex-col justify-between mb-6 xs:mb-0">
                                        <div className="mb-6 xs:mb-3">
                                            <div className="font-bold">Email</div>
                                            <div>example@example.com</div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Phone</div>
                                            <div>555-555-5555</div>
                                        </div>
                                    </div>
                                    {/* Right column */}
                                    <div className="flex flex-col">
                                        <div className="font-bold mb-0.5">Address</div>
                                        <div className="leading-tight">
                                            <div>First Address Line</div>
                                            <div>Second Address Line</div>
                                            <div>City State Zip</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
