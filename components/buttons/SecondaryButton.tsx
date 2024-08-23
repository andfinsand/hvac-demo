import Link from "next/link";

type SecondaryButtonProps = {
    href : string;
    label: string;
};

export default function SecondaryButton({ href, label }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button className="bg-gradient-to-r from-[#4896FE] to-blue-700 text-white font-semibold rounded-lg w-[170px] py-3 hover:bg-blue-500 hover:text-black duration-200">{label}</button>
        </Link>
    );
}
