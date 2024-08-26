import Link from "next/link";

type SecondaryButtonProps = {
    href : string;
    label: string;
};

export default function SecondaryButton({ href, label }: SecondaryButtonProps) {
    return (
        <Link href={href}>
            <button className="btn-hover-effect-secondary rounded-lg font-semibold text-white w-[180px] py-3 hover:text-black duration-200">{label}</button>
        </Link>
    );
}
