import Image from "next/image"
import SecondaryButton from "./buttons/SecondaryButton"

type ServiceCardLargeProps = {
    id: string;
    image: string;
    icon: string;
    label: string;
    content: string;
    installation: boolean;
    repair: boolean;
};

export default function ServiceCardLarge({ id, image, icon, label, content, installation, repair }: ServiceCardLargeProps) {
    return (
        <>
            <div
                id={id}
                className="flex flex-col lg:flex-row overflow-auto h-[650px] lg:h-[420px] xl:h-[380px] max-w-[550px] lg:max-w-screen-xl rounded-xl shadow-xl"
            >

                {/* Service image */}
                <Image
                    src={image}
                    alt="Example images related to the service"
                    width={2048}
                    height={1367}
                    className="self-center object-cover w-full lg:w-[450px] h-1/3 lg:h-full"
                />

                {/* Service content */}
                <div className="flex flex-col justify-between h-full p-6 py-10 xs:py-12 xs:px-14">
                    <div className="flex flex-col">
                        <div className="flex flex-col xl:flex-row xl:justify-between mb-5">
                            <div className="flex flex-row mb-5 xl:mb-0">
                                {/* Image */}
                                <Image
                                    src={icon}
                                    alt="Icon related to the service"
                                    width={100}
                                    height={100}
                                    className="self-center w-[15%] lg:w-20"
                                />
                                <h2 className="self-center font-extrabold text-2xl xs:text-3xl ml-2">{label}</h2>
                            </div>
                            {/* Installation and repair checkmarks */}
                            <div className="flex flex-row self-start xl:self-center gap-3 mr-3">
                                {installation && (
                                    <div className="flex flex-row gap-2">
                                        <Image
                                            src="/green-checkmark.svg"
                                            alt="Green check mark"
                                            width={50}
                                            height={50}
                                            className="w-6 lg:w-8"
                                        />
                                    <div className="self-center font-medium text-lg">Installation</div>
                                </div>
                                )}
                                {repair && (
                                    <div className="flex flex-row gap-2">
                                        <Image
                                            src="/green-checkmark.svg"
                                            alt="Green check mark"
                                            width={50}
                                            height={50}
                                            className="w-6 lg:w-8"
                                        />
                                        <div className="self-center font-medium text-lg">Repair</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Content */}
                        <div className="text-neutral-500 min-w-[240px]">{content}</div>
                    </div>

                    {/* Button to redirect to Contact page */}
                    <div className="self-center lg:self-start mt-5">
                        <SecondaryButton href={"/contact"} label={"GET A QUOTE"} />
                    </div>
                </div>
            </div>
        </>
    );
}
