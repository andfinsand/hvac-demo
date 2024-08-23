import Image from "next/image"
import SecondaryButton from "../components/buttons/SecondaryButton"

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
            <div className="flex flex-col justify-around relative overflow-hidden bg-white w-full h-[350px] rounded-xl shadow-xl px-7 pb-5">

                {/* Gradient border top */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#4896FE] to-blue-700"></div>

                {/* Service icon */}
                <Image
                    src={icon}
                    alt=""
                    width={431}
                    height={342}
                    className="w-20 mt-6 -ml-1"
                />

                {/* Service name and content */}
                <div className="flex flex-col h-[116px]">
                    <h2 className="text-start text-black font-medium text-xl mb-6">{label}</h2>
                    {installation && (
                        <div className="flex flex-row gap-2 mb-4">
                            <Image
                                src="/green-checkmark.svg"
                                alt="Green check mark"
                                width={50}
                                height={50}
                                className="w-5"
                            />
                        <div className="text-start text-neutral-500">Installation</div>
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
                            <div className="text-start text-neutral-500">Repair</div>
                        </div>
                    )}
                </div>

                {/* Service page button */}
                <SecondaryButton href={href} label={"Find out More"} />
            </div>
        </>
    );
}
