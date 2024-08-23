import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SidebarProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const currentPath = usePathname()
    const [prevPath, setPrevPath] = useState(currentPath);

    // This effect monitors changes in the current path (URL)
    // It closes the sidebar when navigating to a new page
    useEffect(() => {
        if (currentPath !== prevPath) {
            setIsOpen(false);
            setPrevPath(currentPath);
        }
    }, [currentPath, prevPath, setIsOpen]);

    // Disable scrolling when sidebar is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>

            {/* Background blur layer */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed top-[77px] right-0 h-screen bg-black/60 ${
                    isOpen
                    ? "translate-x-0 opacity-100 transition-all duration-300 ease-in-out"
                    : "translate-x-full opacity-0"
                } w-full z-30 ios-backdrop-blur lg:hidden`}>
            </div>

            {/* Sidebar menu */}
            <div
                className={`fixed top-[77px] right-0 h-screen bg-white ${
                    isOpen
                    ? "translate-x-0 transition-transform duration-300 ease-in-out"
                    : "translate-x-full"
                } w-[270px] z-40 lg:hidden`}
            >

                {/* Page links */}
                <div className="flex flex-col gap-10 text-lg mt-12 mr-5">
                    {[
                        { href: "/", text: "Home" },
                        { href: "/about", text: "About Us" },
                        { href: "/services", text: "Services" },
                        { href: "/map", text: "Map" },
                        { href: "/contact", text: "Contact Us" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`group flex flex-col self-end ${currentPath === link.href ? "active" : ""}`}
                        >
                            <div>{link.text}</div>
                            <div className={`h-0.5 bg-secondary transition-width duration-300 ${currentPath === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></div>
                        </Link>
                    ))}
                </div>

                {/* CALL NOW button */}
                <Link
                    href="tel:555-555-5555"
                    className="flex lg:hidden absolute bottom-24 left-[35px]"
                    aria-label="Call now button"
                >
                    <button className="btn-hover-effect rounded-md lg:rounded-lg font-semibold w-[200px] text-white text-sm py-2 2xl:py-2.5 hover:text-black">CALL NOW: <span className="font-normal">555-555-5555</span></button>
                </Link>

            </div>
        </>
    );
}
