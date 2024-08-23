import PrimaryButton from "./buttons/PrimaryButton"

export default function ContactBanner() {
    return (
        <>
            <div className="contact-banner-image flex justify-center self-center relative w-full xl:max-w-[90%] h-[400px] lg:h-[600px] px-4">
                {/* Light layer */}
                <div className="flex justify-center absolute bg-white opacity-75 w-full h-full"></div>
                {/* Content */}
                <div className="flex flex-col self-center text-center z-10">
                    <h2 className="self-center text-[35px] md:text-[45px] font-extrabold tracking-tight leading-tight min-w-60 max-w-64 md:max-w-80 mb-8">Get It Done With Us Today</h2>
                    <p className="max-w-[500px] font-medium mb-8">Have questions? Our team is just a click away. Fill out our contact form today and let us assist you in achieving your goals.</p>
                    <PrimaryButton href={"/contact"} label={"GET IN TOUCH"} />
                </div>
            </div>
        </>
    );
}
