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

    // Logic: Hide on scroll down, show on scroll up
    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

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
    }, [lastScrollY]);

    const navbarData = [
        { id: "home", label: "Home", link: "/" },
        { id: "about", label: "About", link: "/about" },
        { id: "services", label: "Services", link: "/services" },
        { id: "apartments", label: "Apartments", link: "/appartments" },
        { id: "faq", label: "FAQ", link: "/faq" },
        { id: "contact", label: "Contact", link: "/contact" }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6
                ${isVisible ? "translate-y-0" : "-translate-y-full"} 
                ${isAtTop ? "bg-transparent" : "bg-white/70 backdrop-blur-xl shadow-md py-1"}
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-24 lg:w-[120px]" />
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
                            {/* Animated underline for active/hover */}
                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-orange transition-all duration-300 
                                ${location.pathname === item.link ? "w-full" : "w-0 group-hover:w-full"}`} 
                            />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
                    <MenuIcon size={24} />
                </button>
            </div>

            {/* Better Mobile Menu (Slide-in) */}
            <MobileMenu 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                data={navbarData} 
                currentPath={location.pathname}
            />
        </header>
    );
}

function MobileMenu({ isOpen, onClose, data, currentPath }) {
    return (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? "visible" : "invisible"}`}>
            {/* Backdrop */}
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
            
            {/* Drawer */}
            <div className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col p-6 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={onClose} className="self-end p-2 mb-8"><X size={28} /></button>
                <div className="flex flex-col gap-1">
                    {data.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={onClose}
                            className={`py-4 px-4 rounded-xl text-lg font-medium transition-colors
                                ${currentPath === item.link ? "bg-orange/10 text-orange" : "text-gray-700 active:bg-gray-100"}
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}