import Image from "next/image"
import Link from "next/link";

type SocialsProps = {
    link: string;
    src: string;
    alt: string;
}

export default function Socials({ link, src, alt }: SocialsProps) {
    return (
        <>
            <Link
                href={link}
                target="_blank"
                className="p-2 hover:opacity-50 duration-100"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={32}
                    height={32}
                    className="w-5"
                />
            </Link>
        </>
    );
}
