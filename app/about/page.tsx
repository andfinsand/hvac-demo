"use client"

import { useEffect } from "react";
import Image from "next/image"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import ContactBanner from "../../components/ContactBanner"

export default function About() {
    useEffect(() => {

        // Parallax effect for banner image
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner-about');
            let speed = 0.5;

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
                    <div id="banner-about" className="page-banner-image-1 w-full h-full"></div>
                    <h1 className="self-center absolute text-[35px] md:text-[60px] font-bold tracking-tight mt-5 lg:mt-0">About Us</h1>
                </div>

                {/* Content container */}
                <div className="flex flex-col bg-white">
                    <div className="flex flex-col self-center max-w-screen-xl px-4 py-16 lg:pt-28 lg:pb-36">
                         {/* About section */}
                        <div className="flex flex-col lg:flex-row gap-12 xl:gap-[70px]">
                            {/* Image */}
                            <div className="flex justify-center max-w-[530px] lg:max-w-[650px] lg:w-[60%] lg:h-[530px]">
                                <Image
                                    src="/about-us.webp"
                                    alt="Example of two HVAC technicians"
                                    width={750}
                                    height={750}
                                    className="object-cover rounded-3xl w-full lg:max-h-[530px]"
                                />
                            </div>
                            {/* Company description */}
                            <div className="flex flex-col self-center max-w-[550px] lg:max-w-none lg:w-1/2">
                                <div className="font-semibold tracking-wider">ABOUT US</div>
                                <h2 className="text-[33px] xl:text-[45px] font-extrabold mb-5">Company Name</h2>
                                <p className="text-neutral-600 mb-5">We have been keeping homes and businesses comfortable across San Francisco, Oakland, San Jose, and the surrounding communities. As a family-owned and operated company, we understand the unique climate challenges of the Bay Area and are committed to providing top-notch heating, ventilation, and air conditioning services.</p>
                                <p className="text-neutral-600 mb-9">Our team of certified technicians brings years of experience and ongoing training to every job, ensuring we stay ahead of the latest HVAC technologies and energy-efficient solutions. We pride ourselves on our attention to detail, punctuality, and transparent pricing.</p>
                                <div className="self-start">
                                    <PrimaryButton href={"/services"} label={"OUR SERVICES"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact information section */}
                    <div className="flex flex-col">
                        <ContactBanner />
                    </div>
                </div>
            </main>
        </>
    );
}
