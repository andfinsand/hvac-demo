import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../components/buttons/PrimaryButton"
import LayeredImages from "../components/LayeredImages"
import ServiceCardSmall from "../components/ServiceCardSmall"
import LazyMap from "../components/LazyMap"
import ReviewCard from "../components/ReviewCard"
import ContactBanner from "../components/ContactBanner"

export default function Home() {
  return (
    <>




      <main className="flex flex-col text-black">




          {/* Hero background image */}
          <div className="hero-image"></div>




          {/* Hero container */}
          <div className="flex flex-col lg:flex-row justify-center gap-20 h-full lg:h-[80vh] min-h-[970px] lg:min-h-[700px] pt-24 xs:pt-0 lg:pt-12 px-4">

            {/* Left Column */}
            <div className="flex flex-col self-center">
              {/* Content */}
              <div className="flex flex-col items-center xs:px-16 lg:px-5">
                <h1 className="text-center lg:text-start text-[36px] md:text-[45px] font-bold leading-tight tracking-tight max-w-[480px] mb-10">Your Trusted Bay Area <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">HVAC</span> Experts</h1>
                {/* Mobile hero image */}
                <Image
                  src="/hero-image.webp"
                  alt="Image of an infrared thermal imaging camera held up to an industrial fan for temperature measurement."
                  width={1600}
                  height={1131}
                  priority={true}
                  className="self-center flex lg:hidden object-cover rounded-full w-80 lg:w-[420px] h-80 lg:h-[420px] mb-12"
                />
                <p className="text-center lg:text-start text-lg leading-snug max-w-[450px] lg:max-w-[480px] mb-14">Affordable, high-performance HVAC solutions for your home or business with expert heating, cooling, ducting, and refrigeration services.</p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col xs:flex-row self-center lg:self-start gap-3 xs:gap-7 mr-0 px-4">
                <PrimaryButton href={"/about"} label={"WHO WE ARE"} />
                <Link href="/contact">
                  <button className="bg-white font-semibold rounded-lg w-[180px] py-3 hover:bg-black hover:text-white duration-200">Get in Touch</button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <Image
              src="/hero-image.webp"
              alt="Image of an infrared thermal imaging camera held up to an industrial fan for temperature measurement."
              width={1600}
              height={1131}
              priority={true}
              className="self-center hidden lg:flex object-cover rounded-full w-80 lg:w-[420px] h-80 lg:h-[420px]"
            />
          </div>




          {/* Transition container (Service banner) */}
          <div className="flex bg-gradient-to-t from-blue-600 to-blue-500 justify-center shadow-custom w-full z-10 h-16 xs:h-20 md:h-24  lg:mb-0">
            <div className="self-center text-md xs:text-2xl md:text-3xl font-semibold text-white">Years of Experience | Top-Rated Service</div>
          </div>




          {/* Main content container */}
          <div className="flex flex-col bg-white">




            {/* First half */}
            <div className="flex flex-col self-center gap-16 lg:gap-36 px-4 my-16 w-full max-w-screen-xl lg:my-36">

              {/* About section */}
              <div className="flex flex-col lg:flex-row gap-12 xl:gap-[70px]">
                <div className="flex self-center max-w-[530px] lg:max-w-[650px] lg:w-[60%]">
                  <Image
                    src="/about-us.webp"
                    alt="Example of two HVAC technicians"
                    width={750}
                    height={750}
                    className="object-cover justify-center rounded-3xl shadow-xl max-h-[420px] lg:max-h-[530px]"
                  />
                </div>
                <div className="flex flex-col self-center max-w-[550px] lg:w-1/2">
                  <div className="font-semibold tracking-wider">ABOUT US</div>
                  <h2 className="text-[33px] xl:text-[45px] font-extrabold mb-5">Company Name</h2>
                  <p className="text-neutral-600 mb-5">We have been keeping homes and businesses comfortable across San Francisco, Oakland, San Jose, and the surrounding communities. As a family-owned and operated company, we understand the unique climate challenges of the Bay Area and are committed to providing top-notch heating, ventilation, and air conditioning services.</p>
                  <p className="text-neutral-600 mb-9">Our team of certified technicians brings years of experience and ongoing training to every job, ensuring we stay ahead of the latest HVAC technologies and energy-efficient solutions. We pride ourselves on our attention to detail, punctuality, and transparent pricing.</p>
                  <div className="self-start">
                    <PrimaryButton href={"/about"} label={"MORE ABOUT US"} />
                  </div>
                </div>
              </div>

              {/* Detail about a service - SEO keyword content */}
              <div className="flex flex-col-reverse lg:flex-row gap-12 xl:gap-[70px]">
                <div className="flex flex-col self-center max-w-[550px] lg:w-1/2">
                  <div className="font-semibold tracking-wider mb-3">HVAC SOLUTIONS</div>
                  <h2 className="text-[33px] xl:text-[45px] font-extrabold leading-none mb-7">Heating, Cooling, and More...</h2>
                  <p className="text-neutral-600 mb-9">Our HVAC solutions are tailored to meet local needs. We offer energy-efficient heating and cooling systems, expert furnace installations, and comprehensive duct cleaning services to improve your indoor air quality. Our skilled technicians are equipped to handle all major brands and models, ensuring your HVAC system operates at peak performance.</p>
                  <div className="self-start">
                    <PrimaryButton href={"/services"} label={"OUR SERVICES"} />
                  </div>
                </div>
                <LayeredImages />
              </div>

              {/* Services container */}
              <div className="flex flex-col self-center text-center w-full">
                {/* Services */}
                <div className="font-semibold tracking-wider z-10 mb-2">OUR SERVICES</div>
                <h2 className="self-center text-[33px] xl:text-[45px] font-extrabold leading-tight z-10 mb-16 lg:mb-20">What We Can Offer You</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row self-center gap-8 lg:gap-5 xl:gap-8 lg:w-full lg:max-w-screen-xl">
                  <ServiceCardSmall
                    href="/services#heating"
                    icon="/icon-heat-small.webp"
                    label="Heating"
                    installation={true}
                    repair={true}
                  />
                  <ServiceCardSmall
                    href="/services#ac"
                    icon="/icon-ac-small.webp"
                    label="Air Conditioning"
                    installation={true}
                    repair={true}
                  />
                  <ServiceCardSmall
                    href="/services#ducting"
                    icon="/icon-duct-small.webp"
                    label="Ducting"
                    installation={true}
                    repair={false}
                  />
                  <ServiceCardSmall
                    href="/services#refrigeration"
                    icon="/icon-fridge-small.webp"
                    label="Refrigeration & Appliance"
                    installation={false}
                    repair={true}
                  />
                </div>
              </div>

            </div>




            {/* Reviews container */}
            <div className="service-banner-image relative text-white flex flex-col self-center text-center w-full px-4 pt-16 lg:pt-20 pb-16 lg:pb-20">
              {/* Dark layer */}
              <div className="absolute top-0 left-0 bg-black opacity-20 w-full h-full"></div>
              {/* Reviews container */}
              <div className="flex flex-col self-center text-center max-w-screen-xl z-10">
                <div className="font-semibold tracking-wider mb-2">OUR REVIEWS</div>
                <h2 className="self-center text-[33px] xl:text-[45px] font-extrabold leading-tight mb-16 lg:mb-20">What Our Customers Have to Say</h2>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 self-center gap-8 max-w-xl lg:max-w-full">
                  <ReviewCard
                    name={"John D."}
                    quote={"I couldn't be happier with the service I received from this HVAC company. When my AC broke down during a heatwave, they responded quickly and had a technician at my door within hours. Fair pricing and excellent customer service make this my go-to for all HVAC needs in the Bay Area."}
                    stars={5}
                  />
                  <ReviewCard
                    name={"Jane D."}
                    quote={"After getting quotes from several companies, I chose this one to install a new heating system in my home. I'm so glad I did! The team was professional from start to finish. They helped me select an energy-efficient model that fits my budget and home's needs. I highly recommend their services to anyone in need of HVAC work."}
                    stars={4.5}
                  />
                </div>
              </div>
            </div>




            {/* Second half */}
            <div className="flex flex-col self-center px-4 max-w-screen-xl my-16 lg:my-36">

              {/* Service map container */}
              <div className="flex flex-col justify-center"> {/* Smaller bottom border then other containers due to map clipping */}
                <div className="self-center font-semibold tracking-wider mb-2">PROUDLY SERVING</div>
                <h2 className="self-center text-center text-[33px] xl:text-[45px] font-extrabold leading-tight mb-16 lg:mb-20">HVAC Solutions Across the Bay Area</h2>
                <LazyMap />
              </div>

            </div>




            {/* Contact banner container */}
            <ContactBanner />




          </div>
      </main>




    </>
  );
}
