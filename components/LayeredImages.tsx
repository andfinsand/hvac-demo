import Image from "next/image"

export default function LayeredImages() {
    return (
        <div className="self-center relative w-full lg:w-[60%] max-w-[550px] lg:max-w-[650px] h-[420px] lg:h-[530px]">
            <Image
                src="/example2.webp"
                alt="HVAC vents under a blue sky with clouds"
                width={2000}
                height={1125}
                className="self-center absolute object-cover top-0 right-0 w-[85%] h-[90%] max-h-[320px] lg:max-h-full rounded-3xl shadow-xl"
            />
            <Image
                src="/example1.webp"
                alt="HVAC AC unit on lawn"
                width={1195}
                height={793}
                className="self-center absolute object-cover bottom-0 left-0 border-[10px] border-white w-[65%] h-[65%] rounded-3xl shadow-xl"
            />
        </div>
    );
}
