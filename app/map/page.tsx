"use client"

import { useEffect } from "react";
import Image from "next/image"
import MajorCities from "../../components/MajorCities"
import ContactBanner from "../../components/ContactBanner"

export default function Map() {
    useEffect(() => {

        // Parallax effect for banner image
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner-map');
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
                    <div id="banner-map" className="page-banner-image-2 w-full h-full"></div>
                    <h1 className="self-center absolute text-[35px] md:text-[60px] font-bold tracking-tight mt-5 lg:mt-0">Service Area</h1>
                </div>

                {/* Content container */}
                <div className="flex justify-center bg-white">
                    <div className="flex flex-col w-full max-w-screen-xl px-4 py-16 lg:pt-28 lg:pb-36">
                        {/* Service area section */}
                        <div className="flex flex-col">
                            <div className="self-center font-semibold tracking-wider mb-3">PROUDLY SERVING</div>
                            <h2 className="text-center text-[33px] xl:text-[45px] font-extrabold leading-tight mb-10">HVAC Solutions Across the Bay Area</h2>
                            {/* List of cities container */}
                            <div className="flex flex-col mb-16 lg:mb-20">
                                <div className="flex flex-col xs:flex-row justify-center gap-2 mb-10">
                                    {/* Image of map pin icon */}
                                    <Image
                                        src="/map-pin.svg"
                                        alt="Map pin icon"
                                        width={50}
                                        height={50}
                                        className="self-center w-16 xs:w-10"
                                    />
                                    <div className="self-center font-light text-md xs:text-xl">
                                        Major cities include but are not limited to:
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-10 md:gap-12 lg:gap-28">
                                    {/* Left column */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 md:gap-12 lg:gap-28">
                                        <div className="flex flex-col self-center gap-10">
                                            <MajorCities label={"San Francisco"} />
                                            <MajorCities label={"San Jose"} />
                                        </div>
                                        <div className="flex flex-col self-center gap-10">
                                            <MajorCities label={"Oakland"} />
                                            <MajorCities label={"Fremont"} />
                                        </div>
                                    </div>
                                    {/* Right column */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 md:gap-12 lg:gap-28">
                                        <div className="flex flex-col self-center gap-10">
                                            <MajorCities label={"Berkeley"} />
                                            <MajorCities label={"Santa Clara"} />
                                        </div>
                                        <div className="flex flex-col self-center gap-10">
                                            <MajorCities label={"Hayward"} />
                                            <MajorCities label={"Sunnyvale"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Google map */}
                            <div className="self-center w-full max-w-[1280px] overflow-hidden rounded-t-3xl">
                                <iframe
                                    src="https://www.google.com/maps/d/u/0/embed?mid=1y_lP8XNvVdOYtP0dp2nVexhiL9S8ptY&ehbc=2E312F&noprof=1"
                                    width="1280"
                                    height="680"
                                    className="w-full rounded-b-3xl -mt-[60px]" //More margin is required for Firefox browsers
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact information section */}
                <div className="flex flex-col">
                    <ContactBanner />
                </div>
            </main>
        </>
    );
}
