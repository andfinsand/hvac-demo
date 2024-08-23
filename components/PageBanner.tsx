type PageBannerProps = {
    headline: string;
    image: string;
};

export default function Banner({ headline, image }: PageBannerProps) {
    return (
        <>
            <div
                className="flex justify-center relative text-black w-full h-[280px] lg:h-[450px]"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: "-1",
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    // backgroundAttachment: "fixed",
                }}
            >
                {/* <div className="flex justify-center absolute bg-black opacity-50 w-full h-full"></div> */}
                <h1 className="self-center text-[35px] md:text-[60px] font-bold tracking-tight z-20 mt-5 lg:mt-0">{headline}</h1>
            </div>
        </>
    );
}
