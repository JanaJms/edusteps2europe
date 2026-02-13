import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // 1. Logic: Hide on scroll down, show on scroll up
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Prevent logic from running if mobile menu is open
            if (isMenuOpen) return;

            // Fix for iOS bounce effect (ignore negative scroll)
            if (currentScrollY < 0) return;

            if (currentScrollY < 10) {
                setIsVisible(true);
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
                // If scrolling down, hide. If scrolling up, show.
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY, isMenuOpen]); // Added isMenuOpen as dependency

    // 2. Body Lock: Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // 3. Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navbarData = [
        { id: "home", label: "Home", link: "/" },
        { id: "about", label: "About", link: "/about" },
        { id: "services", label: "Services", link: "/services" },
        { id: "accomodations", label: "Accomodations", link: "/accomodations" },
        { id: "faq", label: "FAQ", link: "/faq" },
        { id: "contact", label: "Contact", link: "/contact" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out px-6
                    ${isVisible ? "translate-y-0" : "-translate-y-full"} 
                    ${isAtTop ? "bg-transparent" : "bg-white/80 backdrop-blur-xl shadow-md py-1"}
                `}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="relative z-50">
                        <img src={logo} alt="Logo" className="w-20 md:w-24 lg:w-[120px]" />
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navbarData.map((item) => (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group
                                    ${location.pathname === item.link ? "text-orange" : "text-black-metal hover:text-orange"}
                                `}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange transition-all duration-300 
                                    ${location.pathname === item.link ? "w-full" : "w-0 group-hover:w-full"}`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden p-2 text-black-metal focus:outline-none"
                    >
                        <MenuIcon size={28} />
                    </button>
                </div>
            </header>

            {/* 4. Mobile Menu moved OUTSIDE header so translate-y doesn't affect it */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                data={navbarData}
                currentPath={location.pathname}
            />
        </>
    );
}

function MobileMenu({ isOpen, onClose, data, currentPath }) {
    return (
        // The parent container
        <div 
            className={`fixed inset-0 z-[100] transition-all duration-300 ${
                isOpen ? "visible" : "invisible delay-300" 
            }`}
        >
            {/* 1. Backdrop - Fades in/out */}
            <div 
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`} 
                onClick={onClose} 
            />
            
            {/* 2. The Drawer */}
            <div className={`
                absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl 
                flex flex-col 
                /* IMPORTANT FIXES BELOW */
                overflow-hidden 
                will-change-transform
                transition-all duration-300 ease-in-out
                ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            `}>
                
                {/* Header of Drawer */}
                <div className="flex justify-end p-6">
                    <button onClick={onClose} className="p-2 text-gray-500 hover:text-black">
                        <X size={32} />
                    </button>
                </div>
                
                {/* 3. The Links Container - Added a slight fade-in for the text itself */}
                <nav className={`flex flex-col gap-2 px-6 transition-opacity duration-200 ${
                    isOpen ? "opacity-100 delay-150" : "opacity-0"
                }`}>
                    {data.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={onClose}
                            className={`py-4 px-5 rounded-2xl text-xl font-semibold transition-all
                                ${currentPath === item.link 
                                    ? "bg-orange text-white shadow-lg shadow-orange/20" 
                                    : "text-gray-700 hover:bg-gray-100"}
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}