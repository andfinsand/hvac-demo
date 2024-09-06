import Image from "next/image"
import TertiaryButton from "./buttons/TertiaryButton"

type ServiceCardSmallProps = {
    href: string;
    icon: string;
    label: string;
    installation: boolean;
    repair: boolean;
};

export default function ServiceCardSmall({ href, icon, label, installation, repair }: ServiceCardSmallProps) {
    return (
        <>
            <div className="group flex flex-col justify-around relative overflow-hidden bg-gradient-to-tr from-[#1B4BA1] to-[#4896FE] w-full max-w-[300px] h-[370px] rounded-xl shadow-xl -z-0 px-7 pb-5">

                {/* Service icon */}
                <Image
                    src={icon}
                    alt=""
                    width={218}
                    height={184}
                    className="w-[70px] mt-6"
                />

                {/* Service name and content */}
                <div className="flex flex-col h-[116px]">
                    <h2 className="text-start text-white font-medium text-[21px] mb-6">{label}</h2>
                    {installation && (
                        <div className="flex flex-row gap-2 mb-4">
                            <Image
                                src="/green-checkmark.svg"
                                alt="Green check mark"
                                width={50}
                                height={50}
                                className="w-5"
                            />
                        <div className="text-start text-white font-light">Installation</div>
                    </div>
                    )}
                    {repair && (
                        <div className="flex flex-row gap-2">
                            <Image
                                src="/green-checkmark.svg"
                                alt="Green check mark"
                                width={50}
                                height={50}
                                className="w-5"
                            />
                            <div className="text-start text-white font-light">Repair</div>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[230px] lg:border-b-[190px] xl:border-b-[240px] border-l-[220px] lg:border-l-[170px] xl:border-l-[200px] border-b-white border-l-transparent -z-10 transition-all duration-300 ease-in-out group-hover:border-b-0 group-hover:border-l-0"></div>


                {/* Service page button */}
                <TertiaryButton href={href} label={"Find out More"} />
            </div>
        </>
    );
}
