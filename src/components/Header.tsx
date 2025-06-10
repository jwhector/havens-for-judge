import { useEffect } from 'react';
import Image from "astro/components/Image.astro";
import poster from "../assets/poster.png";
import "../styles/Header.css";

// Get current path to determine active page

export default function Header({ pathname }: { pathname: string }) {
    const baseUrl = import.meta.env.BASE_URL || "";
    
    // Function to check if a path is active
    const isActive = (path = "") => {
        const pathWithBaseUrl = baseUrl + path;
        console.log(pathname, path, pathWithBaseUrl);
        return pathname === pathWithBaseUrl;
    };

    useEffect(() => {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        const toggleMenu = () => {
            hamburgerBtn?.classList.toggle('open');
            if (mobileMenu?.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('block');
            } else {
                mobileMenu?.classList.add('hidden');
                mobileMenu?.classList.remove('block');
            }
        };

        hamburgerBtn?.addEventListener('click', toggleMenu);

        return () => {
            hamburgerBtn?.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <header className="w-full">
            <div className="fixed z-50 w-full">
                <div className="flex justify-center relative bg-primary h-[80px] p-6 sm:p-4">
                    <div className="xl:w-[1170px] lg:w-[960px] md:w-[750px] sm:w-[500px] w-screen">
                        <img
                            src={poster.src}
                            alt="Candidate Photo"
                            className="absolute top-0 shadow-[0_4px_6px_rgba(0,0,0,0.4)] z-50 md:w-[300px] sm:w-[250px] w-[150px]"
                        />

                        <button
                            id="hamburger-btn"
                            className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10 relative ml-auto"
                            aria-label="Menu"
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </button>
                    </div>
                </div>
                <nav className="hidden md:flex justify-center bg-white z-50 w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                    <div className="xl:w-[1170px] md:w-[750px] lg:w-[960px] w-screen">
                        <ul className="nav-links sm:ml-[300px] md:ml-[350px] flex list-none gap-4">
                            <li className={isActive("/") ? "bg-primary-light" : ""}>
                                <a href={`${baseUrl}/`} className="px-2 py-2 block">HOME</a>
                            </li>
                            <li className={isActive("/about") ? "bg-primary-light" : ""}>
                                <a href={`${baseUrl}/about`} className="px-2 py-2 block">ABOUT</a>
                            </li>
                            <li className={isActive("/testimonials") ? "bg-primary-light" : ""}>
                                <a href={`${baseUrl}/testimonials`} className="px-2 py-2 block">TESTIMONIALS</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="mobile-menu" className="hidden md:hidden bg-white pt-8 z-60 w-full shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                    <ul className="flex flex-col list-none py-2">
                        <li className={isActive("/") ? "bg-primary-light" : ""}>
                            <a href={`${baseUrl}/`} className="px-4 py-2 block">HOME</a>
                        </li>
                        <li className={isActive("/about") ? "bg-primary-light" : ""}>
                            <a href={`${baseUrl}/about`} className="px-4 py-2 block">ABOUT</a>
                        </li>
                        <li className={isActive("/testimonials") ? "bg-primary-light" : ""}>
                            <a href={`${baseUrl}/testimonials`} className="px-4 py-2 block">TESTIMONIALS</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:pt-[120px] pt-[80px]"></div>
        </header>
    );
}
