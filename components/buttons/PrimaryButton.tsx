import Link from "next/link";

type PrimaryButtonProps = {
    href : string;
    label: string;
};

export default function PrimaryButton({ href, label }: PrimaryButtonProps) {
    return (
        <Link href={href}>
            <button className="btn-hover-effect rounded-lg font-semibold text-white w-[180px] py-3 hover:text-black duration-200">{label}</button>
        </Link>
    );
}
