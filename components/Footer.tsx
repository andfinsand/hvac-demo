import Link from "next/link";
import Image from "next/image"
import Socials from "./Socials"

export default function Footer() {
    return (
        <div className="flex flex-col bg-[#393939] text-white gap-20 px-10 pt-20 pb-7">

            {/* Logo and content */}
            <div className="flex flex-col lg:flex-row justify-between self-center w-full max-w-screen-xl">
                {/* Logo and socials */}
                <div className="flex flex-col lg:justify-start self-center lg:self-start w-52 lg:w-64 mb-20">
                    <Image
                        src="/logo-example-light.png"
                        alt="Company logo"
                        width={446}
                        height={91}
                        className="mb-5 lg:mb-7"
                    />
                    <div className="flex justify-center lg:justify-start gap-3">
                        <Socials
                            link={"https://www.facebook.com/"}
                            src={"/icon-facebook.svg"}
                            alt={"Facebook icon"}
                        />
                        <Socials
                            link={"https://www.instagram.com/"}
                            src={"/icon-instagram.svg"}
                            alt={"Instagram icon"}
                        />
                        <Socials
                            link={"https://x.com/"}
                            src={"/icon-x.svg"}
                            alt={"X icon"}
                        />
                        <Socials
                            link={"https://www.yelp.com/"}
                            src={"/icon-yelp.svg"}
                            alt={"Yelp icon"}
                        />
                    </div>
                </div>

                {/* Footer content */}
                <div className="flex flex-wrap justify-between self-center w-full max-w-[450px] sm:max-w-[600px] gap-14 md:flex-row ml-16 sm:ml-0">
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-lg mb-3">INFORMATION</h2>
                        <div className="w-[90px] h-0.5 bg-secondary mb-3"></div>
                        <div className="mb-3">
                            <Link href="/" className="duration-100 hover:text-[#A0A0A0]">Home</Link>
                        </div>
                        <div className="mb-3">
                            <Link href="/about" className="duration-100 hover:text-[#A0A0A0]">About Us</Link>
                        </div>
                        <div className="mb-3">
                            <Link href="/services" className="duration-100 hover:text-[#A0A0A0]">Services</Link>
                        </div>
                        <div className="mb-3">
                            <Link href="/map" className="duration-100 hover:text-[#A0A0A0]">Map</Link>
                        </div>
                        <div>
                            <Link href="/contact" className="duration-100 hover:text-[#A0A0A0]">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-lg mb-3">SERVICES</h2>
                        <div className="w-[90px] h-0.5 bg-secondary mb-3"></div>
                        <div className="mb-3">
                            <Link href="/services#heating" className="duration-100 hover:text-[#A0A0A0]">Heating</Link>
                        </div>
                        <div className="mb-3">
                            <Link href="/services#ac" className="duration-100 hover:text-[#A0A0A0]">Air Conditioning</Link>
                        </div>
                        <div className="mb-3">
                            <Link href="/services#ducting" className="duration-100 hover:text-[#A0A0A0]">Ducting</Link>
                        </div>
                        <div>
                            <Link href="/services#refrigeration" className="duration-100 hover:text-[#A0A0A0]">Refrigeration & Appliance</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-lg mb-3">CONTACT</h2>
                        <div className="w-[90px] h-0.5 bg-secondary mb-3"></div>
                        <div className="flex flex-col leading-tight mb-3">
                            <p>First Address Line</p>
                            <p>Second Address Line</p>
                            <p>City State Zip</p>
                        </div>
                        <a href="tel:555-555-5555" className="mb-3 duration-100 hover:text-[#A0A0A0]">(555) 555-5555</a>
                        <a href="mailto:info@companyname.app" className="duration-100 hover:text-[#A0A0A0]">Click to Email</a>
                    </div>
                </div>
            </div>

            {/* DNA Labs info */}
            <div className="flex flex-col lg:flex-row self-center text-center min-w-[297px]">
                <div>Designed and Developed by <span className="text-secondary mr-1">DNA Labs</span></div>
                <div>Copyright 2024 - Present</div>
            </div>
        </div>
    );
}
