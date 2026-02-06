import { useLayoutEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import logoVideo from "../../assets/images/logoVideo.mp4"
import { MenuIcon, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar({ customStyle, navStyle }) {

    const navbarData = [
        { id: "home", label: "Home", link: "/" },
        { id: "about", label: "About", link: "/about" },
        { id: "services", label: "Services", link: "/services" },
        { id: "packages", label: "Packages", link: "/packages" },
        { id: "faq", label: "FAQ", link: "/faq" },
        { id: "contact", label: "Contact", link: "/contact" }
    ];

    const [isMobile, setIsMobile] = useState(null);
    const location = useLocation();
    const currentPath = location.pathname;
    const isActive = (ele) => Boolean(currentPath === ele.link)

    useLayoutEffect(() => {

        if (typeof window === "undefined") return;

        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const classStyles = {
        HEADER: `px-5 sm:px-8 lg:px-16 w-full py-2 flex items-center justify-between ${customStyle} absolute top-0 left-0 z-20 `,
        LOGO_COMP: "flex items-center space-x-2",
        LOGO: "w-24 lg:w-[140px] cursor-pointer",
        NAVBAR: `md:p-5 md:gap-4 lg:p-6 lg:gap-10 z-100 min-w-max inline-flex justify-center items-center ${navStyle}`,
        LINK: "md:text-base lg:text-lg leading-7 min-w-fit font-medium text-center text-black-metal hover:text-orange/70 transition-all duration-400 ease-in-out",
        ACTIVE_LINK: "!text-orange",
    };

    return (
        <header className={classStyles.HEADER}>
            <div className={classStyles.LOGO_COMP}>
                <a href="/">
                    {
                        isActive({ link: '/' }) ?
                            (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src={logoVideo}
                                    alt="Logo"
                                    className={classStyles.LOGO} />
                            )
                            :
                            (<img
                                src={logo}
                                alt="Logo"
                                className={classStyles.LOGO}
                            />)
                    }

                </a>
            </div>

            {
                (isMobile == null || !navbarData?.length) ?
                    (null)
                    :
                    <>
                        {
                            isMobile ? (
                                <div className="flex items-center gap-2 md:gap-3">

                                    <div className="w-5 h-3.5 sm:w-6 sm:h-[22px]">
                                        <BurgerMenu
                                            menuData={navbarData}
                                            isActive={isActive} />
                                    </div>
                                </div>
                            ) : (
                                <nav className={classStyles.NAVBAR}>
                                    {navbarData.map((ele) => (
                                        <a
                                            key={ele.id}
                                            href={`${ele.link}`}
                                            id={ele.id}
                                            className={`${classStyles.LINK} ${isActive(ele) ? classStyles.ACTIVE_LINK : ""}`}
                                        >
                                            {ele.label}
                                        </a>
                                    ))}
                                </nav>
                            )
                        }
                    </>

            }
        </header >
    );
}

function BurgerMenu({ menuData, isActive }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer fixed right-5">
                <MenuIcon
                    className="w-5 h-3.5 sm:w-6 sm:h-[22px]" />
            </div>

            <div
                className={`w-screen h-screen fixed z-10 top-0 right-0 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                <div
                    className={`relative w-full h-full z-12 bg-[#141415] transition-opacity duration-700 overflow-hidden ${isOpen ? "opacity-30 pointer-events-auto" : "opacity-0"
                        }`}
                />
                <div
                    className={` absolute p-4 top-0 right-0 z-50 h-screen w-[90vw] bg-reddish-orange transform transition-transform duration-300  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div onClick={() => setIsOpen(false)} className="cursor-pointer">
                        <X
                            alt="Close"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={` flex flex-col px-4 py-8 divide-y divide-[#bbb8c3]`}>
                        {menuData.map((item, index) => (
                            <a
                                key={index}
                                className={`${isActive(item) ? "text-orange" : "text-black-metal "} z-10  p-4 relative overflow-hidden group cursor-pointer`}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                href={`${item.link}`}
                            >

                                {item.label}
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 backdrop-blur-sm"
                                    style={{ background: "linear-gradient(135deg, #fbe8df, #d66349)" }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
