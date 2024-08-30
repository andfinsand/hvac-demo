import Link from "next/link";

type TertiaryButtonProps = {
    href : string;
    label: string;
};

export default function TertiaryButton({ href, label }: TertiaryButtonProps) {
    return (
        <Link href={href}>
            <button className="btn-hover-effect-tertiary rounded-lg font-semibold text-black w-[180px] py-3 hover:text-white duration-200">{label}</button>
        </Link>
    );
}
