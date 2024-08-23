"use client"

import { useEffect } from "react";
import LayeredImages from "../../components/LayeredImages"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import ServiceCardLarge from "../../components/ServiceCardLarge"
import ContactBanner from "../../components/ContactBanner"

export default function Services() {
    useEffect(() => {

        // Parallax effect for banner image
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let parallaxElement = document.getElementById('banner-services');
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
                    <div id="banner-services" className="page-banner-image-1 w-full h-full"></div>
                    <h1 className="self-center absolute text-[35px] md:text-[60px] font-bold tracking-tight mt-5 lg:mt-0">Our Services</h1>
                </div>

                {/* Content container */}
                <div className="flex flex-col bg-white">
                    <div className="flex flex-col self-center max-w-screen-xl px-4 py-16 lg:pt-28 lg:pb-36">
                        {/* Main service section */}
                        <div className="flex flex-col-reverse lg:flex-row gap-12 xl:gap-[70px]">
                            {/* Service description */}
                            <div className="flex flex-col self-center max-w-[550px] lg:max-w-none lg:w-1/2">
                                <div className="font-semibold tracking-wider mb-3">HVAC SOLUTIONS</div>
                                <h2 className="text-[33px] xl:text-[45px] font-extrabold leading-none mb-7">Heating, Cooling, and More...</h2>
                                <p className="text-neutral-600 mb-9">Our HVAC solutions are tailored to meet local needs. We offer energy-efficient heating and cooling systems, expert furnace installations, and comprehensive duct cleaning services to improve your indoor air quality. Our skilled technicians are equipped to handle all major brands and models, ensuring your HVAC system operates at peak performance.</p>
                                <div className="self-start">
                                    <PrimaryButton href={"/contact"} label={"GET IN TOUCH"} />
                                </div>
                            </div>
                            {/* Image */}
                            <LayeredImages />
                        </div>
                    </div>

                    {/* Service cards */}
                    <div className="flex flex-col self-center max-w-screen-xl gap-16 lg:gap-36 px-4 pb-16 lg:pb-36">
                        <ServiceCardLarge
                            id={"heating"}
                            image={"/service-heating.webp"}
                            icon={"/icon-heat.webp"}
                            label={"Heating"}
                            content={"We understand the importance of a properly functioning heating system, especially during colder seasons. Whether you need a new heating system installation or routine maintenance to optimize performance, trust us to keep your home and business comfortable throughout the year."}
                            installation={true}
                            repair={true}
                        />
                        <ServiceCardLarge
                            id={"ac"}
                            image={"/service-ac.webp"}
                            icon={"/icon-ac.webp"}
                            label={"Air Conditioning"}
                            content={"When temperatures rise, a reliable air conditioning system is essential for keeping your home cool. Whether you need a new AC unit installed or repairs for your existing system, we’re here to help. Trust us to ensure your air conditioning runs efficiently, providing a refreshing escape from the summer heat."}
                            installation={true}
                            repair={true}
                        />
                        <ServiceCardLarge
                            id={"ducting"}
                            image={"/service-ducting.webp"}
                            icon={"/icon-duct.webp"}
                            label={"Ducting"}
                            content={"Proper ductwork is vital for indoor air quality and energy efficiency. If you notice poor airflow, uneven temperatures, or higher energy bills, it may be time for replacement or installation. We ensure your ductwork is installed correctly, enhancing air circulation and efficiency in your home."}
                            installation={true}
                            repair={false}
                        />
                        <ServiceCardLarge
                            id={"refrigeration"}
                            image={"/service-fridge.webp"}
                            icon={"/icon-fridge.webp"}
                            label={"Refrigeration & Appliance"}
                            content={"Faulty refrigeration can disrupt your routine and lead to spoiled food. Whether your refrigerator isn’t cooling, your freezer is malfunctioning, or you need maintenance, we’ve got you covered. Trust our expertise to restore your appliances, preserving freshness and extending their lifespan."}
                            installation={false}
                            repair={true}
                        />
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
